const nodemailer = require("nodemailer");
const OtpModel = require("../model/otpSchema");

const sendOTPMail = async (email, otp) => {
    try {
        let mailer = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            port: 465,
            auth: {
                user: "lpu.education.12105458@gmail.com",
                pass: "dyknjcuuojffendy",
                user: process.env.NODEMAILER_MAIL_USER,
                pass: process.env.NODEMAILER_MAIL_PASS,
            },
        });

        const response = await mailer.sendMail({
            from: "abcd", // likhilesh@<home.cloud.app>
            to: email,
            subject: "OTP", // OTP verification for your account
            html: `
                <html>
                    <body>
                        <h1> Your OTP for Cloud Home APP is </h1>
                        <h1> ${otp} </h1>
                    </body>
                </html>
            `,
        });

        console.log(response);

        return true;
    } catch (err) {
        console.log("--------------------------------");
        console.log(err);
        console.log("--------------------------------");

        return false;
    }
};

const generateOtp = async (req, res) => {
    try {
        const { email,_id } = req.user;
        const restrictedTimeForOTP = 10 * 60 * 1000;
        const sentOTPMail = await OtpModel.findOne({
            email,
            createdAt : {
                $gte: Date.now() = restrictedTimeForOTP,
        },
    });
    if(sendOTPMail){
        res.status(200)
        res.json({
            status:"success",
            message:`OTP already sent to ${email}`,
            data:{
                expiresAt: sentOTPMail.expiresAt,
            },
        });
        return;
    }

    console.log("sentOPTMail:", sentOPTMail);

    const randomOTP = Math.floor(Math.random() * 9000 + 1000);

    const isMailSent = await sendOTPMail(email, randomOTP);

        if (!isMailSent) {
            res.status(500);
            res.json({
                status: "Fail",
                message: `Otp NOT sent to ${email}`,
                data: {},
            });
            return;
        }

        await OtpModel.create({
            otp:randomOTP,
            email,
            userId:_id,
        })

        // create a entry in database with that OTP

        res.status(201);
        res.json({
            status: "success",
            message: `Otp sent to ${email}`,
            data: {},
        });
    } catch (err) {
        console.log("----------------------------");
        console.log(err);
        console.log("----------------------------");
        res.status(500).json({
            status: "fail",
            message: "Internal Server Error",
            data: err,
        });
    }
};

module.exports = { generateOtp };
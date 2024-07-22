const useVerifyOtp = () =>{
    const verifyOtp = async () =>{
        const res = await fetch(`${process.env.BACKEND_URL}/api/v1/otp/verify`,{
            method: 'POST',
            body:JSON.stringify
        })
    }
}
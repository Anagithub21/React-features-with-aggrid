import React from 'react'
import { useForm } from 'react-hook-form'

const Signup = () => {
    const { register, errors, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        const fields = { fields: data };
    }
    return (
        <>
            <h1 className="text-center text-4xl font-semibold mt-20">Register Yourself</h1>
            <form className="max-w-xl m-auto py-10 mt-10 px-12 border"
                onSubmit={handleSubmit(onSubmit)}>
                <label className="text-gray-600 font-medium">NAME:</label>
                <input className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" type="text" placeholder="Enter Full Name" autoFocus name="user_name" />
            </form>
        </>
    )
}

export default Signup

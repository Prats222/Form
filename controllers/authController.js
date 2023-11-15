import JWT  from "jsonwebtoken";
import userModel from "../models/userModel.js";
import { comparePassword,hashPassword } from "../helpers/authHelper.js";
//POST LOGIN
// export const loginController=async(req,res) =>{
//     try {
//        const {email,password} = req.body
//        //Validation
//        if(!email || !password){
//         return res.status(404).send({
//             success:false,
//             message:'Invalid Username or password'
//         })
//        }
//        //check user
//        const user = await userModel.findOne({email})
//        if(!user){
//         return res.status(404).send({
//             success:false,
//             message:'Email is not Registered'
//         })
//        }
//        const match= await comparePassword(password,user.password)
//        if(!match){
//         return res.status(404).send({
//             success:false,
//             message:'Password did not match'
//         })
//        }
//     //token
//    const token = await JWT.sign({ _id: user.id},process.env.JWT_SECRET, {expiresIn:"900d"});

//    res.status(200).send({
//     success:true,
//     message:'Logged In Succesfully',
//     user:{
//        name:user.name,
//        email:user.email,
//        phone:user.phone,
//        address:user.address ,
//        role:user.role
//     },
//     token,
//    })

// } catch (error) {
//     console.log(error)
//     res.status(500).send({
//         success:false,
//         message:'error in Login',
//         error
//     })
// }
// };



// ... (import statements)

// POST LOGIN
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: 'Invalid Username or password'
            });
        }

        // Assuming user creation logic with UserModel (replace with your actual model)
        const existingUser = await userModel.findOne({ email });

        // If user exists, use the existing user
        if (existingUser) {
            console.log('User already exists:', existingUser);
        } else {
            // Create a new user in the database (replace with your actual user creation logic)
            const newUser = await userModel.create({
                email,
                password: await hashPassword(password), // Hash the password before storing (use your hash function)
                // Include other user details as needed
            });
            console.log('New user created:', newUser);
        }

        // Generate a token for the user (replace with your token generation logic)
        const token = 'YourGeneratedTokenHere'; // Generate a JWT token here

        // Return success response
        return res.status(200).send({
            success: true,
            message: 'Logged In Successfully',
            token
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).send({
            success: false,
            message: 'Error in Login',
            error: error.message
        });
    }
};

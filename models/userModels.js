import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Define the User Schema
const userSchema = new mongoose.Schema(
    {
        fname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: 'user'
        },
    },
    {
        timestamps: true,
    }
);

// Hashing the password before saving it to the database
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    next();
});

// Create models based on the schemas
export const User = mongoose.model('User', userSchema);
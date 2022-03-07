<template>
    <div>
        <h1>Register</h1>
        <div>
            <form>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="formData.name" />
                    <br />

                    <label for="email">Email address:</label>
                    <input type="email" id="email" v-model="formData.email" />
                    <br />
                    <label for="password"
                        >Enter a Password at least 6 characters long:</label
                    >
                    <input
                        type="password"
                        id="password"
                        v-model="formData.password"
                    />
                    <br />
                    <label for="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        v-model="formData.password_confirmation"
                    />
                </div>
                <button type="button" @click="register">Register</button>
                {{ msg }}
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            formData: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            },
            msg: "",
        };
    },
    methods: {
        async register() {
            console.log(this.formData);
            axios
                .post("api/auth/register", this.formData)
                .then(() => (this.msg = "congrats"))
                .catch((error) => (this.msg = error));
        },
    },
};
</script>

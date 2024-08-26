<script setup>
import SignBackground from '@/components/form/SignBackground.vue';
import PasswordField from '@/components/form/PasswordField.vue';
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import z from 'zod'

const schema = z.object({
    email: z.string().email({message : "Email inválido"}),
    password: z.string()
        .min(10, { message: "Minimo de 10 letras" })
        .regex(/[A-Z]/, { message: "Deve ter no minimo uma letra maiúscula " })
        .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "A senha deve conter pelo menos um caractere especial" })
        .regex(/\d/, "A senha deve conter pelo menos um dígito"),
    repeat: z.string()
        .min(10, { message: "Minimo de 10 letras" })
        .regex(/[A-Z]/, { message: "Deve ter no minimo uma letra maiúscula " })
        .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "A senha deve conter pelo menos um caractere especial" })
        .regex(/\d/, "A senha deve conter pelo menos um dígito"),
    confirm: z.boolean().default(false).refine((check) => check === true, { message: "Aceite os termos" })
})

const { values, defineField, errors, handleSubmit, handleReset, setErrors } = useForm({
    validationSchema: toTypedSchema(schema)
})
const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [repeat, repeatAttrs] = defineField('repeat')
const [confirm, confirmAttrs] = defineField('confirm')


const submit = handleSubmit(values => {
    if (values.password !== values.repeat) {
        setErrors({
            repeat: "As senhas não coincidem"
        })
        return
    }
})


</script>

<template>
    <SignBackground title="Cadastre-se" subtitle="Crie sua conta para acessar." :schema="schema">
        <template v-slot:form>
            <form @submit.prevent="submit" class="d-flex flex-column align-center w-100 ga-2">
                <v-text-field variant="outlined" v-model="email" class="w-50 rounded" :error-messages="errors.email" :error="false"
                    label="Email" :class="{ 'w-75' : $vuetify.display.smAndDown }"></v-text-field>
                <password-field v-model="password" label="Senha" :error-field="errors.password" />
                <password-field v-model="repeat" label="Confirmar senha" :error-field="errors.repeat" />
                <v-checkbox class="w-50 text-subtitle-2" v-model="confirm" :error-messages="errors.confirm"
                :class="{ 'w-75' : $vuetify.display.smAndDown }">
                    <template v-slot:label>
                        <p class="text-caption">Ao confirmar o cadastro, você consente conforme a LGPD (Lei
                            13.709/2018) para o tratamento seguro de seus dados.</p>
                    </template>
                </v-checkbox>

                <v-btn type="submit" round color="primary" class="w-50 py-7 d-flex align-center " dark
                :class="{ 'w-75' : $vuetify.display.smAndDown }">criar
                    conta</v-btn>
            </form>
        </template>
        <template v-slot:footer>
            <p class="mt-2 text-subtitle-1">Já possui conta? <RouterLink to="/signin" class="text-primary no-underline">Login</RouterLink>
            </p>
        </template>
    </SignBackground>
</template>


<style scoped>
.wrap {
    display: flex;
    align-items: center;
    height: 100dvh;
    background-color: #282A42;
}

.no-underline {
    text-decoration: none;
}

.image {
    width: 100dvh;
    bottom: 0;
    position: absolute;
    left: -30em;
}
</style>
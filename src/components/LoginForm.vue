<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-5 mt-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">
          Login Form
        </h2>

        <v-row justify="center" class="mt-5">

          <v-card class="mx-auto" min-width="600" variant="outlined">
            <v-card-item class="my-5">
              <v-form>
                <div class="mt-3">
                  <v-text-field v-model="v$.contactEmail.$model" label="E-mail" required></v-text-field>
                  <div v-for="(error, index) in v$.contactEmail.$errors" :key="index">
                    {{ error.$message }}
                  </div>
                </div>

                <div class="mt-3">
                  <v-text-field v-model="v$.password.$model" label="Password" required></v-text-field>
                  <div v-for="(error, index) in v$.password.$errors" :key="index">
                    {{ error.$message }}
                  </div>
                </div>
              </v-form>

            </v-card-item>

            <v-card-actions>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-btn variant="outlined" @click="submitForm">
                      Login
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import router from "@/router";

export default {
  name: 'LoginForm',
  setup() {
    const rules = {
      contactEmail: {
        required,
        email
      },
      password: {
        minLength: minLength(6),
        required
      },
    }
    const state = reactive({
      contactEmail: "",
      password: "",
    });

    const submitForm = () => {
      v$.value.$touch()
      if (!v$.value.$invalid) {
        console.log('error')
        router.push({ path: '/game' })
      }
    }
    const v$ = useVuelidate(rules, state)

    return {
      v$, submitForm
    }
  },

}
</script>

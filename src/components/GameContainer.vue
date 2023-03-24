<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="my-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">
          The Game
        </h2>
        <div class="mt-3">
          <v-text-field type="number" step="1" min="0" v-model.number="width" label="'Size X"></v-text-field>

          <v-text-field type="number" step="1" min="0" v-model.number="height" label="'Size Y"></v-text-field>


          <v-btn @click="draw">
            Draw square
          </v-btn>
        </div>

      </v-col>

      <v-col cols="12">
        <v-sparkline :fill="false" :line-width="5" :padding="padding" :smooth="radius || false" :value="value"
          auto-draw></v-sparkline>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'GameComponent',
  setup() {
    const width = ref(0);
    const height = ref(0);

    const draw = () => {
      console.log(width.value, height.value)
    }

    return { width, height, draw }
  },

}
</script>

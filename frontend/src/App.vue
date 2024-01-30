<template>
  <div>
    <v-app>
      <v-layout class="background">
        <NavigationHeader/>
        <v-main>
          <v-container>
            <RouterView/>
          </v-container>
        </v-main>
    </v-layout>
  </v-app>
  </div>
</template>
<script>
import NavigationHeader from "@/components/interface/NavigationHeader.vue"
export default {
    name: 'App',
    components: {
      NavigationHeader
    },
}
</script>
<style>

html, body, .background {
  background-color: black;
  color: white;
}

a {
  text-decoration: none;
}


</style>
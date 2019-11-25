<template>

  <div id="app" class="container">
    <router-link :to="{name: 'inicio'}">
      <div class="text-center">
        <img src="@/assets/logo.png" alt="">
      </div>
      
    </router-link>
    
    <router-view/>
  </div>
</template>


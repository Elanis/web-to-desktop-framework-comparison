<script setup lang="ts">
import { ref } from "vue";
import { GetAll, Add } from "@/api/fooService";
const foo = ref("");
const bar = ref("");
const count= ref(0);
function postBar(data:string) {
  bar.value = data;
  console.log("DotNet invoke the function with param:" + data);
  // return bar;
}
window["postBar"] = postBar;
async function add() {
  count.value = await Add({ a: count.value, b: 1 });
}
async function getFoo() {
  foo.value = await GetAll();
}
</script>

<template>
  <div class="home">
    <div>
      <h3>foo:</h3>
      <button @click="getFoo">click to get foo</button>
      <br />
      <span>{{ foo }}</span>
    </div>
    <div>
      <h3>bar:</h3>
      <span>{{ bar }}</span>
    </div>
    <div>
      <button @click="add">click here to add</button>
      <span>click count:{{ count }}</span>
    </div>
  </div>
</template>

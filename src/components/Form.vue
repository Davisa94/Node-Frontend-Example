<template>
    <v-container>
        <dd-form
           :data="exampleDataSet"
           :descriptions="exampleDescriptions"
           @submit="submit">
        </dd-form>
    </v-container>
</template>

<script>
export default {
    name: "Form",
    data:() => ({
        exampleDataSet: {},
        exampleDescriptions: {
      "name": { view: 'text', label: 'Full name'}
  }
    })
}
</script>
<template>
    <table class="table">
      <thead>
        <tr>
          <th class="table-danger" scope="col">#</th>
          <th class="table-success" scope="col">Nombre</th>
          <th class="table-primary" scope="col">Apellido</th>
          <th class="table-success" scope="col">Run</th>
          <th class="table-secondary" scope="col">Nacimiento</th>
          <th class="table-primary" scope="col">Edad</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for= "(TablaPersona, index) of TablaPersonas" :key="index" >  
          <td>{{index}}</td>
          <td class="table-primary">{{TablaPersona.Nombre}}</td>
          <td class="table-secondary">{{TablaPersona.Apellido}}</td>
          <td class="table-primary">{{TablaPersona.Run}}</td>  
          <td class="table-warning">{{TablaPersona.Nacimiento}}</td>
          <td class="table-success">{{TablaPersona.Edad}}</td>      
        </tr>
      </tbody>
    </table>
 
</template>
<script>
export default {
  name: "app",
  data: () => ({
    TablaPersonas: 
    [{
      Nombre: "Pedro",
      Apellido: "Sanchez",
      Run:"12.222.333-6",
      Nacimiento: "10/08/1997",
      Edad: "29"
    },
    {
      Nombre: "Caroline Facunda",
      Apellido: "De la Mancha",
      Run:"12.222.333-6",
      Nacimiento: "20/04/1945",
      Edad: "75"
    },
     {
      Nombre: "Robin Amaranto",
      Apellido: "Del Secano",
      Run:"12.222.333-6",
      Nacimiento: "10/01/1960",
      Edad: "61"
    }]
  }),
};
</script>

<style>
td{
  font-style: italic;
}
</style>

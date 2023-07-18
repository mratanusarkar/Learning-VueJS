<template>
  <div class="home">
    <FilterNav :current="current" @filterChange="current=$event"/>
    <div v-if="filteredProjects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject :project="project" @complete="handleComplete" @ongoing="handleOngoing" @delete="handleDelete"/>
      </div>
    </div>
  </div>
</template>

<script>
import FilterNav from '../components/FilterNav.vue'
import SingleProject from '../components/SingleProject.vue'

export default {
  name: 'HomeView',
  components: {
    FilterNav,
    SingleProject
  },
  data() {
    return {
      projects: [],
      current: 'all'
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => this.projects = data)
    .catch(err => console.log(err.message))
  },
  methods: {
    handleComplete(id) {
      let pj = this.projects.find(project => {
        return project.id === id
      })
      pj.complete = !pj.complete
      pj.ongoing = false
    },
    handleOngoing(id) {
      let pj = this.projects.find(project => {
        return project.id === id
      })
      pj.ongoing = !pj.ongoing
      pj.complete = false
    },
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id
      })
    }
  },
  computed: {
    filteredProjects() {
      if (this.current === 'todo') {
        return this.projects.filter(project => !project.ongoing && !project.complete)
      }
      if (this.current === 'completed') {
        return this.projects.filter(project => project.complete)
      }
      if (this.current === 'ongoing') {
        return this.projects.filter(project => project.ongoing)
      }
      return this.projects
    }
  }
}
</script>

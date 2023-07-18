<template>
  <div class="project" :class="{ complete: project.complete, ongoing: project.ongoing }">
    <div class="actions">
      <h3 @click="showDetails = !showDetails">
        {{ project.title }}
      </h3>
      <div class="icons">
        <router-link :to="{ name: 'EditProject', params: { id: project.id }}">
          <span @click="" class="material-icons">edit</span>
        </router-link>
        <span @click="deleteProject" class="material-icons">delete</span>
        <span @click="ongoingProject" class="material-icons progress">hourglass_empty</span>
        <span @click="completeProject" class="material-icons tick">done</span>
      </div>
    </div>
    <div v-if="showDetails" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:3000/projects/' + this.project.id
    }
  },
  methods: {
    completeProject() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ complete: !this.project.complete, ongoing: false })
      })
      .then(res => {
        console.log('Patch Response Status:', res.statusText)
        res.ok ? this.$emit('complete', this.project.id) : null
      })
      .catch(err => console.log(err))
    },
    ongoingProject() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ongoing: !this.project.ongoing, complete: false })
      })
      .then(res => {
        console.log('Patch Response Status:', res.statusText)
        res.ok ? this.$emit('ongoing', this.project.id) : null
      })
      .catch(err => console.log(err))
    },
    deleteProject() {
      fetch(this.uri, { method: 'DELETE' })
      .then(res => {
        console.log('Delete Response Status:', res.statusText)
        res.ok ? this.$emit('delete', this.project.id) : null
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
.project.ongoing {
  border-left: 4px solid #ee8f00;
}
.project.ongoing .progress {
  color: #bb700088;
}
.project.ongoing .progress:hover {
  color: #ee8f00;
}
.project.complete {
  border-left: 4px solid #00ce89;
}
.project.complete .tick {
  color: #00885688;
}
.project.complete .tick:hover {
  color: #00ce89;
}
</style>

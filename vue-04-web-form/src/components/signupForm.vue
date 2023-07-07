<template>
  <form @submit.prevent="handleFormSubmit">
    <label>Email</label>
    <input type="email" required v-model="email">

    <label>Password</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role</label>
    <select v-model="role">
      <option value="admin">Admin</option>
      <option value="mod">Moderator</option>
      <option value="member">Member</option>
      <option value="user">User</option>
    </select>

    <label>Skills</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill">
    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>


    <div class="purpose">
      <input type="checkbox" value="artist" v-model="purpose">
      <label>Artist</label>
      <input type="checkbox" value="engineer" v-model="purpose">
      <label>Engineer</label>
      <input type="checkbox" value="researcher" v-model="purpose">
      <label>Researcher</label>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="terms">
      <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button>Create Account</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      role: 'member',
      tempSkill: '',
      skills: [],
      purpose: [],
      terms: false,
      passwordError: ''
    }
  },
  methods: {
    addSkill(e) {
      if ((e.key === ',' || e.key === 'Enter') && this.tempSkill) {
        this.tempSkill = this.tempSkill.replaceAll(',', '').trim()
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
        }
        this.tempSkill = ''
      }
    },
    deleteSkill(skill) {
      // delete only the first occurence
      // this.skills.splice(this.skills.indexOf(skill), 1)

      // delete all occurrences
      this.skills = this.skills.filter(e => e !== skill);
    },
    handleFormSubmit() {
      console.log("Form Submitted!");

      // validate password
      this.passwordError = this.password.length >= 8 ? '' : 'Password must be at least 8 chars long'

      if (!this.passwordError) {
        console.log('email:', this.email);
        console.log('password:', this.password);
        console.log('role:', this.role);
        console.log('skills:', this.skills);
        console.log('purpose:', this.purpose);
        console.log('terms accepted:', this.terms);
      }
    }
  }
}
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.purpose input {
  margin: 0;
}
.purpose label {
  margin: 25px 20px 15px 10px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>

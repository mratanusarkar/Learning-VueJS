<template>
  <form>
    <label>Email</label>
    <input type="email" required v-model="email">

    <label>Password</label>
    <input type="password" required v-model="password">

    <label>Role</label>
    <select v-model="role">
      <option value="admin">Admin</option>
      <option value="mod">Moderator</option>
      <option value="member">Member</option>
      <option value="user">User</option>
    </select>

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
  </form>

  <div>
    <h3>Demo 2-Way Data Binding:</h3>
    <div>
      <p>Email: {{ email }}</p>
      <p>Password: {{ password }}</p>
      <p>Role: {{ role }}</p>
      <p>Terms Accepted: {{ terms }}</p>
      <p>Purpose: {{ purpose }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'dummy@email.com',
      password: '',
      role: 'member',
      terms: false,
      purpose: []
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
</style>

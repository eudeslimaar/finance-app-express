export default class User {
    constructor(id, firstname, lastname, preferredName, email, username, password, createdAt) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.preferredName = preferredName;
      this.email = email;
      this.username = username;
      this.password = password;
      this.createdAt = createdAt;
    }
  }
  
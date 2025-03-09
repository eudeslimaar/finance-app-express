export default class User {
	constructor(id, firstname, lastname, preferredName, email, username, password, createdAt, updatedAt) {
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.preferredName = preferredName;
		this.email = email;
		this.username = username;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		//private
		this._password = password;
	}

	getPassword() {
		return this._password;
	}

	toJSON() {
		return {
			id: this.id,
			firstname: this.firstname,
			lastname: this.lastname,
			preferredName: this.preferredName,
			email: this.email,
			username: this.username,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt
		};
	}
}

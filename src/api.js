
const UserAPI = {
  users: [{ number: 1, name: "Fadoua", position: "G" }],
  all: function() {
    return this.users;
  },
  get: function(id) {
    const isUser = p => p.number === id;
    return this.users.find(isUser);
  }
};

export default UserAPI;

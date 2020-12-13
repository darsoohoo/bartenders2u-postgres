module.exports = class ApplicationPolicy {

  constructor(user, record, collaborator=null) {
    this.user = user;
    this.record = record;
    this.collaborator = collaborator;
  }

  _isCollaborator() {
  return this.collaborator;
  }

  _isStandard() {
    return this.user && this.user.role == "standard";
  }

  _isAdmin() {
    return this.user && this.user.role == "admin";
  }

  _isPremium() {
    return this.user && this.user.role == "premium";
  }

  new() {
    return this.user != null;
  }

  create() {
    return this.new();
  }

  show() {
    return true;
  }

  edit() {
      return (
      this.new() &&
      this.record &&
      (this._isOwner() || this._isAdmin() || this._isCollaborator)
    );
  }

  update() {
    return this.edit();
  }

  destroy() {
    return this.update();
  }
}
const html = require('html-template-tag');
const layout = require('./layout');

module.exports = () =>
  layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div class="form-group">
      <label for="name" class="col-sm-2 control-label">Author name</label>
      <div class="col-sm-10">
        <input id="name" name="name" type="text" class="form-control" value="PLACEHOLDER FOR AUTHOR NAME FIELD"/>
      </div>
    </div>

    <div class="form-group">
      <label for="email" class="col-sm-2 control-label">Author email</label>
      <div class="col-sm-10">
        <input id="email" name="email" type="text" class="form-control" value="PLACEHOLDER FOR AUTHOR EMAIL FIELD"/>
      </div>
    </div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="content" class="col-sm-2 control-label">Article Content</label>
      <div class="col">
        <textarea id="content" name="content" class="form-control" placeholder="PLACEHOLDER FOR CONTENT FIELD" rows="10"></textarea>
      </div>
    </div>

    <div class="form-group">
      <label for="status" class="col-sm-2 control-label">Status</label>
      <div class="col-sm-10">
        <input id="status" name="status" type="text" class="form-control" value="open"/>
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);

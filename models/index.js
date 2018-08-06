const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false,
});

function generateSlug(title) {
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

db.authenticate().then(() => {
  console.log('connected to the database');
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
  },
}, {
  hooks: {
    beforeValidate: (page, options) => {
      page.slug = generateSlug(page.title);
    }
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlphanumeric: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

User.hasMany(Page, {as: 'pages'});
Page.belongsTo(User, {as: 'author'});

module.exports = {
  db,
  Page,
  User,
};

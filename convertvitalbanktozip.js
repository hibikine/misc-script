const fs = require('fs');
const vitalbanks = fs.readdirSync('./').filter((f) => f.endsWith('.vitalbank'));
vitalbanks.forEach((v) => {
  const newFile = v.replace(/.vitalbank$/, '.zip');
  fs.renameSync(v, newFile);
});

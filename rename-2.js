// Node.js program to demonstrate the
// fs.rename() method

// Import filesystem module
const fs = require("fs");

const variantAndColors = {};

const fixName = (name) => {
  if (name === "Altelier") {
    return "Atelier";
  }

  if (name === "Shandi") {
    return "Skandi";
  }

  return name;
};

function footboards() {
  fs.readdirSync(__dirname + "/public/images/empresa/footboards").forEach(
    (filename) => {
      const sanitizedFileName = filename
        .replaceAll("Empresa_", "")
        .replaceAll("Footboard_Footboard", "Footboard")
        .replaceAll(".png", "");
      const [nameOrigin, finish] = sanitizedFileName.split("_");
      const name = fixName(nameOrigin).trim();

      fs.rename(
        __dirname + "/public/images/empresa/footboards/" + filename,
        `${__dirname}/public/images/empresa/footboards/${name}_${finish}.png`,
        function (err) {
          if (err) console.log("ERROR: " + err);
        }
      );

      variantAndColors[name] = [
        ...(variantAndColors[name] || []),
        {
          color: finish.trim(),
          options: {},
        },
      ];
    }
  );

  // console.log(variantAndColors);
  // save variants in json
  try {
    fs.writeFileSync(
      __dirname + "/src/data/bed_variants.json",
      JSON.stringify(variantAndColors)
    );
    // file written successfully
  } catch (err) {
    console.error(err);
  }
}

function headboards() {
  fs.readdirSync(__dirname + "/public/images/empresa/headboards").forEach(
    (filename) => {
      const sanitizedFileName = filename
        .replaceAll("Empresa_", "")
        .replaceAll("Headboard_Headboard", "Headboard")
        .replaceAll(".png", "");
      const [nameOrigin, finishOrigin] = sanitizedFileName.split("_");
      const name = fixName(nameOrigin).trim();
      const finish = finishOrigin.trim();

      fs.rename(
        __dirname + "/public/images/empresa/headboards/" + filename,
        `${__dirname}/public/images/empresa/headboards/${name}_${finish}.png`,
        function (err) {
          if (err) console.log("ERROR: " + err);
        }
      );
    }
  );
}

function headboards() {
  fs.readdirSync(__dirname + "/public/images/empresa/headboards").forEach(
    (filename) => {
      const sanitizedFileName = filename
        .replaceAll("Empresa_", "")
        .replaceAll("Headboard_Headboard", "Headboard")
        .replaceAll(".png", "");
      const [nameOrigin, finishOrigin] = sanitizedFileName.split("_");
      const name = fixName(nameOrigin).trim();
      const finish = finishOrigin.trim();

      fs.rename(
        __dirname + "/public/images/empresa/headboards/" + filename,
        `${__dirname}/public/images/empresa/headboards/${name}_${finish}.png`,
        function (err) {
          if (err) console.log("ERROR: " + err);
        }
      );
    }
  );
}
function sidepanels() {
  fs.readdirSync(__dirname + "/public/images/empresa/sidePanels").forEach(
    (filename) => {
      const sanitizedFileName = filename
        .replaceAll("Empresa_SidePannels-", "")
        .replaceAll("Empresa_", "")
        .replaceAll("SidePanels_", "")
        .replaceAll("Part-", "")
        .replaceAll("Part", "")
        .replaceAll(".png", "");
      const [finish, part] = sanitizedFileName.split("_");
      console.log(finish, part);
      fs.rename(
        __dirname + "/public/images/empresa/sidePanels/" + filename,
        `${__dirname}/public/images/empresa/sidePanels/${finish}_${part}.png`,
        function (err) {
          if (err) console.log("ERROR: " + err);
        }
      );
    }
  );
}

footboards();
headboards();
sidepanels();

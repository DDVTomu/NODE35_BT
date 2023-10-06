import { Sequelize } from "sequelize";

const sequelize = new Sequelize("BC50_FOOD", "root", "1234", {
    host: "localhost",
    port: "3307",
    dialect: "mysql"
});

export default sequelize;

// => Database First => kéo tất table của database về code => tự tạo model (DAO)
// yarn add sequelize-auto

//  yarn sequelize-auto -h localhost -d db_youtube -u root -x 1234 -p 3306 --dialect mysql -o ./src/models -l esm
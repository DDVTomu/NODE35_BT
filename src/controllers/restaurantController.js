import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

let model = initModels(sequelize);

const getRestaurant = async (req, res) => {
  // SELECT * FROM video;
  let data = await model.restaurant.findAll();
  res.send(data);
  // res.send("DOG WHITSLE !!!!, DOG WHITSLE !!!!, COME'ERE DOGS !!!!!");
};

const getLikes = async (req, res) => {
  // SELECT * FROM video;
  let { resId } = req.params;
  let data = await model.like_res.findAll({
    where: {
      res_id: resId,
    },
  });
  res.send({
    data,
    totalLikes: data.length,
  });
  // res.send("DOG WHITSLE !!!!, DOG WHITSLE !!!!, COME'ERE DOGS !!!!!");
};

// const createVideo = (req, res) => {
//     res.send("create video")
// }

// const getVideoType = async (req, res) => {
//     let data = await model.video_type.findAll();

//     res.send(data);
// }

// const getVideoTypeId = async (req, res) => {
//     let { typeId } = req.params;
//     // SELECT * FROM video WHERE type_id = {typeId}
//     let data = await model.video.findAll({
//         where: {
//             type_id: typeId
//         }
//     });

//     res.send(data);
// }
// const getVideoId = async (req, res) => {
//     let { videoId } = req.params;

//     // => [{}]
//     // => {}
//     // let data = await model.video.findOne({
//     //     where: {
//     //         video_id: videoId
//     //     }
//     // });

//     let data = await model.video.findByPk(videoId, {
//         include: ["user"]
//     });

//     let dataComment = await model.video_comment.findAll({
//         where: {
//             video_id: videoId
//         },
//         include: ["user"]
//     })

//     res.send({
//         data,
//         dataComment
//     });
// }

export { getRestaurant, getLikes };

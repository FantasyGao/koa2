const mongodb = require('./config.js');
const Schema = mongodb.Schema;

// 文章项
let articleItem = {
    articleId:String,
    time: { type: Date, default: Date.now },
    topic:String,
    tag:[
        {
            tagId:String,
            tagName:String
        }
    ],
    classic:String,
    markNum:{ type: Number, default:0 },
    markList:[
        {
            userName:String,
            userEmail:String,
            markTime: { type: Date, default: Date.now },
            markContent:String,
            like:{ type: Number, default:0 },
            markNum:{ type: Number, default:0 },
            pv:{ type: Number, default:0 },
            replyList:[
                {
                    replyName:String,
                    replyEmail:String,
                    replyedUser:String,
                    replyTime: { type: Date, default: Date.now },
                    replyContent:String
                }
            ]
        }
    ]
};
// 用户项
let adminUser = {
    user:String,
    password:String,
    joinTime: { type: Date, default: Date.now }
};
// 登录日志
let loginLogs = {
    user:String,
    password:String,
    ip:String,
    loginTime: { type: Date, default: Date.now }
};

let articleSchema = new Schema(articleItem);
let userSchema = new Schema(adminUser);
let logSchema = new Schema(loginLogs);

let articleModel = mongodb.model("articleModel", articleSchema);
let userModel = mongodb.model("userModel", userSchema);
let logModel = mongodb.model("logModel", logSchema);

exports.articleAPI = articleModel;
exports.userAPI = userModel;
exports.logAPI = logModel;
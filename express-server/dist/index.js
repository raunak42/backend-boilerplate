"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./routes/user"));
const admin_1 = __importDefault(require("./routes/admin"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`course selling app listening at http://localhost:${port}`);
});
app.use((0, cors_1.default)());
app.use("/user", user_1.default);
app.use("/admin", admin_1.default);
mongoose_1.default.connect("your-connection-string", { dbName: "your-db-name" });

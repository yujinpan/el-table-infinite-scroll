import { ElTable, ElTableColumn, ElSwitch } from 'element-plus';

// auto base/dark style
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'element-plus/theme-chalk/index.css';

export function install(app) {
  app.use(ElTable);
  app.use(ElTableColumn);
  app.use(ElSwitch);
}

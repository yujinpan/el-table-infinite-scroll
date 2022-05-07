import Vue from 'vue';

import {
  Row,
  Col,
  Divider,
  Table,
  TableColumn,
  Switch,
  Message
} from 'element-ui';
import 'element-ui/lib/theme-chalk/base.css';
import 'element-ui/lib/theme-chalk/row.css';
import 'element-ui/lib/theme-chalk/col.css';
import 'element-ui/lib/theme-chalk/divider.css';
import 'element-ui/lib/theme-chalk/table.css';
import 'element-ui/lib/theme-chalk/table-column.css';
import 'element-ui/lib/theme-chalk/switch.css';
import 'element-ui/lib/theme-chalk/message.css';

Vue.prototype.$message = Message;

[Row, Col, Divider, Table, TableColumn, Switch].forEach((item) =>
  Vue.use(item)
);

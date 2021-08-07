/*
 * @Description: Created By Pony
 * @Author: Pony
 * @Date: 2020-02-26 17:01:15
 * @LastEditors: Pony
 * @LastEditTime: 2021-08-07 23:18:47
 */
import {Avatar,Divider,Row,Col} from 'antd'
import '../static/style/components/author.css'

const Author = () =>{

    return(
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/5029531f5c67adb0c049a86f28c96826~300x300.image" />
                <div className="author-introduction">
                    乐观开朗的逍遥子，专注于学好前端每一个框架。立志要学好所有前端知识点的男人。
                    <Divider>社交账号</Divider>
                    <Row type="flex" justify="start">
                        <Col span={24} className="author-infos">
                            <Avatar size={28} icon='github' className="account" />Epic-Deno
                        </Col>
                    </Row>
                    <Row type="flex" justify="start">
                        <Col span={24} className="author-infos">
                             <Avatar size={28} icon='qq' className="account" />1557549413
                        </Col>
                    </Row>
                    <Row type="flex" justify="start">
                        <Col span={24} className="author-infos">
                             <Avatar size={28} icon='wechat' className="account" />PonyScorpio94Otc
                        </Col>
                    </Row>
                    
                    
                </div>
            </div>

        </div>
    )
}
export default Author
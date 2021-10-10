import React, { Component } from 'react';
import Child from '../Props/child'
// import Header from '../../component/Header'
class View extends Component{
  constructor(props) {
    super(props);
    this.state = {
      happy: {
        current:1
      }
    }
  }
  //控制样式
  switch(cur, index = 1, ok, no) {
    const { happy } = this.state
    return happy[cur]===index ? `${ok} ${no}`:no
  }
  switch1(cur, index = 1) {
    this.setState({
      happy: {
        ...this.state.happy,
      [cur]:index
      }
    })
  }
  componentDidMount() {
    this.switch()
  }
  render() {
    return (
      <div className="App" >
        {/* <!-- 轮播图 --> */}
      <div className="banner">
        <img src={require('../../image/banner1.png').default} />
      </div>
      {/* <!-- 主体内容 --> */}
      <div className="main">
        <div className="content">
          {/* <!-- 名师推荐 --> */}
          <div className="recommend">
            <div className="recommend_title flex">
              <h4><Child title='名师推荐'/></h4>
              <span><Child more='不喜欢？换一批'/><i></i></span>
            </div>
            <div className="recommend_con">
              <ul className="flex">
                <li className="item">
                  <div className="top">
                    <i className="subject"></i>
                    <div className="top_con flex">
                      <div className="img">
                        <img src={require("../../image/xieyilim.png").default} />
                      </div>
                      <div className="top_text">
                        <p className="name">谢依霖</p>
                        <p className="rank">特级教师</p>
                        <p className="school">成都嘉祥七种外国语学校</p>
                      </div>
                    </div>
                  </div>
                  <div className="bot">
                    <div className="bot_con">
                      <p>从生物圈到细胞 <i></i></p>
                      <p>生物活动的主要承担者-蛋白质<i></i></p>
                      <p>细胞的多样性和统一性<i></i></p>
                      <p>现代生物理论进化的主要内容</p>
                      <p>基因是有遗传效应的DNA片段的具体应用者123</p>
                    </div>

                  </div>
                </li>
                <li className="item">
                  <div className="top">
                    <i className="subject"></i>
                    <div className="top_con flex">
                      <div className="img">
                        <img src={require("../../image/xieyilim.png").default} />
                      </div>
                      <div className="top_text">
                        <p className="name">谢依霖</p>
                        <p className="rank">特级教师</p>
                        <p className="school">成都嘉祥七种外国语学校</p>
                      </div>
                    </div>
                  </div>
                  <div className="bot">
                    <div className="bot_con">
                      <p>从生物圈到细胞 <i></i></p>
                      <p>生物活动的主要承担者-蛋白质<i></i></p>
                      <p>细胞的多样性和统一性<i></i></p>
                      <p>现代生物理论进化的主要内容</p>
                      <p>基因是有遗传效应的DNA片段的具体应用者123</p>
                    </div>

                  </div>
                </li>
                <li className="item">
                  <div className="top">
                    <i className="subject"></i>
                    <div className="top_con flex">
                      <div className="img">
                        <img src={require("../../image/xieyilim.png").default} />
                      </div>
                      <div className="top_text">
                        <p className="name">谢依霖</p>
                        <p className="rank">特级教师</p>
                        <p className="school">成都嘉祥七种外国语学校</p>
                      </div>
                    </div>
                  </div>
                  <div className="bot">
                    <div className="bot_con">
                      <p>从生物圈到细胞 <i></i></p>
                      <p>生物活动的主要承担者-蛋白质<i></i></p>
                      <p>细胞的多样性和统一性<i></i></p>
                      <p>现代生物理论进化的主要内容</p>
                      <p>基因是有遗传效应的DNA片段的具体应用者123</p>
                    </div>

                  </div>
                </li>
                <li className="item">
                  <div className="top">
                    <i className="subject"></i>
                    <div className="top_con flex">
                      <div className="img">
                        <img src={require("../../image/xieyilim.png").default} />
                      </div>
                      <div className="top_text">
                        <p className="name">谢依霖</p>
                        <p className="rank">特级教师</p>
                        <p className="school">成都嘉祥七种外国语学校</p>
                      </div>
                    </div>
                  </div>
                  <div className="bot">
                    <div className="bot_con">
                      <p>从生物圈到细胞 <i></i></p>
                      <p>生物活动的主要承担者-蛋白质<i></i></p>
                      <p>细胞的多样性和统一性<i></i></p>
                      <p>现代生物理论进化的主要内容</p>
                      <p>基因是有遗传效应的DNA片段的具体应用者123</p>
                    </div>

                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- 热门名师 --> */}
          <div className="hot_teacher flex">
            <div className="left">
              <div className="left_title flex">
                <h4><Child hot='热门名师'/></h4>
                <ul className="flex">
                  <li className="active">热门</li>
                  <li>语文</li>
                  <li>英语</li>
                  <li>数学</li>
                  <li>物理</li>
                  <li>化学</li>
                  <li>生物</li>
                  <li>历史</li>
                  <li>地理</li>
                  <li>政治</li>
                  <span>更多</span>
                </ul>
              </div>
              <div className="left_con">
                <ul className="flex">
                  <li className="item">
                    <div className="top flex">
                      <div className="img">
                        <img src={require("../../image/xieyilim.png").default} />
                      </div>
                      <div className="text">
                        <p className="name">谢依霖</p>
                        <p className="subject"></p>
                        <p className="school">北京市宣武区外国语学校</p>
                      </div>
                    </div>
                    <div className="but">
                      <p><span>344节微课</span><span>56人学习</span></p>
                    </div>
                  </li>
                  <li className="item">
                    <div className="top flex">
                      <div className="img">
                        <img src={require("../../image/xieyilim.png").default} />
                      </div>
                      <div className="text">
                        <p className="name">谢依霖</p>
                        <p className="subject"></p>
                        <p className="school">北京市宣武区外国语学校</p>
                      </div>
                    </div>
                    <div className="but">
                      <p><span>344节微课</span><span>56人学习</span></p>
                    </div>
                  </li>
                  <li className="item">
                    <div className="top flex">
                      <div className="img">
                        <img src={require("../../image/xieyilim.png").default} />
                      </div>
                      <div className="text">
                        <p className="name">谢依霖</p>
                        <p className="subject"></p>
                        <p className="school">北京市宣武区外国语学校</p>
                      </div>
                    </div>
                    <div className="but">
                      <p><span>344节微课</span><span>56人学习</span></p>
                    </div>
                  </li>
                  <li className="item">
                    <div className="top flex">
                      <div className="img">
                        <img src={require("../../image/xieyilim.png").default} />
                      </div>
                      <div className="text">
                        <p className="name">谢依霖</p>
                        <p className="subject"></p>
                        <p className="school">北京市宣武区外国语学校</p>
                      </div>
                    </div>
                    <div className="but">
                      <p><span>344节微课</span><span>56人学习</span></p>
                    </div>
                  </li>
                  <li className="item">
                    <div className="top flex">
                      <div className="img">
                        <img src={require("../../image/xieyilim.png").default} />
                      </div>
                      <div className="text">
                        <p className="name">谢依霖</p>
                        <p className="subject"></p>
                        <p className="school">北京市宣武区外国语学校</p>
                      </div>
                    </div>
                    <div className="but">
                      <p><span>344节微课</span><span>56人学习</span></p>
                    </div>
                  </li>
                  <li className="item">
                    <div className="top flex">
                      <div className="img">
                        <img src={require("../../image/xieyilim.png").default} />
                      </div>
                      <div className="text">
                        <p className="name">谢依霖</p>
                        <p className="subject"></p>
                        <p className="school">北京市宣武区外国语学校</p>
                      </div>
                    </div>
                    <div className="but">
                      <p><span>344节微课</span><span>56人学习</span></p>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
            <div className="right">
              <div className="right_title"><Child rankingList='名师热度榜'/></div>
              <div className="right_con">
                <ul>
                  <li onClick={()=>{this.switch1('current',1)}} className={this.switch('current',1,'show','hide')}>
                    <span>1</span>
                    <div className="img">
                      <img src={require("../../image/liuyurong.png").default} />
                    </div>
                    <div className="text">
                      <p className="name">陆宇荣</p>
                      <p className="subject">高中语文</p>
                      <p className="wk">1.2w节微课</p>
                    </div>
                    </li>
                    <li onClick={()=>{this.switch1('current',2)}} className={this.switch('current',2,'show','hide')}>
                    <span>2</span>
                    <div className="img">
                      <img src={require("../../image/liuyurong.png").default} />
                    </div>
                    <div className="text">
                      <p className="name">陆宇荣</p>
                      <p className="subject">高中语文</p>
                      <p className="wk">1.2w节微课</p>
                    </div>
                    </li>
                    <li onClick={()=>{this.switch1('current',3)}} className={this.switch('current',3,'show','hide')}>
                    <span>3</span>
                    <div className="img">
                      <img src={require("../../image/liuyurong.png").default} />
                    </div>
                    <div className="text">
                      <p className="name">陆宇荣</p>
                      <p className="subject">高中语文</p>
                      <p className="wk">1.2w节微课</p>
                    </div>
                    </li>
                    <li onClick={()=>{this.switch1('current',4)}} className={this.switch('current',4,'show','hide')}>
                    <span>4</span>
                    <div className="img">
                      <img src={require("../../image/liuyurong.png").default} />
                    </div>
                    <div className="text">
                      <p className="name">陆宇荣</p>
                      <p className="subject">高中语文</p>
                      <p className="wk">1.2w节微课</p>
                    </div>
                    </li>
                    <li onClick={()=>{this.switch1('current',5)}} className={this.switch('current',5,'show','hide')}>
                    <span>5</span>
                    <div className="img">
                      <img src={require("../../image/liuyurong.png").default} />
                    </div>
                    <div className="text">
                      <p className="name">陆宇荣</p>
                      <p className="subject">高中语文</p>
                      <p className="wk">1.2w节微课</p>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>

          </div>
          {/* 微课精选 */}
          <div className='wkjx flex'>
            <div className='wkjx_left'>
                <div className='title'>
                  <h4>微课精选</h4></div>
                <div className='con'>
                  <ul className='con-nav'>
                    <li>语文</li>
                    <li>英语</li>
                    <li className='math'>数学</li>
                    <li>物理</li>
                    <li>化学</li>
                    <li>生物</li>
                    <li>地理</li>
                    <li>政治</li>
                    <li>历史</li>
                    <span>更多&gt;</span>
                  </ul>
                  <div className='con-con'>
                    <div className='con-text'>
                      <span className='color'>立体几何</span>
                      <span>集合与简易逻辑</span>
                      <span>算法初步</span>
                      <span>几何证明选讲</span>
                      <span>优选法与试验设计初步</span>
                      <span>不等式选讲</span>
                      <span>数系的扩充和复数的引入</span>
                      <span>几何证明选讲</span>
                      <span>优选法与试验设计初步</span>
                      <span>数系的扩充和复数的引入</span>
                      <span>解析几何</span>
                      <span>算法初步</span>
                      <span>几何证明选讲</span>
                      <span>优选法与试验设计初步</span>
                    </div>
                    <ul className='shuxue'>
                      <li className='shuxue1'>
                        <h4>高中数学必修一</h4>
                      </li>
                      <li className='shuxue2'>
                        <h4>高考复习</h4>
                      </li>
                      <li className='shuxue3'>
                        <h4>初三数学</h4>
                      </li>
                      <li className='shuxue4'>
                        <h4>高中数学必修三</h4>
                      </li>
                    </ul>
                    <div className='con-bto'>
                    更多微课请去精品微课页&gt;&gt;
                  </div>
                  </div>
                  
                </div>
            </div>
            <div className='wkjx_right'>
                <div className='title'>
                  <h4>学霸必备</h4>
              </div>
                <div className='con'>
                  <ul className='con-con'>
                    <li>
                      <span className='num'>1</span>
                      <span className='subject'>高中英语必修一</span>
                      <span className='mount'>1.2W节微课</span>
                    </li>
                    <li>
                      <span className='num'>2</span>
                      <span className='subject'>高中英语必修二</span>
                      <span className='mount'>8750节微课</span>
                    </li>
                    <li>
                      <span className='num'>3</span>
                      <span className='subject'>高中生物必修一</span>
                      <span className='mount'>4201节微课</span>
                    </li>
                    <li>
                      <span className='num'>4</span>
                      <span className='subject'>高中物理必修三</span>
                      <span className='mount'>4190节微课</span>
                    </li>
                    <li>
                      <span className='num'>5</span>
                      <span className='subject'>高中历史必修四</span>
                      <span className='mount'>3142节微课</span>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
          {/* 真题解析 */}
          <div className='ztjx flex'>
            <div className='ztjx-l' >
                <div className='ztjx-top  nav'>
                  <h4></h4>
                  <span></span>
                </div>
                <div className='ztjx-bto flex'>
                  <div className='ztjx-bto-l'></div>
                  <div className='ztjx-bto-r'></div>
                </div>
            </div>
              <div className='ztjx-r'>
                <div className='ztjx-title nav'>
                  <ul className='scool-list'>
                    <li></li>
                </ul>
                </div>
            </div>
          </div>
          {/* 名师工作室 */}
          {/* 最新入驻 */}
          {/* 为什么选择天天象上 */}
          {/* 主体底部 */}
        </div>


      </div>
      </div>
    )
  }
}
export default View

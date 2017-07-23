PageInfo.register({
	"type": "Obj",
	"info": function() {

		var PageObj = {};

		PageObj.require = {
			"$": "jquery",
			"layui": "layui",
			"api": "/assets/js/components/common/data-api"
		};

		PageObj.page = function() {

			var FunUtil = {};
			var HtmUtil = {};
			var Page = {};
			
			
			HtmUtil.add = function(data){
				var buf = [];
buf.push('<div id="admin-index-add">                                                                                                              ');
buf.push('    <form class="layui-form" action="">                                                                                                 ');
buf.push('        <div class="layui-form-item">                                                                                                   ');
buf.push('            <label class="layui-form-label">姓名</label>                                                                                ');
buf.push('            <div class="layui-input-block">                                                                                             ');
buf.push('                <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input">     ');
buf.push('            </div>                                                                                                                      ');
buf.push('        </div>                                                                                                                          ');
buf.push('        <div class="layui-form-item">                                                                                                   ');
buf.push('            <label class="layui-form-label">账号</label>                                                                                ');
buf.push('            <div class="layui-input-block">                                                                                             ');
buf.push('                <input type="text" name="username" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input">   ');
buf.push('            </div>                                                                                                                      ');
buf.push('        </div>                                                                                                                          ');
buf.push('                                                                                                                                        ');
buf.push('        <div class="layui-form-item">                                                                                                   ');
buf.push('            <label class="layui-form-label">性别</label>                                                                                ');
buf.push('            <div class="layui-input-block">                                                                                             ');
buf.push('                 <input type="radio" name="sex" value="男" title="男" checked="">                                                       ');
buf.push('                 <input type="radio" name="sex" value="女" title="女">                                                                  ');
buf.push('            </div>                                                                                                                      ');
buf.push('        </div>                                                                                                                          ');
buf.push('                                                                                                                                        ');
buf.push('        <div class="layui-form-item">                                                                                                   ');
buf.push('            <label class="layui-form-label">电话</label>                                                                                ');
buf.push('            <div class="layui-input-block">                                                                                             ');
buf.push('                <input type="text" name="username" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input">   ');
buf.push('            </div>                                                                                                                      ');
buf.push('        </div>                                                                                                                          ');
buf.push('                                                                                                                                        ');
buf.push('        <div class="layui-form-item">                                                                                                   ');
buf.push('            <label class="layui-form-label">邮箱</label>                                                                                ');
buf.push('            <div class="layui-input-block">                                                                                             ');
buf.push('                <input type="text" name="username" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input">   ');
buf.push('            </div>                                                                                                                      ');
buf.push('        </div>                                                                                                                          ');
buf.push('                                                                                                                                        ');
buf.push('        <div class="layui-form-item">                                                                                                   ');
buf.push('            <div class="layui-input-block">                                                                                             ');
buf.push('                <button class="layui-btn" lay-submit="" lay-filter="demo1">确定</button>                                            ');
buf.push('            </div>                                                                                                                      ');
buf.push('        </div>                                                                                                                          ');
buf.push('    </form>                                                                                                                             ');
buf.push('</div>                                                                                                                                  ');
				return buf.join("");
			};

			Page.show = function() {

				var request = this.api.rq();
				
				layui.use(['laypage', 'layer'], function(){
					var laypage = layui.laypage,layer = layui.layer;
				 laypage({
       cont: 'admin-index-body-page'
       ,pages: 100
       ,skip: true
     });
				});
				
				
	 
				$("button.admin-index-btn-edit").unbind("click").bind("click",function(){
					  layer.open({
							type: 1,
							content: HtmUtil.add(""),
							area: ['480px', '378px'], //宽高
							skin: 'layui-layer-demo',
							success: function success() {

								layui.use(['form', 'layedit', 'laydate', 'laypage', 'layer'], function () {
									var form = layui.form(),
									    layer = layui.layer,
									    layedit = layui.layedit,
									    laydate = layui.laydate,
									    laypage = layui.laypage,
									    layer = layui.layer;
									    form.render('');
								});
							}
						});
				});
				$("button.admin-index-btn-del").unbind("click").bind("click",function(){
					
					
				});
				$("button.admin-index-btn-update").unbind("click").bind("click",function(){
					
					
				});
				$("button.admin-index-btn-forbid").unbind("click").bind("click",function(){
					
					
				});
				

  	};

			return Page;

		};

		return PageObj;
	}
});
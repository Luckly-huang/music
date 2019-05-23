//路由组件
export default {
	//懒加载
	Home: r => require(['@/components/Home'], r),
	Main: r => require(['@/components/Main'], r),
	Index : r => require(['@/components/Index'], r),
	Do : r => require(['@/components/Do'], r),
	Search : r => require(['@/components/Search'], r),
	Songtj : r => require(['@/components/Songtj'], r),
	Musicpage : r => require(['@/components/Musicpage'], r),
	My : r => require(['@/components/My'], r),
	Musicsearch : r => require(['@/components/Musicsearch'], r),
	Login : r => require(['@/components/Login'], r),
	Register : r => require(['@/components/Register'], r),
	Heart : r => require(['@/components/Heart'], r),
	Scmusice : r => require(['@/components/Scmusice'], r),
	Searmusice : r => require(['@/components/Searmusice'], r)
	
}

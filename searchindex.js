Search.setIndex({docnames:["api/app","api/basebuilder","api/broker","api/builder","api/chained_db","api/commands","api/cvbuilder","api/database","api/dates","api/deploy","api/htmlbuilder","api/index","api/interactive","api/main","api/runcontrol","api/tools","api/validators","broker","collections/abstracts","collections/assignments","collections/blog","collections/citations","collections/contacts","collections/courses","collections/expenses","collections/grades","collections/grants","collections/groups","collections/index","collections/institutions","collections/jobs","collections/news","collections/people","collections/presentations","collections/projects","collections/proposalReviews","collections/proposals","collections/refereeReports","collections/students","commands/add","commands/app","commands/build","commands/classlist","commands/deploy","commands/email","commands/grade","commands/index","commands/ingest","commands/json-to-yaml","commands/rc","commands/store","commands/validate","commands/yaml-to-json","index","rc"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/app.rst","api/basebuilder.rst","api/broker.rst","api/builder.rst","api/chained_db.rst","api/commands.rst","api/cvbuilder.rst","api/database.rst","api/dates.rst","api/deploy.rst","api/htmlbuilder.rst","api/index.rst","api/interactive.rst","api/main.rst","api/runcontrol.rst","api/tools.rst","api/validators.rst","broker.rst","collections/abstracts.rst","collections/assignments.rst","collections/blog.rst","collections/citations.rst","collections/contacts.rst","collections/courses.rst","collections/expenses.rst","collections/grades.rst","collections/grants.rst","collections/groups.rst","collections/index.rst","collections/institutions.rst","collections/jobs.rst","collections/news.rst","collections/people.rst","collections/presentations.rst","collections/projects.rst","collections/proposalReviews.rst","collections/proposals.rst","collections/refereeReports.rst","collections/students.rst","commands/add.rst","commands/app.rst","commands/build.rst","commands/classlist.rst","commands/deploy.rst","commands/email.rst","commands/grade.rst","commands/index.rst","commands/ingest.rst","commands/json-to-yaml.rst","commands/rc.rst","commands/store.rst","commands/validate.rst","commands/yaml-to-json.rst","index.rst","rc.rst"],objects:{"regolith.app":{collection_page:[0,1,1,""],root:[0,1,1,""],shutdown:[0,1,1,""],shutdown_server:[0,1,1,""]},"regolith.broker":{Broker:[2,2,1,""],load_db:[2,1,1,""]},"regolith.broker.Broker":{add_file:[2,3,1,""],from_rc:[2,3,1,""],get_file:[2,3,1,""]},"regolith.builder":{builder:[3,1,1,""]},"regolith.builders":{basebuilder:[1,0,0,"-"],cvbuilder:[6,0,0,"-"],htmlbuilder:[10,0,0,"-"]},"regolith.builders.basebuilder":{BuilderBase:[1,2,1,""],LatexBuilderBase:[1,2,1,""]},"regolith.builders.basebuilder.BuilderBase":{build:[1,3,1,""],construct_global_ctx:[1,3,1,""],render:[1,3,1,""]},"regolith.builders.basebuilder.LatexBuilderBase":{build:[1,3,1,""],clean:[1,3,1,""],construct_global_ctx:[1,3,1,""],pdf:[1,3,1,""],render:[1,3,1,""],run:[1,3,1,""]},"regolith.builders.cvbuilder":{CVBuilder:[6,2,1,""]},"regolith.builders.cvbuilder.CVBuilder":{btype:[6,4,1,""],build:[6,3,1,""],clean:[6,3,1,""],construct_global_ctx:[6,3,1,""],latex:[6,3,1,""],pdf:[6,3,1,""],render:[6,3,1,""],run:[6,3,1,""]},"regolith.builders.htmlbuilder":{HtmlBuilder:[10,2,1,""]},"regolith.builders.htmlbuilder.HtmlBuilder":{abstracts:[10,3,1,""],blog:[10,3,1,""],btype:[10,4,1,""],build:[10,3,1,""],cname:[10,3,1,""],construct_global_ctx:[10,3,1,""],finish:[10,3,1,""],jobs:[10,3,1,""],nojekyll:[10,3,1,""],people:[10,3,1,""],projects:[10,3,1,""],render:[10,3,1,""],root_index:[10,3,1,""]},"regolith.chained_db":{ChainDB:[4,2,1,""],ChainDBSingleton:[4,2,1,""]},"regolith.chained_db.ChainDB":{clear:[4,3,1,""],copy:[4,3,1,""],fromkeys:[4,3,1,""],get:[4,3,1,""],items:[4,3,1,""],keys:[4,3,1,""],new_child:[4,3,1,""],parents:[4,3,1,""],pop:[4,3,1,""],popitem:[4,3,1,""],setdefault:[4,3,1,""],update:[4,3,1,""],values:[4,3,1,""]},"regolith.commands":{add_cmd:[5,1,1,""],app:[5,1,1,""],build:[5,1,1,""],classlist:[5,1,1,""],deploy:[5,1,1,""],grade:[5,1,1,""],ingest:[5,1,1,""],json_to_yaml:[5,1,1,""],validate:[5,1,1,""],yaml_to_json:[5,1,1,""]},"regolith.database":{connect:[7,1,1,""],dump_database:[7,1,1,""],dump_git_database:[7,1,1,""],dump_hg_database:[7,1,1,""],dump_local_database:[7,1,1,""],load_database:[7,1,1,""],load_git_database:[7,1,1,""],load_hg_database:[7,1,1,""],load_local_database:[7,1,1,""],open_dbs:[7,1,1,""]},"regolith.dates":{date_to_float:[8,1,1,""],month_to_int:[8,1,1,""]},"regolith.deploy":{deploy:[9,1,1,""],deploy_git:[9,1,1,""],deploy_hg:[9,1,1,""],ensure_deploy_dir:[9,1,1,""]},"regolith.main":{create_parser:[13,1,1,""],main:[13,1,1,""]},"regolith.runcontrol":{NotSpecified:[14,5,1,""],NotSpecifiedType:[14,2,1,""],RunControl:[14,2,1,""],ensuredirs:[14,1,1,""],exec_file:[14,1,1,""],filter_databases:[14,1,1,""],flatten:[14,1,1,""],ishashable:[14,1,1,""],load_json_rcfile:[14,1,1,""],load_rcfile:[14,1,1,""],touch:[14,1,1,""],warn_forbidden_name:[14,1,1,""]},"regolith.tools":{all_docs_from_collection:[15,1,1,""],awards_grants_honors:[15,1,1,""],date_to_rfc822:[15,1,1,""],dbdirname:[15,1,1,""],dbpathname:[15,1,1,""],dereference_institution:[15,1,1,""],document_by_value:[15,1,1,""],fallback:[15,1,1,""],filter_grants:[15,1,1,""],filter_projects:[15,1,1,""],filter_publications:[15,1,1,""],fuzzy_retrieval:[15,1,1,""],gets:[15,1,1,""],is_before:[15,1,1,""],is_between:[15,1,1,""],is_since:[15,1,1,""],latex_safe:[15,1,1,""],latex_safe_url:[15,1,1,""],make_bibtex_file:[15,1,1,""],month_and_year:[15,1,1,""],number_suffix:[15,1,1,""],rfc822now:[15,1,1,""]},"regolith.validators":{always_false:[16,1,1,""],always_true:[16,1,1,""],ensure_database:[16,1,1,""],ensure_databases:[16,1,1,""],ensure_email:[16,1,1,""],ensure_store:[16,1,1,""],ensure_stores:[16,1,1,""],ensure_string:[16,1,1,""],is_bool:[16,1,1,""],is_int:[16,1,1,""],is_string:[16,1,1,""],noop:[16,1,1,""],to_bool:[16,1,1,""]},regolith:{app:[0,0,0,"-"],broker:[2,0,0,"-"],builder:[3,0,0,"-"],chained_db:[4,0,0,"-"],commands:[5,0,0,"-"],database:[7,0,0,"-"],dates:[8,0,0,"-"],deploy:[9,0,0,"-"],main:[13,0,0,"-"],runcontrol:[14,0,0,"-"],tools:[15,0,0,"-"],validators:[16,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:data"},terms:{"0bxupd34yizzredbcmejny2fubnc":32,"16th":33,"18kj_conserv":33,"18sb04_kentstat":33,"18sb_nslsii":33,"18sob_clustermin":33,"18th":8,"1902natur":37,"1906_doe_exampl":35,"1906doeexampl":35,"1906nsfexampl":35,"1nzxqol":26,"1umax_kfzk9ugyyf6wwtllwgitvhatbkaf8":32,"21st":33,"56b4eb6d421aa921504ef2a9":31,"abstract":[10,28,33,53],"boolean":[16,32,36,54],"case":[4,15,33],"class":[2,5,6,10,11,14,17,18,19,23,42],"default":[4,15,32,54],"final":[19,23],"float":[8,19,23,24,25,26,32,35,36],"function":[14,17,33],"import":[12,17,35,37],"int":[15,23,30,31],"long":30,"new":[4,17,28,29,35,53],"public":[15,18,20,27,30,31,32,34,37,53,54],"return":[2,3,4,7,14,15,16],"short":[17,20,24,26,32,35,36,38],"static":54,"super":35,"true":[12,15,16,32,36,54],AMS:32,Are:35,CVs:[6,53],DBs:11,For:[11,14,53,54],Not:[32,53],PIs:35,The:[2,7,13,15,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,53,54],These:54,Use:32,Will:35,With:[17,53],__dict__:14,_build:2,_dbpath:54,_dict:14,_getitem__:4,_id:[18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,53],_static:34,_updat:14,_valid:14,aaron:[21,26],abl:53,about:[19,22,26,27,33,34,36,54],abov:37,academicyear:26,acceler:[26,36],accept:[26,33,35,36,37],access:[2,17,27],accord:15,account:26,achiev:23,across:17,act:53,action:53,activ:[12,23,32,54],actual:[15,20,26,36],add:[2,5,10,15,17,37,42,46,53,54],add_cmd:5,add_fil:[2,17],added:51,adding:[46,51],addit:[1,6,10],addition:21,address:[15,17,22,29,32,38],adequ:35,adequacy_of_resourc:35,adjectivis:15,admin:26,administ:26,adopt:34,advanc:35,advanceknowledg:35,advis:32,affili:17,afriend:22,after:[17,41],against:[5,15],agenc:[26,35],agent:[32,34],aid:[30,33],ajunct:32,aka:[15,20,22,27,29,31,32,38],alia:15,alias:[32,38],all:[1,4,5,6,10,15,29,35,53,54],all_docs_from_collect:15,allow:[24,26,32,33,35,36,37,54],almost:54,along:44,alreadi:[16,50],also:[4,17,32,51,54],alwai:54,always_fals:16,always_tru:16,american:32,amit:21,among:17,amount:[15,24,26,36],amsmath:17,amssymb:17,analysi:[18,32],analyt:26,andso:33,andvari:29,ani:[15,17,26,32,33,35,36,37],annual:32,anoth:[15,54],answer:[26,35],anthoni:[20,21,22,26,27,31,32,34,36],anyof_typ:[19,25,54],anyth:[33,35,36],anythingin:22,anywher:37,apam:[29,32,33],apart:33,api:2,app:[5,11,46,53],appear:[24,35],appl:32,appli:[17,29,30,32,54],applic:[11,30,33],applicatn:30,apprais:32,approach:[26,35,37],appropri:[3,35,46],arg:[4,13],argpars:14,argument:[39,40,41,42,43,44,45,46,47,48,49,50,51,52],around:15,articl:21,asap:30,ashutosh:21,asi:37,assign:[23,25,28,53],assist:32,associ:[2,24,32,33,41],asth:24,atom:33,attach:44,attribut:14,aug:36,august:[8,32],austin:32,auther:17,author:[15,17,18,20,21,27,31,33,36,37],autom:[27,46],avail:[15,34,35,42,46,53,54],avatar:32,avatars1:32,award:[15,26,32,33,36],awards_grants_honor:15,backend:2,background_field:30,backup:15,baptist:18,barbara:32,barrier:34,base:[6,8,11,17,18,26,30,32,34,53],basebuild:11,bash:30,beach:33,becaus:35,been:[14,17,26,32,34,36],befor:[15,35,41,54],begin:[17,33],begin_d:41,begin_dai:[26,33,36],begin_month:[26,32,33,34,36],begin_year:[26,32,33,34,36],being:[1,6,10,23,35,37],believ:[32,37],below:53,benefit:35,benefit_of_collabor:[26,36],best:30,between:15,bib:47,bibtex:[15,21],bibtexpars:21,big:[29,32],big_c:34,billing:36,bin:51,bio:32,biograph:32,blog:[10,28,53],bodi:[31,36,44],boilerpl:17,bold:15,bonazzi:21,book:53,bool:[15,23,30],both:28,bound:23,brian:21,brief:34,broader:35,broker:[11,53],brookhaven:32,brown:32,btype:[3,6,10],budget:35,build:[1,5,6,10,17,22,36,37,46,53,54],build_target:41,builddir:2,builder:[11,17],builderbas:1,buildwil:41,built:[1,6,9,10,35,41,46],builtif:41,busi:24,butnot:22,california:32,call:[53,54],call_for_propos:[26,36],can:[2,17,22,35,51,54],cancel:33,canon:[22,29,32],capabl:32,captur:22,carolina:[26,27,32],case_sensit:15,categori:[19,23,32,37],caus:35,cec:[27,32],center:[29,32],central:11,centrali:17,centuri:33,ceremoni:32,cfn:33,chain:11,chaindb:4,chaindbsingleton:4,chained_db:11,chainmap:4,challeng:33,cheaper:37,check:15,chemistri:[29,32],chicago:32,chmod:51,choos:54,christoph:21,chunck:17,cimrman:21,citat:[15,28,32,53],citi:[29,32,33],claim:37,claimed_found_what:37,claimed_why_import:37,classlist:[5,46,53],classmethod:[2,4],clean:[1,6],clear:4,cli:[11,13,17,53],client:[7,15],clustermin:33,cmd:[1,6,10,46],cname:10,cnerg:32,coauthor:[18,22],code:[23,29,30,32,34],coffe:22,coi:22,col:12,coll:[32,39,47],collab:32,collabor:32,collect:[2,5,15,20,21,23,24,26,29,30,31,32,33,34,35,36,37,38,39,46,47,51,54],collection_pag:0,collnam:[0,15],colloquium:33,columbia:[17,26,29,32,36],columbiau:[22,29,33,35],com:[20,22,26,32,34,36],combin:5,command:[1,6,10,11,14,54],comment:37,commit:[27,51],commmand:53,common:53,compar:15,compens:30,compet:35,competency_of_team:35,compil:[1,6],complet:54,complex:26,compon:11,compos:14,comput:[15,21,27,30],cond:15,conda:53,confer:[18,33],config:[2,54],configur:[14,53],conflict:54,confus:32,connect:[7,54],construct:[1,6,10],construct_global_ctx:[1,6,10],contact:[18,27,28,30,53],contain:[21,28,29,32,35,53,54],content:[20,53],context:[1,6,7,10],continu:30,contributed_or:33,control:[11,30,46,54],convent:32,convert:[5,8,15,16,46,48,52],coorespond:54,copi:[4,15,17,50,54],copyright:4,core:33,cosmob:32,could:[17,35,54],countri:[29,33],coupl:22,cours:[19,25,28,32,42,44,53],course_id:[42,44],cover:32,cpp_info:36,cppflag:36,cream:37,creat:[1,2,4,6,15,53],create_pars:13,creativ:35,criteria:35,cure:35,curefor:35,currenc:[24,26,32,36],current:[15,30,32,35,36,41,42,47],curri:21,cvbuilder:11,cwright:17,cycl:[27,32,34,53],cyclass:18,cyclu:[18,24,30,32,34],cython:32,dai:[8,15,20,24,26,30,31,36],data:[11,15,26,30,31,32,34,36,46,54],databas:[2,5,6,9,11,14,15,16,17,24,39,42,44,46,47],dataset:16,date:[11,15,30,41],date_to_float:8,date_to_rfc822:15,dbdirnam:15,dbname:0,dbpath:54,dbpathnam:15,dbs:[7,16],debug:[40,45],dec:15,decemb:[26,36],declin:[26,33,35,36,37],decor:15,dedic:30,deed:22,deep:20,deeper:53,defin:53,degre:32,delin:26,demonstr:32,denot:21,densiti:32,depart:[17,22,23,27,29,32,33],department:33,deploi:[5,11,46,53],deploy:[5,11,54],deploy_git:9,deploy_hg:9,dept:29,derefer:15,dereference_institut:15,describ:[23,26,30,31,32,33,34,54],descript:[30,32,34],design:26,dest:54,destin:10,detail:11,determin:[26,35,36,42],develop:[4,18,26,30,53],dhsu:[26,36],diagnost:32,dict:[1,2,4,6,10,15,23,24,26,29,32,34,36,54],dictionari:[14,53,54],did_how:37,did_what:37,didn:37,differ:[2,17,29,53],difficult:17,diffjourn:37,dir:[1,6,9,10,15,54],directori:[14,15,17,54],disciplin:30,discover:[24,33],discoveri:[26,36],discret:[32,34],disk:2,dissert:32,distribut:33,dive:53,divis:29,dmref15:[24,26,34,36],dmref:[26,36],doc:[17,26,32,53],docment:2,doctor:[30,31,32],document:[2,5,15,17,26,32,39,50],document_by_valu:15,documentclass:17,documentright:35,doe:[4,16,26,35,42],doe_appropriateness_of_approach:35,doe_reasonableness_of_budget:35,doe_relevance_to_program_miss:35,does_how:35,does_what:35,doesn:36,doi:18,don:[15,35,37,41],done:[15,35,37],down:[7,14],download:[35,37],drive:32,driven:30,drm8f:32,dry:42,dst:[9,54],due:36,due_dat:36,dump:7,dump_databas:7,dump_git_databas:7,dump_hg_databas:7,dump_local_databas:7,durat:[32,36],dure:[26,41],duti:30,dynamit:35,e103:21,each:[10,16,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,53],earlier:15,earn:25,earth:32,edit:[26,32],editor:15,editor_eyes_onli:37,edu:[18,27,30,32,38],educ:32,effect:35,either:[4,15,17],element:15,els:4,elsewher:32,email:[16,18,22,27,32,36,38,46,53,54],email_target:44,emch552:23,emch:[19,23,25,32],emeritu:32,employ:32,empti:[4,15],enabl:51,end:[17,26,33,36],end_dai:[26,33,36],end_dat:41,end_month:[26,32,33,34,36],end_year:[26,32,33,34,36],energi:[27,32,33],engin:[26,27,29,30,32],enrol:23,ensur:[7,9,14,16],ensure_databas:16,ensure_deploy_dir:9,ensure_email:16,ensure_stor:16,ensure_str:16,ensuredir:14,entri:[6,15,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,53,54],entrytyp:21,equal:[23,41],equat:32,equival:[14,21],erg:[2,27,31,32,53],erich:32,ert:21,essenti:32,etc:[32,50,54],even:53,everi:[15,53],everyon:17,exampl:[2,15,17,28,54],exec_fil:14,execfil:14,exist:[9,14,50],exit:[39,40,41,42,43,44,45,46,47,48,49,50,51,52],expect:[15,30],expens:[28,53],expense_typ:24,experi:30,expert:32,expertis:30,extend:32,extens:42,extra:[35,36],extract:33,fabian:21,facet:53,facil:[32,34],faction:23,fallback:15,fals:[2,15,16,23,30,32,54],februari:[31,36],feel:53,fellow:32,fernando:21,fewer:22,field:[21,32,33,54],fieldsfor:22,figshar:18,figur:[17,41],figurebuild:17,file:[1,2,6,10,14,15,19,23,24,25,32,35,42,46,47,48,50,52,53,54],filenam:[2,14,25,35,42,47],filepath:2,filesystem:2,filesystemcli:7,fill:33,filter:[14,15],filter_databas:14,filter_gr:15,filter_project:15,filter_publ:15,final_assess:37,find:[15,35],fine:36,finish:10,first:[15,18,37],first_author_last_nam:37,firstnam:18,fish:30,fit:37,flag:30,flanagan:[31,36],flash4:32,flash:32,flask:[0,5,46],flatten:14,floatfix:17,fname:[1,6,10,14],focu:27,folder:54,follow:[4,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,51,53,54],forbidden:14,forc:[2,50],foreign:[5,46],forg:53,form:[16,36,41],format:[15,32,39,42,47,54],former:10,fornam:14,forward:20,found:[14,37],foundat:[29,32],fraction:23,francesco:21,francisco:21,fredrik:21,free:53,freewrit:[35,37],friend:22,friendab:22,friendtoni:22,from:[2,4,6,10,12,14,15,23,32,33,35,41,42,46,47,53,54],from_dat:41,from_rc:[2,17],fromkei:4,fuel:[27,32,34,53],fuelcycl:[30,34],full:[17,20,32,33,36],fulli:54,fund:[26,32,35,36],funder:[26,36],furthermor:21,futur:26,fuzzy_retriev:15,gener:[3,14,15,18,22,27,32,53],geniu:35,get:[2,4,12,15],get_fil:[2,17],gg012345:26,git:[7,9,30,51,54],github:[32,34],githubusercont:32,given:[4,14,15,47],glb:14,global:[1,6,10,32],goal:35,good:35,googl:[26,32],google_scholar_url:32,gov:36,gpa:32,grade:[5,23,28,41,44,46,53],graduat:[30,32],granger:21,grant:[15,24,28,32,34,36,41,53],grant_id:26,grant_percentag:24,graphicx:17,graphit:33,graviti:37,greater:23,gritti:11,group:[2,17,20,24,26,28,30,31,32,34,36,53,54],groupmemb:33,groupthi:27,guebr:35,gui:22,guid:32,gupta:21,half:35,hap42:38,hap:25,haperson:38,happen:23,harsh:21,has:[4,7,14,17,18,32,35],hashabl:14,haskel:30,have:[9,17,19,26,30,32,34,36,37,54],hdf5:32,hello:2,hello_world:17,help:[7,9,17,30,39,40,41,42,43,44,45,46,47,48,49,50,51,52],helper:[11,14],here:[17,35],herein:54,high:[18,32],highli:35,hold:[26,53],home:[2,32,53],home_address:32,homework:[19,23],honest:37,honor:[15,32],hook:51,hope:33,host:[26,27],hous:32,how:[22,30,35,37],howev:54,href:[27,30],htm:36,html:[9,10,18,27,41,54],htmlbuilder:11,http:[18,20,26,27,30,32,34,36,54],human:[20,23,25,38],hw01:19,hw02:25,hw_file:17,ice:37,idea:36,identifi:[18,21,26,27,29,30,31,32,34,38,42,44,53,54],ids:19,ill:26,imag:[50,54],impact:35,implement:5,impress:37,improv:27,ina:32,inc:21,includ:[18,26,27,30],includegraph:17,inclus:15,inde:36,index:10,individu:[30,32],infer:47,inform:[0,18,19,21,25,26,27,30,32,34,36,37,42,46,54],ingest:[5,46,53],inistitut:18,initi:32,innam:14,innov:35,inplac:15,inprogress:[35,37],input:16,input_gr:15,input_record:15,insid:[17,54],inspect:46,instanc:[2,7],institut:[15,18,22,26,27,28,32,33,35,36,53],institutionsin:29,instruct:[23,35],intact:4,integ:[8,15,16,19,20,24,25,26,29,32,33,34,35,36,37],integr:30,interact:11,interest:[15,30],interfac:[2,11,17,54],intern:54,intro:32,introduct:32,invers:26,investig:[27,36],invit:[33,35],involv:[15,27],is_befor:15,is_between:15,is_bool:16,is_int:16,is_sinc:15,is_str:16,ishash:14,isn:17,isrequir:22,issu:35,isuru:21,item:[4,41],itemized_expens:24,iter:[4,14,15],its:[4,14,15,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,54],itself:[2,18,53],ivanov:21,jan:[15,21,24],januari:32,jason:21,job:[10,28,53],johansson:21,join:31,journal:[21,37],json:[2,5,14,17,28,39,42,46,53,54],json_to_yaml:5,juli:[30,34],june:34,just:[16,53],keep:14,kei:[4,15,16,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,53],keyerror:4,keynot:33,know:20,knowledg:[30,35],known:[29,32],kulal:21,kumar:21,kwarg:[1,6,10,14],laboratori:32,lack:4,land:32,lane:35,langmuir:32,languag:[30,32],larg:27,larger:29,laser:32,last:[18,37],lastnam:18,latex:[1,6,15],latex_saf:15,latex_safe_url:15,latexbuilderbas:1,lead:[34,35],learn:26,least:30,leav:4,length:[19,24],less:22,level:[16,32,53],librari:53,life:32,lift:35,lighter:22,like:[4,14,20,21,23,24,30],limit:17,line:[5,11,27,44,54],link:7,list:[1,5,6,10,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,41,53,54],live:35,load:[2,7,9,14,54],load_databas:7,load_db:[2,17],load_git_databas:7,load_hg_databas:7,load_json_rcfil:14,load_local_databas:7,load_rcfil:14,loc:14,local:[2,7,33,54],locat:[2,22,32,33,36,46,54],logo:34,look:0,lot:36,love:30,low:34,lower:23,machin:[17,26],made:[24,33,35],madison:[18,32],magnet:32,mai:[26,32,35,36,53,54],main:[11,31,35],maintain:30,mainten:30,major:32,majoredit:37,make:[15,30,33],make_bibtex_fil:15,malaria:35,man:41,manag:[7,30,53],mani:[46,53],map:[4,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38],master:32,match:[15,31],materi:[26,32,34,36],mateusz:21,mathemat:[17,29,30,32],matplotlib:17,matthew:21,mean:[14,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38],meaning:16,measur:37,mechan:[27,30,32],meet:[22,33],meeting_nam:33,member:[10,17,20,26,32,36,53],membership:32,memori:33,messag:[39,40,41,42,43,44,45,46,47,48,49,50,51,52],metadata:[2,38],metal:33,method:[4,26,27,36],meurer2016sympi:21,meurer:[21,26],michael:32,midterm:23,mind:53,minor:32,misc:15,mission:[27,35],mission_stat:27,mode:[40,45,54],model:[18,26,27,32],modifi:46,monei:[35,37],mongo:[28,53],mongocli:7,mongod:54,mongodb:[7,39,53,54],mongodbpath:2,month:[8,15,20,21,24,26,30,31,32,35,36,37],month_and_year:15,month_to_int:8,moor:21,more:[15,21,27,29,30,32,37,53],most:[24,30],mostli:32,mouginot:18,move:[10,20],msg:26,mtime:14,much:37,muller:21,multi:15,multi_pi:15,multipl:15,must:[24,53,54],myfil:2,myprops:36,name:[1,2,6,9,10,14,15,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,39,42,44,47,48,50,52,54],namespac:14,nanoparticl:33,nanostructur:[26,33,36],narr:[26,36],nation:32,natur:37,need:[14,17,36,54],nest:14,network:18,neural:18,neutral:32,new_child:4,nice:33,nif:32,nojekyl:10,none:[2,4,9,13,14,15,36,54],noop:16,normal:[30,31,32,34,54],note:[1,2,6,10,15,17,22,23,26,33,36,54],noth:16,notion:53,notspecifi:14,notspecifiedtyp:14,nov:32,novel:[26,36],nsf14591:36,nsf:[26,35,36],nsf_broader_impact:35,nsf_create_original_transform:35,nsf_plan_good:35,nsf_pot_to_advance_knowledg:35,nsf_pot_to_benefit_societi:35,nsl:[32,33],nuclear:[27,30,32,34],number:[15,19,23,25,26,27,30,36,54],number_suffix:15,numfocu:26,object:[2,4,14,15],obtain:[23,32],octob:26,offic:35,often:35,omega:32,ond:21,one:[15,24,30,32,50,53,54],ones:14,ongo:32,onli:[14,24,35,41,42,51,54],opac:32,opacplot:32,open:[7,14,27,30,32],open_db:7,oper:54,operat:42,option:[15,18,19,20,22,23,24,25,26,27,29,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,54],orcid:32,orcid_id:32,order:[15,24,54],org:[18,30,34],organ:[29,32],origin:[20,35],original_curr:24,other:[15,17,21,22,26,27,30,32,34,36,54],other_agencies_submit:36,otherwis:32,our:[26,27],over:[10,37],overall_purpos:24,overlap:[26,36],overrid:54,overridden:54,packag:53,page:[21,27,53],pair:[4,33],paper:[17,18,37],paprocki:21,paramet:[1,2,6,7,10,15],parent:4,part:[18,27,32],particip:[26,36],particular:35,partnership:32,pass:[37,54],past:32,path:[2,14,15,17,19,25,50,54],payback:34,paye:24,payment:24,pdf:[1,6,23,36,41,50,54],pedregosa:21,peerj:21,pend:[26,36,41],peopl:[10,12,15,17,22,28,34,35,41,53,54],percentag:24,perform:[18,42],person:[10,15,22,23,25,30,31,32,37,38,41],person_dir:15,person_months_academ:[26,36],person_months_summ:[26,36],physic:[9,17,22,29,30,32,33],physicsand:29,pi_nam:[15,27],pid:15,piec:17,pip:53,place:[14,24,36],placehold:15,plan:35,plasma:32,pleas:[27,30],plenari:33,plot:17,plt:17,png:[17,34],point:[19,25,53],poor:35,pop:4,popitem:4,pose:26,posit:[26,30,32,34,36,39,41,42,44,47,48,50,52],posix:14,possibl:[15,19],post:[20,30,31,32],postal:29,postdocad:41,postdoctor:32,poster:33,potenti:[15,30],potentialto:35,poverti:35,power:[19,25,32,53],practic:30,prb:17,pre:[18,36,51],preced:54,predict:27,predictor:18,prefer:30,prep:[26,33,36],present:[4,18,24,28,32,53,54],preslist:41,previou:[4,30],princip:36,principl:27,print:46,prior:30,privat:[23,24,25,37,38,54],probabl:[37,38],probe:32,problem:26,produc:41,prof:30,profession:32,professor:32,program:[26,30,32,35],programm:[30,32],project:[10,15,17,21,24,27,28,30,32,33,53],project_scop:36,prompt:26,prop:41,properli:7,properti:[2,4],propos:[26,28,35,53],proposala:36,proposalreview:[28,53],provid:[4,17,32,51,54],pub:[15,36],publish:21,publist:41,pull:33,purpos:24,push:17,put:[15,24,35,54],pxiboydm:32,pyne:[30,32],pypi:53,pyplot:17,python:[14,21,30,32],qdu:[26,36],qualiti:18,quantif:27,quarter:23,question:[15,19,25,35],quit:36,radiat:32,rais:4,rang:17,rapid:34,rathnayak:21,rc_file:2,reactor:32,read:42,readabl:20,real:14,realli:37,reason:[24,35],receiv:44,recent:15,recommend:37,record:[15,24,46],recycl:32,ref:4,refer:[2,18,37],refere:37,refereereport:[28,53],registri:42,regolith:[17,28,39,40,41,42,43,44,45,47,48,49,50,51,52,54],regolithrc:[2,17,54],regro:[17,53],regular:26,reimb:41,reimburs:24,reject:[36,37],releas:[26,30],relev:35,remind:33,remot:[17,54],remov:[1,4,6,10],renam:14,render:[1,6,10],renew:32,replac:[15,17,42],repo:34,report:[37,42],repositori:17,repost:20,repres:[4,20,26,30,36,54],represent:[20,24,26,36,38],request:[15,35],requir:[18,19,20,22,24,25,26,27,29,32,33,34,35,36,37,38],research:[20,26,27,30,31,32,34,35,53,54],research_focus_area:32,resourc:[5,35,46,54],respect:26,restructur:44,result:[1,4,6,10,35,42],resum:[30,41],retriev:15,retriv:17,revers:15,review:[30,35,37,41],revolution:26,revtex4:17,rfc822now:15,rfc:15,richard:21,robert:[21,31,36],rocklin:21,rofil:32,root:[0,10,54],root_index:10,row:53,rss:10,ruler:37,run:[1,5,6,10,11,17,42,46,54],runcontrol:[2,7,11],s8jl1_nzdqaj:26,saboo:21,safe:15,salari:30,same:[14,15,21,24,50,53],sampl:53,san:21,santa:32,sartaj:21,save:[17,35],savefig:17,sbilling:[35,36,37],scale:23,schema:[5,28,53],schlieren:32,schneider:32,scholar:[30,31,32],scholarship:32,school:[29,42],scienc:[21,29,30,32],scientif:30,scientist:32,scopatz:[20,21,24,26,27,30,31,32,33,34,36],scopatzatcec:30,scope:26,score:25,sea:29,sean:21,season:23,section:35,see:[20,21,35,54],seek:30,seem:35,segregated_expens:24,select:54,self:[1,6,10],semant:16,semest:23,seminar:33,seminaror:33,send:[30,44,54],sensit:54,separ:14,septemb:[20,26],seq:15,sequenc:[14,15],sergiu:21,server:[40,45],servic:32,servicedoesn:32,session:11,set:[4,5,15,53],setdefault:4,setup:7,shadowgraphi:32,share:[17,26,32],shell:[30,46,53],shivam:21,should:[21,24,25,30,31,33,35,37,38,42,44,54],show:[39,40,41,42,43,44,45,46,47,48,49,50,51,52],showpac:17,shutdown:0,shutdown_serv:0,similar:[30,32,54],simon:36,simpli:53,simul:[27,32,34,53],sinc:15,singh:21,singl:4,singleton:[4,14],site:32,skill:[30,32],slightli:17,small:26,smalledit:37,smith:21,societi:[32,35],softwar:[30,32,53],solar:32,solut:19,some:[36,53],someth:[16,27],sometim:22,sort:15,sourc:[0,1,2,3,4,5,6,8,9,10,13,14,15,16,30,34,54],south:[26,27,32],special:35,specif:15,specifi:41,src:[9,54],start:[26,30,36,37,40,45,46],start_dat:30,state:[29,32,33],statement:[14,27,35],statu:[26,32,33,35,36,37],sting:54,storag:[2,17,46,50],store:[2,16,19,23,25,46,53],storenam:50,stori:31,str:[1,2,6,10,15,21,23,30,31,54],straightforward:35,street:[29,32],string:[15,16,18,19,20,21,22,24,25,26,27,29,30,32,33,34,35,36,37,38,53,54],structur:33,student:[23,25,28,30,32,53],studi:37,stun:35,sub:15,subaward_amount:[26,36],subclass:4,subject:44,submiss:[18,27],submit:[18,33,35,36,37],success:33,suffix:15,sumith:21,summari:[32,35,37],summer:26,sundai:32,sunni:33,support:[26,34],syllabu:[23,32],symbol:21,sympi:[21,24,26],symposia:33,synergi:26,system:[2,17,30,32,53],tabl:53,take:23,tape:33,target:[5,9,15,41,44,46,54],taught:[23,32],teach:32,team:[18,26,34,35,36],technic:53,techniqu:27,templat:[1,6,10,54],temporari:54,tessem:35,test:[14,15,16,24,30,44],tex:17,texa:32,text:[18,31,32,35,44],than:[15,23,32,53],thei:[17,22,35],them:[10,15,54],thepresent:33,thesi:32,thi:[1,2,4,6,10,14,15,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],thilina:21,thing:[1,6,10,20,21,35,37],think:54,those:[11,15,41,53],though:53,through:27,tightli:22,time:[15,18,32],timestamp:18,titl:[17,18,19,20,21,22,26,27,30,32,33,35,36,37],title_short:36,tname:[1,6,10],to_bool:16,to_dat:41,togeth:35,tool:[11,27,53],toolkit:32,top:[16,53],torn:7,total:15,touch:[10,14],tour:32,train:18,transact:34,transform:35,travel:[24,32],travi:[2,54],trip:33,tupl:15,two:15,twocolumn:17,txt:2,type:[2,3,4,7,15,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,47,53],typic:[25,26,36],u201ccyclass:18,u201d:18,uchicago:32,ucni_axlwmxtrdd3iwqw0mzbo65cevdrsxzm:26,unallow:24,uncertainti:27,under:[26,32,37],undergradu:32,uni:38,uniform:17,uniqu:[18,19,21,23,25,27,29,30,31,32,33,34,53],unit:29,univers:[17,18,26,27,29,32,36,38],university_id:38,unlik:14,unpoor:35,unsegregated_expens:24,unspecifi:54,unstructur:54,unviers:36,updat:[4,14,42,46,54],upenn:35,upton:33,uranium:32,url:[9,15,20,27,32,34,54],url_check:15,usa:[21,29],usag:[39,40,41,42,43,44,45,46,47,48,49,50,51,52],usc:42,usd:[26,36],use:[17,32,53,54],used:[4,17,29,35,37,54],usedin:32,useful:[30,32,54],usepackag:17,user:[2,14,32,33,53],user_config:2,using:[1,6,10,26,32],usp:[26,32],usual:53,util:32,valid:[5,11,26,36,41,46,47,53],valu:[4,5,14,15,23,24,26,32,33,35,36,37,42,54],variou:[17,46],vat:21,veri:[35,36],version:[14,22,30],via:[17,54],video:32,view:4,vig:21,vision:20,visit:[27,32],volum:21,wai:[16,17,35,37],wallab:32,want:[11,35,36,37,53],warn:[14,32],warn_forbidden_nam:14,warship:33,wave:37,weather:33,web:11,webpag:27,websit:[11,27,32,34,53,54],week:33,weight:23,welcom:53,well:[16,44],were:17,what:[9,33,35,37,46,54],whatev:54,when:[4,15,18,23,35,37,54],where:[15,22,29,33,36,37,54],whether:[15,23,30,54],which:[2,7,14,15,17,26,41,54],who:[4,11,22,23,34,35,36,53],whose:42,wilson:[18,35],wingit:37,wisc:18,wisconsin:[18,32],withinth:32,won:35,word:37,work:[26,30,34,35],workshop:[18,53],world:29,would:[15,17,20,54],wpjhdm8njia:26,wrap:15,wrapper:15,wright:12,write:33,written:[20,37],www:[27,32,36],xonsh:[4,30],yaml:[5,28,46,53,54],yaml_to_json:5,year:[8,15,20,21,23,24,26,30,31,32,33,35,36,37],yield:15,yml:54,york:[17,29],you:[11,17,30,36,37,54],your:[32,37,53],yyyi:41,zip:[29,32]},titles:["Web Application (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.app</span></code>)","Builder Base Class (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.builders.basebuilder</span></code>)","Data Broker (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.broker</span></code>)","Builders (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.builder</span></code>)","Base class for chaining DBs (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.chained_db</span></code>)","CLI Commands (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.commands</span></code>)","CV Builder (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.builders.cvbuilder</span></code>)","Database Interface Tools (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.database</span></code>)","Date Tools (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.dates</span></code>)","Deployment Tools (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.deploy</span></code>)","Website Builder (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.builders.htmlbuilder</span></code>)","Regolith API","Interactive Sessions (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.interact</span></code>)","Command Line Interface (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.main</span></code>)","Run Controlers (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.runcontrol</span></code>)","Tools (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.tools</span></code>)","Run Control Validators (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.validators</span></code>)","Broker","Abstracts","Assignments","Blog","Citations","Contacts","Courses","Expenses","Grades","Grants","Groups","Collections","Institutions","Jobs","News","People","Presentations","Projects","Proposalreviews","Proposals","Refereereports","Students","add","app","build","classlist","deploy","email","grade","Regolith Commands","ingest","json-to-yaml","rc","store","validate","yaml-to-json","Regolith","Top-level Configuration Keys"],titleterms:{"abstract":18,"class":[1,4],"new":31,DBs:4,add:39,api:[11,53],app:[0,40],applic:0,assign:19,base:[1,4],basebuild:1,blacklist:54,blog:20,broker:[2,17],build:41,builddir:54,builder:[1,3,6,10],chain:4,chained_db:4,citat:21,classlist:42,cli:[5,54],client:54,cmd:54,cname:54,coll:54,collect:[28,53],command:[5,13,46,53],configur:54,contact:22,control:[14,16,53],cours:23,cvbuilder:6,data:2,databas:[7,53,54],date:8,debug:54,deploi:[9,43,54],deploy:9,deploydir:54,document:54,email:44,exampl:[18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,53],expens:24,file:17,filenam:54,from:17,grade:[25,45],grant:26,group:27,groupnam:54,htmlbuilder:10,ingest:47,insert:17,instal:53,institut:29,interact:12,interfac:[7,13],job:30,json:[18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,48,52],kei:54,level:54,line:13,load:17,main:13,misc:51,mongo:[18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38],mongodbpath:54,peopl:32,present:33,project:34,propos:36,proposalreview:35,public_onli:54,refereereport:37,regolith:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,46,53],retriev:17,run:[14,16,53],runcontrol:14,schema:[18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,54],session:12,set:54,site:53,static_sourc:54,store:[17,50,54],student:38,tool:[7,8,9,15],top:54,tutori:53,usag:12,user:54,usual:54,valid:[16,51],web:0,websit:10,yaml:[18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,48,52]}})
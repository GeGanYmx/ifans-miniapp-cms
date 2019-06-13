//模拟数据库表
//admin表：管理员表

let admin=[
    {      
        userId:1,
        username:'gegan',
        pwd:'gegan'
    },
    {
        userId:2,
        username:'ymx',
        pwd:'ymx'
    },
    {
        userId:3,
        username:'admin',
        pwd:'admin'
    }
]

let posts=[
    {
      id:1,
      type:2,
      title:'null',
      text:'这首歌曲很好听',
      userId:1,
      refPostId:2,
      createAt:'2009/08/02',
      IsUp:'否',
      status:'正常',
      attendCount:50,
      likeCount:20
    },
     {
      id:2,
      type:1,
      title:'酒干倘卖无',
      text:'有没有觉得这首歌很给力的',
      userId:1,
      refPostId:'null',
      createAt:'2009/07/02',
      IsUp:'否',
      status:'正常',
      attendCount:60,
      likeCount:90
    },
    {
        id:3,
        type:1,
        title:'如今最火的汪星人',
        text:'如今哪个汪星人最火？？？',
        userId:1,
        refPostId:'null',
        createAt:'2009/07/02',
        IsUp:'否',
        status:'正常',
        attendCount:60,
        likeCount:90
      },
      {
        id:4,
        type:2,
        title:'null',
        text:'那当然是哈士奇啊！！！',
        userId:1,
        refPostId:3,
        createAt:'2019/05/02',
        IsUp:'否',
        status:'正常',
        attendCount:10,
        likeCount:10
      },
      {
        id:5,
        type:2,
        title:'null',
        text:'不是，阿拉斯加也很傻啊',
        userId:2,
        refPostId:3,
        createAt:'2019/06/05',
        IsUp:'否',
        status:'正常',
        attendCount:15,
        likeCount:15
      }
    ];

    let users=[
        {
          id:1,
          nickname:'孙达',
          regInfo:'wxapp',
          createAt:'2018/10/13',
          updateAt:'2018/10/13'
        },
        {
           id:2,
          nickname:'项萌',
          regInfo:'wxapp',
          createAt:'2018/10/13',
          updateAt:'2018/06/10'
        },
        {
           id:3,
           nickname:'Leen@桂',
           regInfo:'wxapp',
           createAt:'2018/10/13',
           updateAt:'2018/10/13'
         }
      ]

const data={
    admin,
    posts,
    users
}

export default data
import Mock from "mockjs"

Mock.setup({timeout:'1000'});

let data = Mock.mock('/mock','get', [
    // 单选题
    {
        id:1,
        problem:'1+1等于几?',
        selects:['A : 1', 'B : 2', 'C : 3', 'D : 不知道'],
        answer:'A',
        type:'0'
    },
    {
        id:2,
        problem:'三国五虎上将不包括下列哪位',
        selects:['A : 关羽', 'B : 张飞', 'C : 赵云', 'D : 刑道荣'],
        answer:'D',
        type:'0'
    },
    {
        id:3,
        problem:'诸葛亮字孔明，道号是什么？',
        selects:['A : 村夫', 'B : 妖道', 'C : 卧龙', 'D : 南阳野人'],
        answer:'C',
        type:'0'
    },
    {
        id:4,
        problem:'我国社会主义的强国之路是（）',
        selects:['A : 深化改革', 'B : 改革开放', 'C : 扩大开放', 'D : 对外开放'],
        answer:'B',
        type:'0'
    },
    // 多选题
    {
        id:5,
        problem:'古时代指 我 的简称有下列哪些',
        selects:['A : 在下', 'B : 朕', 'C : 寡人', 'D : 孤'],
        answer:'ABCD',
        type:'1'
    },
    {
        id:6,
        problem:'三国五虎上将是下列中的？',
        selects:['A : 赵云', 'B : 黄忠', 'C : 刘三刀', 'D : 吕布'],
        answer:'AB',
        type:'1'
    },
    //填空题
    {
        id:7,
        problem:'嚯嚯',
        answer:'一giao窝里giaogiao',
        type:'2'
    },
    {
        id:8,
        problem:'加油',
        answer:'奥利给！',
        type:'2'
    },
    {
        id:9,
        problem:'猫吃鱼，狗吃肉',
        answer:'奥特曼打小怪兽',
        type:'2'
    },
    {
        id:10,
        problem:'唯见青山不见君',
        answer:'殚尽红颜如神明',
        type:'2'
    },
]);

export default data;
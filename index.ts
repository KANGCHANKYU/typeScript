// number
// string
// boolean
// null
// undefined
// any <- typeScript���� �߰��� ������ Ÿ�� (Ÿ�Ը��� ���Ƶ� ���θ� ����ϴ�? Ÿ��

// ����
let a:number = 3;
a = 4;

//  any type
let c:any = 4;
c= "asd";

// ���� ������ Ÿ��
let d : number | string = "asddsa" + 1;
d = 3;

// �迭
let e:string[] = ['apple','mongo'];

// Ŭ����
//           �Ű�����1 , �Ű�����2 , return ������ Ÿ��
function addNumber(a:number,b:number):number{
    return a + b
}

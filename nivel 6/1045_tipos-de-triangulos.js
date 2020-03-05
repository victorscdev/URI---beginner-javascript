

/******************* Descrição do Problema *******************/
/*
    Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:

    se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
    se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
    se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
    se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
    se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
    se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
    Entrada
    A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

    Saída
    Imprima todas as classificações do triângulo especificado na entrada.

/* Variaveis */
var lines = [ '5.0 7.0 2.0' ];
var arr = lines.shift().split( ' ' );

var A = parseFloat( arr[ 0 ] );
var B = parseFloat( arr[ 1 ] );
var C = parseFloat( arr[ 2 ] );

if ( B > A && B > C ) [ [ A, B ] = [ B, A ] ];
else if ( C > A && C > B ) [ [ A, C ] = [ C, A ] ];

if ( A >= ( B + C ) ) console.log( 'NAO FORMA TRIANGULO' );
else {
    
    if ( Math.pow( A, 2 ) == ( Math.pow( B, 2 ) + Math.pow( C, 2 ) ) ) console.log( 'TRIANGULO RETANGULO' );
    if ( Math.pow( A, 2 ) > ( Math.pow( B, 2 ) + ( Math.pow( C, 2 ) ) ) ) console.log( 'TRIANGULO OBTUSANGULO' );
    if ( Math.pow( A, 2 ) < ( Math.pow( B, 2 ) + Math.pow( C, 2 ) ) ) console.log( 'TRIANGULO ACUTANGULO' );
    if ( A == B && A == C ) console.log( 'TRIANGULO EQUILATERO' );
    if ( ( A == B && A != C ) || ( A == C && A != B ) || ( B == C && B != A ) ) console.log( 'TRIANGULO ISOSCELES' );

}
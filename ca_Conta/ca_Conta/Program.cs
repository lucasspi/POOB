using System;

namespace ca_Conta
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            Conta a1 = new Conta(01, 100, "Cliente 01");
       

           


            int aux = 1;


            while (aux!=0)
            {
                Console.WriteLine("DIGITE 1 PARA SACAR");
                Console.WriteLine("DIGITE 2 PARA DEPOSITAR");
                Console.WriteLine("DIGITE 3 PARA VER SEU SALDO");
                Console.WriteLine("DIGITE 4 PARA SAIR");
                int option = Convert.ToInt32(Console.ReadLine());
                Console.ReadLine();
                switch (option)
                {
                    case 1:
                        Console.WriteLine("Digite o valor a ser sacado: ");
                        double x = Convert.ToDouble(Console.ReadLine());
                        a1.sacar(x);
                        Console.WriteLine("Voce sacou "+ x +" reais");
                        Console.ReadLine();

                        break;

                    case 2:
                        Console.WriteLine("Digite o valor a ser depositado: ");
                        double y = Convert.ToDouble(Console.ReadLine());
                        a1.depositar(y);
                        Console.WriteLine("Voce sacou " + y + " reais");
                        Console.ReadLine();

                        break;

                    case 3:
                        Console.WriteLine("O valor do seu saldo é: "+ a1.getSaldo());
                        
                        Console.ReadLine();

                        break;
                    case 4:
                        aux = 0;
                        break;

                    default:
                        break;
                }
            }
        }
    }
}

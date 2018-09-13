using System;

namespace ca_Estacionamento
{
    class Program
    {
        const int N = 1; // Number of carros

        static void Main(string[] args)
        {
            Carro[] carros = new Carro[N];

            for (int i = 0; i < N; i++)
            {
                carros[i] = new Carro();
                Console.Out.WriteLine("Carro #" + (i + 1) + ":");
                carros[i].set_carro_info(); // Set information for each car
            }

            for (int i = 0; i < N; i++)
            {
                Console.Out.WriteLine("\nCarro #" + (i + 1) + ":");
                carros[i].print_carro_info();
                Console.Out.WriteLine("--Taxa de estacionamento:\n  >R$ " + carros[i].get_estacionamento_rate().ToString("F2"));
            }

            Console.In.Read();
        }
    }
}
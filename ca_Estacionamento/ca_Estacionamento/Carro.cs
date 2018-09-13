using System;
namespace ca_Estacionamento
{
    class Carro
    {
        const float horaly_rate = 7;
        private string plate;
        private string brand;
        Tempo entrada_tempo = new Tempo();
        Tempo saida_tempo = new Tempo();

        public void set_carro_info()
        {
            Console.Out.Write("Informar a placa do carro: \n>>");
            plate = Console.In.ReadLine().Split()[0].Trim();

            Console.Out.Write("Informar a marca do carro: \n>>");
            brand = Console.In.ReadLine().Split()[0].Trim();

            Console.Out.Write("Informe a hora de entrada carro (hh:mm:ss):\n>>");
            entrada_tempo.set_tempo();

            Console.Out.Write("Informe a hora de saida do carro (hh:mm:ss):\n>>");
            saida_tempo.set_tempo();

            Console.Out.WriteLine();
        }

        public void print_carro_info()
        {
            Console.Out.WriteLine("--Placa:\n  >" + plate);

            Console.Out.WriteLine("--Marca:\n  >" + brand);

            Console.Out.Write("--Tempo de entrada:\n  >");
            entrada_tempo.print_tempo();
            Console.Out.WriteLine();

            Console.Out.Write("--Hora de saida:\n  >");
            saida_tempo.print_tempo();
            Console.Out.WriteLine();
        }

        public float get_estacionamento_rate()
        {
            Tempo decorrido_tempo = entrada_tempo.subtract_tempo(saida_tempo);

            int horas = decorrido_tempo.get_hora();

            if (decorrido_tempo.get_min() > 14) // 15 minute grace period
            {
                horas += 1;
            }

            return (horas * horaly_rate);
        }
    }
}
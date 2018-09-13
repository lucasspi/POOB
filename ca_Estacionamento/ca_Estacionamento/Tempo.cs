using System;
namespace ca_Estacionamento
{
    class Tempo
    {
        private int hora;
        private int min;
        private int sec;

        public Tempo()
        {
            hora = 0;
            min = 0;
            sec = 0;
        }

        // Assuming the tempo's are set within a day (00:00:00 ~ 23:59:59)
        public void set_tempo()
        {
            string[] tempo = Console.In.ReadLine().Split(':');
            hora = int.Parse(tempo[0]);
            min = int.Parse(tempo[1]);
            sec = int.Parse(tempo[2]);

            if (sec >= 60)
            {
                min += sec / 60;
                sec = sec % 60;
            }

            if (min >= 60)
            {
                hora += min / 60;
                min = min % 60;
            }

            if (hora >= 24)
            {
                hora = hora % 24;
            }
        }

        public int get_hora()
        {
            return hora;
        }

        public int get_min()
        {
            return min;
        }

        public int get_sec()
        {
            return sec;
        }

        public void set_hora(int h)
        {
            hora = h;
        }

        public void set_min(int m)
        {
            min = m;
        }

        public void set_sec(int s)
        {
            sec = s;
        }

        public void print_tempo()
        {
            Console.Out.Write(hora.ToString("D2") + ":" + min.ToString("D2") + ":" + sec.ToString("D2"));
        }

        // Assuming both tempo's are between 00:00:00 and 23:59:59
        public Tempo add_tempo(Tempo other_tempo)
        {
            Tempo tempo_adicionado = new Tempo();
            int novo_h = 0, novo_m = 0, novo_s = 0;

            novo_s = sec + other_tempo.get_sec();

            if (novo_s >= 60)
            {
                novo_m = 1;
                novo_s = novo_s % 60;
            }

            novo_m += min + other_tempo.get_min();

            if (novo_m >= 60)
            {
                novo_h = 1;
                novo_m = novo_m % 60;
            }

            novo_h += hora + other_tempo.get_hora();

            tempo_adicionado.set_hora(novo_h);
            tempo_adicionado.set_min(novo_m);
            tempo_adicionado.set_sec(novo_s);

            return tempo_adicionado;
        }

        // Assuming both tempo's are between 00:00:00 and 23:59:59, and that the caller is the smaller tempo
        public Tempo subtract_tempo(Tempo other_tempo)
        {
            Tempo tempo_subtraido = new Tempo();
            int novo_h = 0, novo_m = 0, novo_s = 0;

            novo_s = other_tempo.get_sec() - sec;

            if (novo_s < 0)
            {
                novo_s += 60;
                novo_m -= 1;
            }

            novo_m += (other_tempo.get_min() - min);

            if (novo_m < 0)
            {
                novo_m += 60;
                novo_h -= 1;
            }

            novo_h += (other_tempo.get_hora() - hora);

            tempo_subtraido.set_hora(novo_h);
            tempo_subtraido.set_min(novo_m);
            tempo_subtraido.set_sec(novo_s);

            return tempo_subtraido;
        }
    }
}
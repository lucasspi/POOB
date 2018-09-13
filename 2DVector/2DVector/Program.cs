using System;

namespace _2DVector
{
    class MainClass
    {
        static void Main(string[] args)
        {
            Vector2D vector_1, vector_2;

            vector_1 = new Vector2D(5.0, 9.0);

            vector_2 = new Vector2D();
            vector_2.set_xy(10.0, 3.0);

            Console.Out.WriteLine("Vetor 1: (" + vector_1.get_x() + ", " + vector_1.get_y() + ")");
            Console.Out.WriteLine("Vetor 2: (" + vector_2.get_x() + ", " + vector_2.get_y() + ")");

            Console.Out.WriteLine("\nProduto Escalar: " + vector_1.scalar_product(vector_2));

            Console.Out.WriteLine("\nVetor 1 modulo: " + vector_1.module());
            Console.Out.WriteLine("Vetor 2 modulo: " + vector_2.module());

            Console.Out.WriteLine("\nAngulo entre vetoress:");
            Console.Out.WriteLine("Radianos = " + vector_1.angle_between(vector_2));
            Console.Out.WriteLine("Graus = " + vector_1.angle_between(vector_2, degrees: true) + "°");

            Vector2D projection = vector_1.projection(vector_2);

            Console.Out.WriteLine("\nProjection of 1 on 2: (" + projection.get_x() + ", " + projection.get_y() + ")");


            Console.In.Read();
        }
    }
}
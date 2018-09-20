using System;
namespace ca_Conta
{
    public class ContaPoupanca : Conta
    {
        int tipo;


        public ContaPoupanca()
        {
        }
        public ContaPoupanca(int _numero, double _saldo, 
                             String _cliente, int _tipo)
            : base(_numero, _saldo, _cliente)
        {
            tipo = _tipo;

        }

        public int geTipo()
        {
            return (tipo);
        }

        public void setTipo(int _tipo)
        {
            tipo = _tipo;
        }
        public override void sacar(double saque)
        {
            saque += 0.1;
            base.sacar(saque);


        }
        public override void depositar(double deposito)
        {
            saldo += deposito;

        }


    }
}

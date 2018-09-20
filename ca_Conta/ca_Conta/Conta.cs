using System;
namespace ca_Conta
{
    public class Conta
    {
        protected int numero;
        protected double saldo;
        protected String cliente;



        public Conta()
        {
        }
        public Conta(int _numero, double _saldo, String _cliente)
        {
            numero = _numero;
            saldo = _saldo;
            cliente = _cliente;

        }

        public int getNumero()
        {
            return (numero);
        }

        public void setNumero(int _numero)
        {
            numero = _numero;
        }
        public double getSaldo()
        {
            return (saldo);
        }

        public void setSaldo(double _saldo)
        {
            saldo = _saldo;
        }
        public String getCliente()
        {
            return (cliente);
        }

        public void setCliente(String _cliente)
        {
            cliente = _cliente;
        }
        public virtual void sacar(double saque)
        {
            saldo -= saque;


        }
        public virtual void depositar(double deposito)
        {
            saldo += deposito;


        }
    }
}

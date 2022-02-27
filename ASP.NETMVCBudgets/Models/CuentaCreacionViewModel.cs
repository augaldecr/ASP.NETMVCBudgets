using Microsoft.AspNetCore.Mvc.Rendering;

namespace ASP.NETMVCBudgets.Models
{
    public class CuentaCreacionViewModel : Cuenta
    {
        public IEnumerable<SelectListItem> TiposCuentas { get; set; }
    }
}

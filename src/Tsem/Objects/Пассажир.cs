﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Tsem
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Пассажир.
    /// </summary>
    // *** Start programmer edit section *** (Пассажир CustomAttributes)

    // *** End programmer edit section *** (Пассажир CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПассажирE", new string[] {
            "ФИО as \'ФИО\'",
            "МестоНаРейс as \'Место на рейс\'",
            "МестоНаРейс.Место as \'Место\'",
            "КодБрони as \'Код бронирования\'",
            "КодБрони.Код as \'Код\'"}, Hidden=new string[] {
            "МестоНаРейс.Место",
            "КодБрони.Код"})]
    [MasterViewDefineAttribute("ПассажирE", "МестоНаРейс", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Место")]
    [MasterViewDefineAttribute("ПассажирE", "КодБрони", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Код")]
    [View("ПассажирL", new string[] {
            "ФИО as \'ФИО\'",
            "МестоНаРейс.Место as \'Место\'",
            "КодБрони.Код as \'Код бронирования\'"})]
    public class Пассажир : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private IIS.Tsem.МестоНаРейс fМестоНаРейс;
        
        private IIS.Tsem.КодБрони fКодБрони;
        
        // *** Start programmer edit section *** (Пассажир CustomMembers)

        // *** End programmer edit section *** (Пассажир CustomMembers)

        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Пассажир.ФИО CustomAttributes)

        // *** End programmer edit section *** (Пассажир.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Пассажир.ФИО Get start)

                // *** End programmer edit section *** (Пассажир.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Пассажир.ФИО Get end)

                // *** End programmer edit section *** (Пассажир.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Пассажир.ФИО Set start)

                // *** End programmer edit section *** (Пассажир.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Пассажир.ФИО Set end)

                // *** End programmer edit section *** (Пассажир.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Пассажир.
        /// </summary>
        // *** Start programmer edit section *** (Пассажир.КодБрони CustomAttributes)

        // *** End programmer edit section *** (Пассажир.КодБрони CustomAttributes)
        [PropertyStorage(new string[] {
                "КодБрони"})]
        [NotNull()]
        public virtual IIS.Tsem.КодБрони КодБрони
        {
            get
            {
                // *** Start programmer edit section *** (Пассажир.КодБрони Get start)

                // *** End programmer edit section *** (Пассажир.КодБрони Get start)
                IIS.Tsem.КодБрони result = this.fКодБрони;
                // *** Start programmer edit section *** (Пассажир.КодБрони Get end)

                // *** End programmer edit section *** (Пассажир.КодБрони Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Пассажир.КодБрони Set start)

                // *** End programmer edit section *** (Пассажир.КодБрони Set start)
                this.fКодБрони = value;
                // *** Start programmer edit section *** (Пассажир.КодБрони Set end)

                // *** End programmer edit section *** (Пассажир.КодБрони Set end)
            }
        }
        
        /// <summary>
        /// Пассажир.
        /// </summary>
        // *** Start programmer edit section *** (Пассажир.МестоНаРейс CustomAttributes)

        // *** End programmer edit section *** (Пассажир.МестоНаРейс CustomAttributes)
        [PropertyStorage(new string[] {
                "МестоНаРейс"})]
        [NotNull()]
        public virtual IIS.Tsem.МестоНаРейс МестоНаРейс
        {
            get
            {
                // *** Start programmer edit section *** (Пассажир.МестоНаРейс Get start)

                // *** End programmer edit section *** (Пассажир.МестоНаРейс Get start)
                IIS.Tsem.МестоНаРейс result = this.fМестоНаРейс;
                // *** Start programmer edit section *** (Пассажир.МестоНаРейс Get end)

                // *** End programmer edit section *** (Пассажир.МестоНаРейс Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Пассажир.МестоНаРейс Set start)

                // *** End programmer edit section *** (Пассажир.МестоНаРейс Set start)
                this.fМестоНаРейс = value;
                // *** Start programmer edit section *** (Пассажир.МестоНаРейс Set end)

                // *** End programmer edit section *** (Пассажир.МестоНаРейс Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПассажирE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПассажирE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПассажирE", typeof(IIS.Tsem.Пассажир));
                }
            }
            
            /// <summary>
            /// "ПассажирL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПассажирL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПассажирL", typeof(IIS.Tsem.Пассажир));
                }
            }
        }
    }
}

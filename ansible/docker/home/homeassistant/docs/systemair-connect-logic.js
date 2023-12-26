
            // ANALOG INPUTS
            const InputATypeStr = {
                0: "Inactive Input",
                
            // ANALOG INPUTS
            const InputATypeStr = {
                0: "Inactive Input",
                1: "Outdoor Air Temperature sensor (OAT)",
                2: "Supply Air Temperature sensor (SAT)",
                3: "Overheat Temperature Sensor (OHT)",
                4: "Frost Protection Temperature Sensor (FPT)",
                5: "Room Air Temperature sensor (RAT)",
                6: "Extract Air Temperature sensor (EAT)",
                7: "Extra Controller Temperature sensor (ECT)",
                8: "Efficiency temperature sensor (EFT)",
            };

            // Need to convert Label to  MB Register
            const Analog_input_name = {
                11000: "Analogue Input 1",
                11001: "Analogue Input 2",
                11002: "Analogue Input 3",
                11003: "Analogue Input 4",
                11004: "Analogue Input 5",
                11005: "Analogue Input 6",
                11006: "Analogue Input 7",
            };

            // converts the InputATypeStr to MB register
            const Analog_type_to_reg = {
                12100: InputATypeStr[4],
                12101: InputATypeStr[1],
                12102: InputATypeStr[2],
                12103: InputATypeStr[5],
                12104: InputATypeStr[6],
                12105: InputATypeStr[7],
                12106: InputATypeStr[8],
                12107: InputATypeStr[3],
            };

            const Analog_type_to_Value_reg = {
                1: 12101, //Outdoor Air Temperature
                2: 12102, //Supply Air Temperature sensor
                3: 12107, //Heater OverHeat
                4: 12100, //Frost protection Temperature sensor
                5: 12103, //Room Air temperature
                6: 12104, //Extract air temperature sensor
                7: 12105, //Extra controller temperature sensor
                8: 12106, //Efficiency temperature sensor
            };

            function getObjectKey(obj, value) {
                return Object.keys(obj).find((key) => obj[key] === value);
            }

            // Need to convert Label to MB Register
            const Digital_input_name = {
                11400: "Digital Input 1",
                11401: "Digital Input 2",
            };

            // Need to convert Label to MB Register
            const Digital_value = {
                1: "ON",
                0: "OFF",
            };

            const Digital_feedback_label = {
                12400: "SAF feedback",
                12401: "EAF feedback",
            };

            // UNIVERSAL VARS
            const UniversalModeStr = {
                0: "Not Set",
                1: "Analogue Input",
                2: "Digital Input",
            };

            const UAI_Type = {
                0: "Inactive Input",
                1: "RH Sensor (RH)",
                2: "CO2 Sensor (CO2)",
                3: "Supply Air Fan Control (SAFC)",
                4: "Extract Air Fan Control (EAFC)",
                5: "Bypass damper Feedback (BYF)",
            };

            const UDI_Type = {
                0: "Inactive Input",
                1: "Away",
                2: "Bypass Damper (BYS)",
                3: "Vacuum Cleaner",
                4: "Cooker Hood",
                5: "Crowded",
                6: "EMT",
                7: "External Stop",
                8: "Extra Controller Alarm",
                9: "Fireplace",
                10: "Holiday",
                11: "Refresh",
                12: "RGS",
                13: "Change Over Feedback",
                14: "Fire Alarm",
                15: "Configurable digital input 1",
                16: "Configurable digital input 2",
                17: "Configurable digital input 3",
                18: "Pressure Guard",
            };

            const UI_Status = {
                0: "Disabled",
                1: "Enabled",
            };

            function convert_Mode_to_Type_ID(Mode_ID, Mode) {
                if (Mode == 0) {
                    return Mode_ID + 150; // middle point
                } else if (Mode == 1) {
                    return Mode_ID + 100;
                } else if (Mode == 2) {
                    return Mode_ID + 200;
                }
            }

            // Can be either Value (if Analogue) or State (if Digital)
            function convert_Mode_to_Value_ID(Mode_ID, Type, Mode) {
                if (Mode == 0) {
                    // do nothing
                } else if (Mode == 1) {
                    if (Type == 1) {
                        //RH
                        return Mode_ID + 1060;
                    } else if (Type == 2) {
                        // CO2
                        return Mode_ID + 1050;
                    } else if (Type == 3) {
                        // Supply Air Fan control
                        return 2100;
                    } else if (Type == 4) {
                        // Extract Air Fan control
                        return 2101;
                    } else if (Type == 5) {
                        // Bypass Damper Feedback
                        return 12404;
                    }
                } else if (Mode == 2) {
                    return Mode_ID + 920;
                }
            }

            /**
             *
             * @param {*} Mode_ID ID if specific Universal Input
             * @param {*} Mode Can be Analogue or Digital
             * @returns
             */
            function convert_Mode_to_Option_ID(Mode_ID, Mode) {
                if (Mode == 0) {
                    return Mode_ID + 170; // Middle point
                } else if (Mode == 1) {
                    return Mode_ID + 120; // if Analog
                } else if (Mode == 2) {
                    return Mode_ID + 220; // if Digital
                }
            }

            const Contact_function_e = {
                0: "Normally Open (NO)",
                1: "Normally Closed (NC)",
            };

            const Pressure_card_type = {
                0: "None",
                1: "Flow",
                2: "Filter clogging",
            };

            // OUTPUT ANALOG
            const OutputATypeStr = {
                0: "Inactive Output",
                1: "Y1 Heating",
                2: "Y2 Exchanger",
                3: "Y3 Cooler",
                4: "Y4 Extra Controller",
                5: "Y1/Y3 Change-over",
                6: "AO Temperature Setpoint",
            };

            // OUTPUT DIGITAL
            const OutputDTypeStr = {
                0: "Inactive Output",
                1: "Step Controller Y1 Heating",
                2: "Step Controller Y2 Exchanger",
                3: "Step Controller Y3 Cooling",
                4: "Step Controller Y4 Extra Controller",
                5: "Sum Alarm",
                6: "Outdoor-/Exhaust Air Damper",
                7: "Secondary Air (Recirculation Air)",
                8: "Activate Cooling",
                9: "Interlock External fan control",
                10: "Start/Stop Circ. Pump, Y1 Heating",
                11: "Start/Stop Circ. Pump, Y3 Cooling",
                12: "Start/Stop Circ. Pump, Y1/3 Change-over",
                13: "Start/Stop Circ. Pump, Y4 Extra Controller",
                14: "Unit status OK",
                15: "Week schedule - Unscheduled",
                16: "Week schedule - Scheduled",
            };

            const OutputTypeOfValue = {
                0: "Auto",
                1: "Manual",
            };

            const TriacOutputType = {
                0: "Inactive Output",
                1: "Y1 Heating",
            };

            /**
             * Clear Analog inputs div
             */
            function Clear_Analog_Inputs() {
                let generated_analog_input = document.getElementById("idAINStatus-config");
                generated_analog_input.innerHTML = "";
            }

            function Append_Analog_Input_obj(object) {
                let generated_analog_input = document.getElementById("idAINStatus-config");
                let encodedObj = encodeURIComponent(JSON.stringify(object));
                let correction_value = object.Correction.Value + "&deg;C";
                let value_value = object.Value.Value + "&deg;C";
                if (object.Type.Value == 0) {
                    // inactive input
                    correction_value = "-";
                    value_value = "-";
                }
                generated_analog_input.innerHTML += `
                                    <table class="sensor-values-table">
                                        <tr>
                                            <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                                <td style="text-align: right">
                                                    <button style="border:none;background-color:inherit;" onclick="Expand_AIN_selection('${encodedObj}')">
                                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>

                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="td-left-aligned">Type:</td>
                                                <td colspan = "2" class="td-right-aligned">${object.TypeStr}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">Sensor correction:</td>
                                                <td class="td-right-aligned">${correction_value}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">Value:</td>
                                                <td class="td-right-aligned">${value_value}</td>
                                            </tr>
                                        </table>
                                    </table>
                                    <br>
                                `;
            }

            function Expand_AIN_selection(encodedObject) {
                const object = JSON.parse(decodeURIComponent(encodedObject));
                console.log("object = " + object);
                let io_to_modify = document.getElementById("Modify_IO");
                io_to_modify.innerHTML = `
                                    <span class="header" onclick="openTab(event, 'Input')" style="cursor:pointer;">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>${object.LabelStr}
                                    </span>

                                    <div class="container">
                                        <label class="container-label">Input Type</label>
                                        <select id = "${object.Type.ID}" style="text-align-last:left !important;" onchange="change_units(this.id)">
                                            <option value="0" selected style="text-align: center;">${InputATypeStr[0]}</option>
                                            <option value="1" style="text-align: center;">${InputATypeStr[1]}</option>
                                            <option value="2" style="text-align: center;">${InputATypeStr[2]}</option>
                                            <option value="3" style="text-align: center;">${InputATypeStr[3]}</option>
                                            <option value="4" style="text-align: center;">${InputATypeStr[4]}</option>
                                            <option value="5" style="text-align: center;">${InputATypeStr[5]}</option>
                                            <option value="6" style="text-align: center;">${InputATypeStr[6]}</option>
                                            <option value="7" style="text-align: center;">${InputATypeStr[7]}</option>
                                            <option value="8" style="text-align: center;">${InputATypeStr[8]}</option>
                                        </select>

                                        <label class="container-label">Sensor Correction (&deg;C)</label>
                                        <span class="popup">
                                            <input id="${object.Correction.ID}" style="padding-left:20px;" type="number" placeholder="${object.Correction.Value}" min="-10" max="10"
                                                onblur="imposeMinMax(this)" />
                                            <span class="popuptext"></span>
                                        </span>

                                        <table class="sensor-values-table" style ="width:320px; padding-top:12px;";>
                                            <tr>
                                                <td class="td-left-aligned">Value:</td>
                                                <td class="td-right-aligned">
                                                    <span id="ain_value_placeholder">${object.Value.Value}</span>
                                                    <span> &deg;C</span>
                                                </td>
                                            </tr>
                                        </table>

                                        <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                    </div>
                                    `;

                enableOption(object.Type.ID, object.TypeStr);
                openTab(null, "Modify_IO");
            }

            /**
             *  Clear Digital inputs div
             */
            function Clear_Digital_Inputs() {
                let generated_digital_input = document.getElementById("idDINStatus-config");
                generated_digital_input.innerHTML = "";
            }

            function Append_Digital_Input_obj(object) {
                const encodedObj = encodeURIComponent(JSON.stringify(object));
                const obj_length = Object.keys(object).length;
                let generated_digital_input;
                if (obj_length == 6) {
                    let contact_function_value = object.CF.Value;
                    let value_value = object.Value.Value;
                    if (object.Type.Value == 0) {
                        // inactive input
                        contact_function_value = "-";
                        value_value = "-";
                    }
                    generated_digital_input = document.getElementById("idDINStatus-config");
                    generated_digital_input.innerHTML += `
                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                                <td style="text-align: right">
                                                    <button style="border:none;background-color:inherit;" onclick="Expand_DIN_selection('${encodedObj}')">
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>

                                            <table class="sensor-values-table">
                                                <tr>
                                                    <td class="td-left-aligned">Type:</td>
                                                    <td colspan = "2" class="td-right-aligned">${object.TypeStr}</td>
                                                </tr>
                                                <tr>
                                                    <td colspan = "2" class="td-left-aligned">Contact Function:</td>
                                                    <td class="td-right-aligned">${contact_function_value}</td>
                                                </tr>
                                                <tr>
                                                    <td class="td-left-aligned">Value:</td>
                                                    <td colspan = "2" class="td-right-aligned">${value_value}</td>
                                                </tr>
                                            </table>
                                        </table>
                                        <br>
                                    `;
                } else if (obj_length == 2) {
                    // SAF EAF FEEDBACK
                    generated_digital_input = document.getElementById("idDINStatus-config");
                    generated_digital_input.innerHTML += `
                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                            </tr>
                                            <table class="sensor-values-table">
                                                <tr>
                                                    <td class="td-left-aligned">Value:</td>
                                                    <td class="td-right-aligned">${object.Value.Value} rpm</td>
                                                </tr>
                                            </table>
                                        </table>
                                        <br>
                                    `;
                }
            }

            //TODO: How to assign unique ID's based on Modbus parameters excell document?
            function Expand_DIN_selection(encodedObject) {
                const object = JSON.parse(decodeURIComponent(encodedObject));
                console.log("object = ", object);

                let io_to_modify = document.getElementById("Modify_IO");
                io_to_modify.innerHTML = `
                                    <span class="header" onclick="openTab(event, 'Input')" style="cursor:pointer;">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>${object.LabelStr}
                                    </span>

                                    <div class="container">
                                        <label class="container-label">Input Type</label>
                                        <select id="${object.Type.ID}" style="text-align-last:left !important;" onchange="change_units(this.id)">
                                            <option value="0" selected style="text-align: center;">${UDI_Type[0]}</option>
                                            <option value="1" style="text-align: center;">${UDI_Type[1]}</option>
                                            <option value="2" style="text-align: center;">${UDI_Type[2]}</option>
                                            <option value="3" style="text-align: center;">${UDI_Type[3]}</option>
                                            <option value="4" style="text-align: center;">${UDI_Type[4]}</option>
                                            <option value="5" style="text-align: center;">${UDI_Type[5]}</option>
                                            <option value="6" style="text-align: center;">${UDI_Type[6]}</option>
                                            <option value="7" style="text-align: center;">${UDI_Type[7]}</option>
                                            <option value="8" style="text-align: center;">${UDI_Type[8]}</option>
                                            <option value="9" style="text-align: center;">${UDI_Type[9]}</option>
                                            <option value="10" style="text-align: center;">${UDI_Type[10]}</option>
                                            <option value="11" style="text-align: center;">${UDI_Type[11]}</option>
                                            <option value="12" style="text-align: center;">${UDI_Type[12]}</option>
                                            <option value="13" style="text-align: center;">${UDI_Type[13]}</option>
                                            <option value="14" style="text-align: center;">${UDI_Type[14]}</option>
                                            <option value="15" style="text-align: center;">${UDI_Type[15]}</option>
                                            <option value="16" style="text-align: center;">${UDI_Type[16]}</option>
                                            <option value="17" style="text-align: center;">${UDI_Type[17]}</option>
                                            <option value="18" style="text-align: center;">${UDI_Type[18]}</option>
                                        </select>

                                        <label class="container-label">Contact function</label>
                                        <select id="${object.CF.ID}" style="text-align-last:left !important;">
                                            <option value="0" selected style="text-align: center;">${Contact_function_e[0]}</option>
                                            <option value="1" style="text-align: center;">${Contact_function_e[1]}</option>
                                        </select>

                                        <table class="sensor-values-table" style="width:320px; padding-top:12px;">
                                            <tr>
                                                <td class="td-left-aligned">Value:</td>
                                                <td id="din_value_placeholder" class="td-right-aligned">${object.Value.Value}</td>
                                            </tr>
                                        </table>

                                        <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                    </div>
                                `;

                enableOption(object.Type.ID, object.TypeStr);
                enableOption(object.CF.ID, object.CF.Value);
                openTab(null, "Modify_IO");
            }

            /**
             * Clear Universal inputs div
             */
            function Clear_Universal_Inputs() {
                let generated_universal_input = document.getElementById("idUINStatus-config");
                generated_universal_input.innerHTML = "";
            }

            function Append_Universal_Input_obj(object) {
                let encodedObj = encodeURIComponent(JSON.stringify(object));
                let generated_universal_inputs = document.getElementById("idUINStatus-config");
                let obj_length = Object.keys(object).length;
                if (obj_length == 3) {
                    //NOT SET
                    console.log("Display Universal not set");
                    //DISPLAY MODE NOT SET
                    generated_universal_inputs.innerHTML += `
                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                                <td style="text-align: right">
                                                    <button style="border:none;background-color:inherit;" onclick="Expand_UIN_selection('${encodedObj}')">
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        </table>

                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="td-left-aligned">Mode:</td>
                                                <td class="td-right-aligned">${object.Mode.Value}</td>
                                            </tr>
                                            <tr>
                                                <td class = "input-not-set" colspan ="2">
                                                    Set the universal input as analog or digital
                                                </td>
                                            </tr>
                                        </table>
                                    `;
                } else if (obj_length == 7) {
                    //determine mode value
                    //ANALOG/DIGITAL MODE
                    //decide if Label should be Contact function or Sensor correction based on type
                    let option_label;
                    if (object.Mode.Value == "Analogue Input") {
                        option_label = "Sensor correction:";
                    } else if (object.Mode.Value == "Digital Input") {
                        option_label = "Contact function:";
                    }
                    generated_universal_inputs.innerHTML += `
                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                                <td style="text-align: right">
                                                    <button style="border:none;background-color:inherit;" onclick="Expand_UIN_selection('${encodedObj}')">
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        </table>

                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="td-left-aligned">Mode:</td>
                                                <td colspan = "2" class="td-right-aligned">${object.Mode.Value}</td>
                                            </tr>
                                            <tr>
                                                <td class="td-left-aligned">Type:</td>
                                                <td colspan = "2" class="td-right-aligned">${object.Type.Value}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">${option_label}</td>
                                                <td class="td-right-aligned">${object.Option.Value} ${object.Units}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">Value:</td>
                                                <td class="td-right-aligned">${object.Value.Value} ${object.Units}</td>
                                            </tr>
                                        </table>
                                    `;
                } else if (obj_length == 6) {
                    //EAT RH
                    console.log("Display EAT/RH");
                    generated_universal_inputs.innerHTML += `
                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                                <td style="text-align: right">
                                                    <button style="border:none;background-color:inherit;" onclick="Expand_UIN_selection('${encodedObj}')">
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        </table>

                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="td-left-aligned">Status:</td>
                                                <td colspan = "2" class="td-right-aligned">${object.EAT_Conf.Value}</td>
                                            </tr>
                                            <tr>
                                                <td class="td-left-aligned">Type:</td>
                                                <td colspan = "2" class="td-right-aligned">${object.LabelStr}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">Sensor Correction:</td>
                                                <td class="td-right-aligned">${object.EAT_Correction.Value} ${object.Units}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">Value:</td>
                                                <td class="td-right-aligned">${object.EAT_Value.Value} ${object.Units}</td>
                                            </tr>
                                        </table>
                                    `;
                } else if (obj_length == 5) {
                    // PRESSURE CARD
                    generated_universal_inputs.innerHTML += `
                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                                <td style="text-align: right">
                                                    <button style="border:none;background-color:inherit;" onclick="Expand_UIN_selection('${encodedObj}')">
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        </table>

                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="td-left-aligned">Type:</td>
                                                <td colspan = "2" class="td-right-aligned">${object.Type.Value}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">SAF Sensor Correction:</td>
                                                <td class="td-right-aligned">${object.SAF.Correction.Value} ${object.Units}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">SAF Value:</td>
                                                <td class="td-right-aligned">${object.SAF.Value.Value} ${object.Units}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">EAF Sensor Correction:</td>
                                                <td class="td-right-aligned">${object.EAF.Correction.Value} ${object.Units}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">EAF Value:</td>
                                                <td class="td-right-aligned">${object.EAF.Value.Value} ${object.Units}</td>
                                            </tr>
                                        </table>
                                    `;
                }
            }

            //TODO: How to assign unique ID's based on Modbus parameters excell document?
            function Expand_UIN_selection(encodedObject) {
                const object = JSON.parse(decodeURIComponent(encodedObject));
                let obj_length = Object.keys(object).length;
                let io_to_modify = document.getElementById("Modify_IO");

                if (obj_length == 7) {
                    let analog_add = 0;
                    let digital_add = 0;
                    if (object.Mode.Value == "Analogue Input") {
                        digital_add = +100;
                    } else if (object.Mode.Value == "Digital Input") {
                        analog_add = -100;
                    }
                    io_to_modify.innerHTML = `
                                        <span class="header" onclick="openTab(event, 'Input')" style="cursor:pointer;">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>${object.LabelStr}
                                        </span>

                                        <div class="container">
                                            <label class="container-label">Signal Type</label>
                                            <select id="${
                                                object.Mode.ID
                                            }" style="text-align-last:left !important;" onchange="Enable_Uin_divs(this);">
                                                <option value="0" selected style="text-align: center;">${
                                                    UniversalModeStr[0]
                                                }</option>
                                                <option value="1" style="text-align: center;">${
                                                    UniversalModeStr[1]
                                                }</option>
                                                <option value="2" style="text-align: center;">${
                                                    UniversalModeStr[2]
                                                }</option>
                                            </select>

                                            <div id="Not_Set_Div" style="display: none;"></div>

                                            <div id="A_div" style="display: none;">
                                                <label class="container-label">Input Type</label>
                                                <select id="${
                                                    object.Type.ID + analog_add
                                                }" style="text-align-last:left !important;" onchange="change_units(this.id, 0)">
                                                    <option value="0" selected style="text-align: center;">${
                                                        UAI_Type[0]
                                                    }</option>
                                                    <option value="1" style="text-align: center;">${
                                                        UAI_Type[1]
                                                    }</option>
                                                    <option value="2" style="text-align: center;">${
                                                        UAI_Type[2]
                                                    }</option>
                                                    <option value="3" style="text-align: center;">${
                                                        UAI_Type[3]
                                                    }</option>
                                                    <option value="4" style="text-align: center;">${
                                                        UAI_Type[4]
                                                    }</option>
                                                    <option value="5" style="text-align: center;">${
                                                        UAI_Type[5]
                                                    }</option>
                                                </select>

                                                <div id ="Uin_correction">
                                                    <label id ="uin_units" class="container-label">Sensor Correction</label>
                                                    <span class="popup">
                                                        <input id="${object.Option.ID + analog_add}"
                                                                style="padding-left:20px;"
                                                                type="number"
                                                                value="${object.Option.Value}"
                                                                placeholder="0" min="0" max="10" step="0.1"
                                                                onblur="imposeMinMax(this)" />
                                                        <span class="popuptext"></span>
                                                    </span>
                                                </div>

                                                <table class="sensor-values-table" style="width:320px; padding-top:12px;">
                                                    <tr>
                                                        <td class="td-left-aligned">Value:</td>
                                                        <td id="uin_value_placeholder" class="td-right-aligned">${
                                                            object.Value.Value
                                                        }</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <div id="D_div" style="display: none;">
                                                <label class="container-label">Input Type</label>
                                                <select id="${
                                                    object.Type.ID + digital_add
                                                }" style="text-align-last:left !important;" onchange="change_units(this.id, 0)">
                                                    <option value="0" selected style="text-align: center;">${
                                                        UDI_Type[0]
                                                    }</option>
                                                    <option value="1" style="text-align: center;">${
                                                        UDI_Type[1]
                                                    }</option>
                                                    <option value="2" style="text-align: center;">${
                                                        UDI_Type[2]
                                                    }</option>
                                                    <option value="3" style="text-align: center;">${
                                                        UDI_Type[3]
                                                    }</option>
                                                    <option value="4" style="text-align: center;">${
                                                        UDI_Type[4]
                                                    }</option>
                                                    <option value="5" style="text-align: center;">${
                                                        UDI_Type[5]
                                                    }</option>
                                                    <option value="6" style="text-align: center;">${
                                                        UDI_Type[6]
                                                    }</option>
                                                    <option value="7" style="text-align: center;">${
                                                        UDI_Type[7]
                                                    }</option>
                                                    <option value="8" style="text-align: center;">${
                                                        UDI_Type[8]
                                                    }</option>
                                                    <option value="9" style="text-align: center;">${
                                                        UDI_Type[9]
                                                    }</option>
                                                    <option value="10" style="text-align: center;">${
                                                        UDI_Type[10]
                                                    }</option>
                                                    <option value="11" style="text-align: center;">${
                                                        UDI_Type[11]
                                                    }</option>
                                                    <option value="12" style="text-align: center;">${
                                                        UDI_Type[12]
                                                    }</option>
                                                    <option value="13" style="text-align: center;">${
                                                        UDI_Type[13]
                                                    }</option>
                                                    <option value="14" style="text-align: center;">${
                                                        UDI_Type[14]
                                                    }</option>
                                                    <option value="15" style="text-align: center;">${
                                                        UDI_Type[15]
                                                    }</option>
                                                    <option value="16" style="text-align: center;">${
                                                        UDI_Type[16]
                                                    }</option>
                                                    <option value="17" style="text-align: center;">${
                                                        UDI_Type[17]
                                                    }</option>
                                                    <option value="18" style="text-align: center;">${
                                                        UDI_Type[18]
                                                    }</option>
                                                </select>

                                                <label class="container-label">Contact function</label>
                                                <select id="${
                                                    object.Option.ID + digital_add
                                                }" style="text-align-last:left !important;">
                                                    <option value="0" selected style="text-align: center;">${
                                                        Contact_function_e[0]
                                                    }</option>
                                                    <option value="1" style="text-align: center;">${
                                                        Contact_function_e[1]
                                                    }</option>
                                                </select>

                                                <table class="sensor-values-table" style="width:320px; padding-top:12px;">
                                                    <tr>
                                                        <td class="td-left-aligned">Value:</td>
                                                        <td id="uind_value_placeholder" class="td-right-aligned">${
                                                            object.Value.Value
                                                        }</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <button class="action_set" onclick="configureParamValues('Modify_IO', ${
                                                object.Mode.ID
                                            })">Set</button>
                                        </div>
                                    `;

                    if (object.Mode.Value == "Analogue Input") {
                        document.getElementById("A_div").style.display = "block";
                        document.getElementById("D_div").style.display = "none";
                        enableOption(object.Type.ID + analog_add, object.Type.Value);
                        change_units((object.Type.ID + analog_add).toString(), 0); // required to hide correction if type is not co2 or rh
                    } else if (object.Mode.Value == "Digital Input") {
                        document.getElementById("A_div").style.display = "none";
                        document.getElementById("D_div").style.display = "block";
                        enableOption(object.Type.ID + digital_add, object.Type.Value);
                        enableOption(object.Option.ID + digital_add, object.Option.Value);
                    } else if (object.Mode.Value == "Not Set") {
                        document.getElementById("A_div").style.display = "none";
                        document.getElementById("D_div").style.display = "none";
                    }
                    enableOption(object.Mode.ID, object.Mode.Value);
                } else if (obj_length == 6) {
                    //EAT //RH
                    console.log("object = ", object);
                    io_to_modify.innerHTML = `
                                        <span class="header" onclick="openTab(event, 'Input')" style="cursor:pointer;">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>${object.LabelStr}
                                        </span>

                                        <div class="container">
                                            <label class="container-label">${object.EAT_Conf.Value}</label>
                                            <select id="${object.EAT_Conf.ID}" style="text-align-last:left !important;">
                                                <option value="0" selected style="text-align: center;">${UI_Status[0]}</option>
                                                <option value="1" style="text-align: center;">${UI_Status[1]}</option>
                                            </select>

                                            <label class="container-label">Sensor Correction</label>
                                            <span class="popup">
                                                <input id="${object.EAT_Correction.ID}" style="padding-left:20px;" type="number" value="${object.EAT_Correction.Value}" placeholder="0" min="-100" max="100"
                                                    onblur="imposeMinMax(this)" />
                                                <span class="popuptext"></span>
                                            </span>

                                            <table class="sensor-values-table" style="width:320px; padding-top:12px;">
                                                <tr>
                                                    <td class="td-left-aligned">Value:</td>
                                                    <td id= "${object.EAT_Value.ID}" class="td-right-aligned">${object.EAT_Value.Value}</td>
                                                </tr>
                                            </table>

                                            <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                        </div>
                                    `;
                    enableOption(object.EAT_Conf.ID, object.EAT_Conf.Value);
                } else if (obj_length == 5) {
                    //PRESSURE CARD
                    io_to_modify.innerHTML = `
                                        <span class="header" onclick="openTab(event, 'Input')" style="cursor:pointer;">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>${object.LabelStr}
                                        </span>

                                        <div class="container">
                                            <label class="container-label">Type</label>
                                            <select id="${object.Type.ID}" style="text-align-last:left !important;">
                                                <option value="0" selected style="text-align: center;">None</option>
                                                <option value="1" style="text-align: center;">Flow</option>
                                                <option value="2" style="text-align: center;">Filter clogging</option>
                                            </select>

                                            <label style="color:#002543; font-size:24px; font-family:Inter, Arial, Helvetica, sans-serif; font-weight:400;">Supply Air Fan</label>

                                            <label class="container-label">SAF Sensor correction</label>
                                            <span class="popup">
                                                <input id="${object.SAF.Correction.ID}" style="padding-left:20px;" type="number" value="${object.SAF.Correction.Value}" placeholder="0" min="-99" max="99"
                                                    onblur="imposeMinMax(this)" />
                                                <span class="popuptext"></span>
                                            </span>

                                            <table class="sensor-values-table" style="width:320px; padding-top:12px;">
                                                <tr>
                                                    <td class="td-left-aligned">SAF Value:</td>
                                                    <td id="${object.SAF.Value.ID}" class="td-right-aligned">${object.SAF.Value.Value}</td>
                                                </tr>
                                            </table>

                                            <label style="color:#002543; font-size:24px; font-family:Inter, Arial, Helvetica, sans-serif;">Extract Air Fan</label>

                                            <label class="container-label">EAF Sensor correction</label>
                                            <span class="popup">
                                                <input id="${object.EAF.Correction.ID}" style="padding-left:20px;" type="number" value ="${object.EAF.Correction.Value}" placeholder="0" min="-99" max="99"
                                                    onblur="imposeMinMax(this)" />
                                                <span class="popuptext"></span>
                                            </span>

                                            <table class="sensor-values-table" style="width:320px;padding-top:12px;">
                                                <tr>
                                                    <td class="td-left-aligned">EAF Value:</td>
                                                    <td id="${object.EAF.Value.ID}" class="td-right-aligned">${object.EAF.Value.Value}</td>
                                                </tr>
                                            </table>

                                            <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                        </div>
                                    `;
                    enableOption(object.Type.ID, object.Type.Value);
                } else if (obj_length == 3) {
                    //NOT SET
                    let type_id = convert_Mode_to_Type_ID(
                        object.Mode.ID,
                        getObjectKey(UniversalModeStr, object.Mode.Value)
                    );
                    let option_id = convert_Mode_to_Option_ID(
                        object.Mode.ID,
                        getObjectKey(UniversalModeStr, object.Mode.Value)
                    );

                    io_to_modify.innerHTML = `
                                        <span class="header" onclick="openTab(event, 'Input')" style="cursor:pointer;">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>${object.LabelStr}
                                        </span>

                                        <div class="container">
                                            <label class="container-label">Signal Type</label>
                                            <select id="${
                                                object.Mode.ID
                                            }" style="text-align-last:left !important;" onchange="Enable_Uin_divs(this);">
                                                <option value="0" selected style="text-align: center;">${
                                                    UniversalModeStr[0]
                                                }</option>
                                                <option value="1" style="text-align: center;">${
                                                    UniversalModeStr[1]
                                                }</option>
                                                <option value="2" style="text-align: center;">${
                                                    UniversalModeStr[2]
                                                }</option>
                                            </select>

                                            <div id="Not_Set_Div" style="display: none;"></div>

                                            <div id="A_div" style="display: none;">
                                                <label class="container-label">Input Type</label>
                                                <select id="${
                                                    type_id - 50
                                                }" style="text-align-last:left !important;" onchange="change_units(this.id,0)">
                                                    <option value="0" selected style="text-align: center;">${
                                                        UAI_Type[0]
                                                    }</option>
                                                    <option value="1" style="text-align: center;">${
                                                        UAI_Type[1]
                                                    }</option>
                                                    <option value="2" style="text-align: center;">${
                                                        UAI_Type[2]
                                                    }</option>
                                                    <option value="3" style="text-align: center;">${
                                                        UAI_Type[3]
                                                    }</option>
                                                    <option value="4" style="text-align: center;">${
                                                        UAI_Type[4]
                                                    }</option>
                                                    <option value="5" style="text-align: center;">${
                                                        UAI_Type[5]
                                                    }</option>
                                                </select>

                                                <div id ="Uin_correction">
                                                    <label id ="uin_units" class="container-label">Sensor Correction</label>
                                                    <span class="popup">
                                                        <input id="${
                                                            option_id - 50
                                                        }" style="padding-left:20px;" type="number" value="N/A" placeholder="0" min="-100" max="100" onblur="imposeMinMax(this)" />
                                                        <span class="popuptext"></span>
                                                    </span>
                                                </div>

                                                <table class="sensor-values-table" style="width:320px; padding-top:12px;">
                                                    <tr>
                                                        <td class="td-left-aligned">Value:</td>
                                                        <td id="uin_value_placeholder" class="td-right-aligned">N/A</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <div id="D_div" style="display: none;">
                                                <label class="container-label">Input Type</label>
                                                <select id="${type_id + 50}" style="text-align-last:left !important;">
                                                    <option value="0" selected style="text-align: center;">${
                                                        UDI_Type[0]
                                                    }</option>
                                                    <option value="1" style="text-align: center;">${
                                                        UDI_Type[1]
                                                    }</option>
                                                    <option value="2" style="text-align: center;">${
                                                        UDI_Type[2]
                                                    }</option>
                                                    <option value="3" style="text-align: center;">${
                                                        UDI_Type[3]
                                                    }</option>
                                                    <option value="4" style="text-align: center;">${
                                                        UDI_Type[4]
                                                    }</option>
                                                    <option value="5" style="text-align: center;">${
                                                        UDI_Type[5]
                                                    }</option>
                                                    <option value="6" style="text-align: center;">${
                                                        UDI_Type[6]
                                                    }</option>
                                                    <option value="7" style="text-align: center;">${
                                                        UDI_Type[7]
                                                    }</option>
                                                    <option value="8" style="text-align: center;">${
                                                        UDI_Type[8]
                                                    }</option>
                                                    <option value="9" style="text-align: center;">${
                                                        UDI_Type[9]
                                                    }</option>
                                                    <option value="10" style="text-align: center;">${
                                                        UDI_Type[10]
                                                    }</option>
                                                    <option value="11" style="text-align: center;">${
                                                        UDI_Type[11]
                                                    }</option>
                                                    <option value="12" style="text-align: center;">${
                                                        UDI_Type[12]
                                                    }</option>
                                                    <option value="13" style="text-align: center;">${
                                                        UDI_Type[13]
                                                    }</option>
                                                    <option value="14" style="text-align: center;">${
                                                        UDI_Type[14]
                                                    }</option>
                                                    <option value="15" style="text-align: center;">${
                                                        UDI_Type[15]
                                                    }</option>
                                                    <option value="16" style="text-align: center;">${
                                                        UDI_Type[16]
                                                    }</option>
                                                    <option value="17" style="text-align: center;">${
                                                        UDI_Type[17]
                                                    }</option>
                                                    <option value="18" style="text-align: center;">${
                                                        UDI_Type[18]
                                                    }</option>
                                                </select>

                                                <label class="container-label">Contact function</label>
                                                <select id="${option_id + 50}" style="text-align-last:left !important;">
                                                    <option value="0" selected style="text-align: center;">${
                                                        Contact_function_e[0]
                                                    }</option>
                                                    <option value="1" style="text-align: center;">${
                                                        Contact_function_e[1]
                                                    }</option>
                                                </select>

                                                <table class="sensor-values-table" style="width:320px";>
                                                    <tr>
                                                        <td class="td-left-aligned">Value:</td>
                                                        <td class="td-right-aligned">N/A</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                        </div>
                                    `;

                    if (object.Mode.Value == "Analogue Input") {
                        document.getElementById("A_div").style.display = "block";
                        document.getElementById("D_div").style.display = "none";
                        document.getElementById("Not_Set_Div").style.display = "none";
                        enableOption(object.Type.ID + analog_add, object.Type.Value);
                    } else if (object.Mode.Value == "Digital Input") {
                        document.getElementById("A_div").style.display = "none";
                        document.getElementById("D_div").style.display = "block";
                        document.getElementById("Not_Set_Div").style.display = "none";
                        enableOption(object.Type.ID + digital_add, object.Type.Value);
                        enableOption(object.Option.ID + digital_add, object.Option.Value);
                    } else if (object.Mode.Value == "Not Set") {
                        document.getElementById("Not_Set_Div").style.display = "block";
                        document.getElementById("A_div").style.display = "none";
                        document.getElementById("D_div").style.display = "none";
                    }
                    enableOption(object.Mode.ID, object.Mode.Value);
                }
                openTab(null, "Modify_IO");
            }

            function Enable_Uin_divs(param) {
                console.log("param = ", param);
                var mode_selected = param.options[param.selectedIndex].text;
                if (mode_selected == "Digital Input") {
                    document.getElementById(param.id).value = 2;
                    console.log("DIGITAL MODE SELECTED");
                    document.getElementById("D_div").style.display = "block";
                    document.getElementById("A_div").style.display = "none";
                    document.getElementById("Not_Set_Div").style.display = "none";
                } else if (mode_selected == "Analogue Input") {
                    document.getElementById(param.id).value = 1;
                    console.log("ANALOG MODE SELECTED");
                    document.getElementById("D_div").style.display = "none";
                    document.getElementById("A_div").style.display = "block";
                    document.getElementById("Not_Set_Div").style.display = "none";
                } else if (mode_selected == "Not Set") {
                    document.getElementById(param.id).value = 0;
                    console.log("NOT SET MODE SELECTED");
                    document.getElementById("D_div").style.display = "none";
                    document.getElementById("A_div").style.display = "none";
                    document.getElementById("Not_Set_Div").style.display = "block";
                }
            }

            function Clear_Analog_Output() {
                var generated_analog_output = document.getElementById("idAOUTStatus-config");
                generated_analog_output.innerHTML = "";
            }

            function Append_Analog_Output_obj(object) {
                const encodedObj = encodeURIComponent(JSON.stringify(object));

                let type_of_value_value = object.Type_Value.Value;
                let value_value = object.Value.Value;
                let value_units = object.Units;

                if (object.LabelStr != "SAF Output" && object.LabelStr != "EAF Output") {
                    if (object.Type.Value == "Inactive Output") {
                        // inactive input
                        type_of_value_value = "-";
                        value_value = "-";
                        value_units = "";
                    }
                }

                console.log("append analog output ");
                var obj_length = Object.keys(object).length;
                if (obj_length == 6) {
                    var generated_analog_output = document.getElementById("idAOUTStatus-config");
                    generated_analog_output.innerHTML += `
                                    <table class="sensor-values-table">
                                        <tr>
                                        <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                            <td style="text-align: right">
                                                <button style="border:none;background-color:inherit;" onclick="Expand_AOUT_selection('${encodedObj}')">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                </svg>
                                                </button>
                                            </td>
                                        </tr>

                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="td-left-aligned">Type:</td>
                                                <td class="td-right-aligned">${object.Type.Value}</td>
                                            </tr>

                                            <tr>
                                                <td class="td-left-aligned">Type of value:</td>
                                                <td class="td-right-aligned">${type_of_value_value} </td>
                                            </tr>

                                            <tr>
                                                <td class="td-left-aligned">Value:</td>
                                                <td class="td-right-aligned">${value_value} ${value_units}</td>
                                            </tr>
                                        </table>
                                    </table>
                                    <br>
                                `;
                }

                if (obj_length == 5) {
                    //SAF EAF
                    var generated_analog_output = document.getElementById("idAOUTStatus-config");
                    generated_analog_output.innerHTML += `
                                    <table class="sensor-values-table">
                                        <tr>
                                        <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                            <td style="text-align: right">
                                                <button style="border:none;background-color:inherit;" onclick="Expand_AOUT_selection('${encodedObj}')">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                </svg>
                                                </button>
                                            </td>
                                        </tr>

                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="td-left-aligned">Type of value:</td>
                                                <td class="td-right-aligned">${object.Type_Value.Value} </td>
                                            </tr>
                                            <tr>
                                                <td class="td-left-aligned">Value:</td>
                                                <td class="td-right-aligned">${object.Value.Value} ${value_units}</td>
                                            </tr>
                                        </table>
                                    </table>
                                    <br>
                                `;
                }
            }

            //TODO: How to assign unique ID's based on Modbus parameters excell document?
            function Expand_AOUT_selection(encodedObject) {
                let value_id_offset_auto = 0;
                let value_id_offset_manual = 0;

                const object = JSON.parse(decodeURIComponent(encodedObject));
                console.log("expanded object.Value.ID = ", object.Value.ID);

                let obj_length = Object.keys(object).length;
                let io_to_modify = document.getElementById("Modify_IO");

                if (obj_length == 6) {
                    if (object.Type_Value.Value == "Auto") {
                        console.log("initial value type is Auto");
                        value_id_offset_manual = 390;
                        if (object.LabelStr === "Triac Output") {
                            value_id_offset_manual = 11561;
                        }
                        //different offset if type is Triac
                    }

                    if (object.Type_Value.Value == "Manual") {
                        console.log("initial value type is Manual");
                        value_id_offset_auto = -390;
                    }

                    io_to_modify.innerHTML = `
                                        <span class="header" onclick="openTab(event, 'Output')" style="cursor:pointer;">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>${object.LabelStr}
                                        </span>
                                        <div class="container">
                                            <label class="container-label">Output Type</label>
                                            <select id = "${
                                                object.Type.ID
                                            }" style="text-align-last:left !important;" onchange="output_type_changed(this);">
                                                <option value="0" selected style="text-align: center;">${
                                                    OutputATypeStr[0]
                                                }</option>
                                                <option value="1" style="text-align: center;">${
                                                    OutputATypeStr[1]
                                                }</option>
                                                <option value="2" style="text-align: center;">${
                                                    OutputATypeStr[2]
                                                }</option>
                                                <option value="3" style="text-align: center;">${
                                                    OutputATypeStr[3]
                                                }</option>
                                                <option value="4" style="text-align: center;">${
                                                    OutputATypeStr[4]
                                                }</option>
                                                <option value="5" style="text-align: center;">${
                                                    OutputATypeStr[5]
                                                }</option>
                                                <option value="6" style="text-align: center;">${
                                                    OutputATypeStr[6]
                                                }</option>
                                            </select>

                                            <div id ="AO_type">
                                                <label class="container-label">Output voltage range</label>
                                                <select id = "13025" style="text-align-last:left !important;">
                                                    <option value="0" selected style="text-align: center;">0-10V</option>
                                                    <option value="1" style="text-align: center;">2-10V</option>
                                                    <option value="2" style="text-align: center;">10-0V</option>
                                                    <option value="3" style="text-align: center;">10-2V</option>
                                                </select>

                                                <label class="container-label">Low value (&deg;C)</label>
                                                <span class="popup">
                                                    <input id = "13030" style="padding-left:20px;" type="number" placeholder="12&deg;C" min="12" max="30"
                                                        onblur="imposeMinMax(this)" />
                                                    <span class="popuptext"></span>
                                                </span>

                                                <label class="container-label">High value (&deg;C)</label>
                                                <span class="popup">
                                                    <input id = "13031" style="padding-left:20px;" type="number" placeholder="40&deg;C" min="12" max="40"
                                                        onblur="imposeMinMax(this)" />
                                                    <span class="popuptext"></span>
                                                </span>

                                                <label class="container-label">Setpoint Type</label>
                                                <select id = "13032" style="text-align-last:left !important;">
                                                    <option value="0" selected style="text-align: center;">SATC</option>
                                                    <option value="1" style="text-align: center;">EATC/RATC</option>
                                                </select>
                                            </div>

                                            <label class="container-label">Value Type</label>
                                            <select id = "${
                                                object.Type_Value.ID
                                            }" style="text-align-last:left !important;" onchange="a_out_value_type_changed(this);">
                                                <option value="0" selected style="text-align: center;">Auto</option>
                                                <option value="1" style="text-align: center;">Manual</option>
                                            </select>

                                            <div id = "a_out_manual">
                                                <label class="container-label">Value (${object.Units})</label>
                                                <span class="popup">
                                                    <input id = ${
                                                        object.Value.ID + value_id_offset_manual
                                                    } style="padding-left:20px;" type="number" value ="${
                        object.Value.Value
                    }" placeholder="0" min="0" max="10" step = "0.1"
                                                        onblur="imposeMinMax(this)" />
                                                    <span class="popuptext"></span>
                                                </span>
                                            </div>

                                            <div id = "a_out_auto">
                                                <table class="sensor-values-table" style ="width:320px; padding-top:12px;">
                                                    <tr>
                                                        <td class="td-left-aligned">Value:</td>
                                                        <td id = ${
                                                            object.Value.ID + value_id_offset_auto
                                                        } class="td-right-aligned">${object.Value.Value} ${
                        object.Units
                    }</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                        </div>
                                    `;
                    console.log(" type id =", object.Type.ID);
                    console.log(" type value =", object.Type.Value);

                    enableOption(object.Type.ID, object.Type.Value);
                    enableOption(object.Type_Value.ID, object.Type_Value.Value);

                    if (object.Type_Value.Value == "Auto") {
                        document.getElementById("a_out_manual").style.display = "none";
                        document.getElementById("a_out_auto").style.display = "block";
                    } else if (object.Type_Value.Value == "Manual") {
                        document.getElementById("a_out_manual").style.display = "block";
                        document.getElementById("a_out_auto").style.display = "none";
                    }

                    if (object.LabelStr == "Triac Output") {
                        console.log("triac output expanded");
                        const mySelect = document.getElementById(object.Type.ID);
                        //set the disabled property for myselect options
                        mySelect.options[2].disabled = true;
                        mySelect.options[3].disabled = true;
                        mySelect.options[4].disabled = true;
                        mySelect.options[5].disabled = true;
                        mySelect.options[6].disabled = true;

                        //change min max of Value
                        object.Value.ID + value_id_offset_manual;
                        var triac_value_element = document.getElementById(object.Value.ID + value_id_offset_manual);
                        triac_value_element.setAttribute("max", 100);
                        triac_value_element.setAttribute("min", 0);
                        triac_value_element.setAttribute("step", 1);
                    } else {
                        var triac_value_element = document.getElementById(object.Value.ID + value_id_offset_manual);
                        triac_value_element.setAttribute("max", 10);
                        triac_value_element.setAttribute("min", 0);
                        triac_value_element.setAttribute("step", 0.1);
                    }

                    if (object.Type.Value == "AO Temperature Setpoint") {
                        document.getElementById("AO_type").style.display = "block";
                    } else {
                        document.getElementById("AO_type").style.display = "none";
                    }
                }
                if (obj_length == 5) {
                    //SAF EAF

                    if (object.Type_Value.Value == "Auto") {
                        console.log("initial value type is Auto");
                        value_id_offset_manual = -200;
                    }

                    if (object.Type_Value.Value == "Manual") {
                        console.log("initial value type is Manual");
                        value_id_offset_auto = +200;
                    }
                    console.log("value id if manual is selected = ", object.Value.ID + value_id_offset_manual);
                    console.log("value id if auto is selected = ", object.Value.ID + value_id_offset_auto);

                    io_to_modify.innerHTML = `
                                        <span class="header" onclick="openTab(event, 'Output')" style="cursor:pointer;">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>${object.LabelStr}
                                        </span>

                                        <div class="container">
                                            <label class="container-label">Value Type</label>
                                            <select id = "${
                                                object.Type_Value.ID
                                            }" style="text-align-last:left !important;" onchange="saf_eaf_out_value_type_changed(this);">
                                                <option value="0" selected style="text-align: center;">Auto</option>
                                                <option value="1" style="text-align: center;">Manual</option>
                                            </select>

                                            <div id = "saf_eaf_out_manual">
                                                <label class="container-label">Value (%)</label>
                                                <span class="popup">
                                                    <input id = ${
                                                        object.Value.ID + value_id_offset_manual
                                                    } style="padding-left:20px;" type="number" value ="${
                        object.Value.Value
                    }" placeholder="0" min="0" max="100" step ="1"
                                                        onblur="imposeMinMax(this)" />
                                                    <span class="popuptext"></span>
                                                </span>
                                            </div>

                                            <div id = "saf_eaf_out_auto">
                                                <table class="sensor-values-table" style ="width:320px; padding-top:12px;">
                                                    <tr>
                                                        <td class="td-left-aligned">Value:</td>
                                                        <td id = "${
                                                            object.Value.ID + value_id_offset_auto
                                                        }" class="td-right-aligned">${object.Value.Value} ${
                        object.Units
                    }</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                        </div>
                                    `;
                    enableOption(object.Type_Value.ID, object.Type_Value.Value);
                    if (object.Type_Value.Value == "Auto") {
                        document.getElementById("saf_eaf_out_manual").style.display = "none";
                        document.getElementById("saf_eaf_out_auto").style.display = "block";
                    } else if (object.Type_Value.Value == "Manual") {
                        document.getElementById("saf_eaf_out_manual").style.display = "block";
                        document.getElementById("saf_eaf_out_auto").style.display = "none";
                    }
                }
                openTab(null, "Modify_IO");
            }

            function saf_eaf_out_value_type_changed(sel) {
                var type = sel.options[sel.selectedIndex].text;
                if (type == "Auto") {
                    document.getElementById("saf_eaf_out_manual").style.display = "none";
                    document.getElementById("saf_eaf_out_auto").style.display = "block";
                } else if (type == "Manual") {
                    document.getElementById("saf_eaf_out_manual").style.display = "block";
                    document.getElementById("saf_eaf_out_auto").style.display = "none";
                }
            }

            function d_out_value_type_changed(sel) {
                var type = sel.options[sel.selectedIndex].text;
                if (type == "Auto") {
                    document.getElementById("d_out_manual").style.display = "none";
                    document.getElementById("d_out_auto").style.display = "block";
                } else if (type == "Manual") {
                    document.getElementById("d_out_manual").style.display = "block";
                    document.getElementById("d_out_auto").style.display = "none";
                }
            }

            function a_out_value_type_changed(sel) {
                var type = sel.options[sel.selectedIndex].text;
                if (type == "Auto") {
                    document.getElementById("a_out_manual").style.display = "none";
                    document.getElementById("a_out_auto").style.display = "block";
                } else if (type == "Manual") {
                    document.getElementById("a_out_manual").style.display = "block";
                    document.getElementById("a_out_auto").style.display = "none";
                }
            }

            function output_type_changed(sel) {
                var type = sel.options[sel.selectedIndex].text;
                console.log("output type changed");
                if (type == "AO Temperature Setpoint") {
                    document.getElementById("AO_type").style.display = "block";
                } else {
                    document.getElementById("AO_type").style.display = "none";
                }
            }

            function Clear_Digital_Output() {
                var generated_digital_output = document.getElementById("idDOUTStatus-config");
                generated_digital_output.innerHTML = "";
            }

            /**
             *
             * @param {*} Label
             * @param {*} Type
             * @param {*} Type_of_value
             * @param {*} Value
             */
            function Append_Digital_Output_obj(object) {
                var encodedObj = encodeURIComponent(JSON.stringify(object));
                var type_of_value_value = object.Type_Value.Value;
                var value_value = object.Value.Value;
                if (object.Type.Value == "Inactive Output") {
                    // inactive input
                    type_of_value_value = "-";
                    value_value = "-";
                }
                var generated_digital_output = document.getElementById("idDOUTStatus-config");
                generated_digital_output.innerHTML += `
                                <table class="sensor-values-table">
                                    <tr>
                                    <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                        <td style="text-align: right">
                                            <button style="border:none;background-color:inherit;"  onclick="Expand_DOUT_selection('${encodedObj}')">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>

                                    <table class="sensor-values-table">
                                        <tr>
                                            <td class="td-left-aligned">Type:</td>
                                            <td class="td-right-aligned">${object.Type.Value}</td>
                                        </tr>
                                        <tr>
                                            <td class="td-left-aligned">Type of value:</td>
                                            <td class="td-right-aligned">${type_of_value_value} </td>
                                        </tr>
                                        <tr>
                                            <td class="td-left-aligned">Value:</td>
                                            <td class="td-right-aligned">${value_value}</td>
                                        </tr>
                                    </table>
                                </table>
                                <br>
                            `;
            }

            //TODO: How to assign unique ID's based on Modbus parameters excell document?
            function Expand_DOUT_selection(encodedObject) {
                let object = JSON.parse(decodeURIComponent(encodedObject));
                let io_to_modify = document.getElementById("Modify_IO");

                //if type is manual, add +405 offset to value ID
                let value_id_offset_auto = 0;
                let value_id_offset_manual = 0;

                if (object.Type_Value.Value == "Auto") {
                    console.log("initial value type is Auto");
                    value_id_offset_manual = 405;
                }

                if (object.Type_Value.Value == "Manual") {
                    console.log("initial value type is Manual");
                    value_id_offset_auto = -405;
                }

                io_to_modify.innerHTML = `
                                    <span class="header" onclick="openTab(event, 'Output')" style="cursor:pointer;">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>${object.LabelStr}
                                    </span>
                                    <div class="container">
                                        <label class="container-label">Output Type</label>
                                        <select id = "${object.Type.ID}" style="text-align-last:left !important;">
                                            <option value="0" selected style="text-align: center;">${
                                                OutputDTypeStr[0]
                                            }</option>
                                            <option value="1" style="text-align: center;">${OutputDTypeStr[1]}</option>
                                            <option value="2" style="text-align: center;">${OutputDTypeStr[2]}</option>
                                            <option value="3" style="text-align: center;">${OutputDTypeStr[3]}</option>
                                            <option value="4" style="text-align: center;">${OutputDTypeStr[4]}</option>
                                            <option value="5" style="text-align: center;">${OutputDTypeStr[5]}</option>
                                            <option value="6" style="text-align: center;">${OutputDTypeStr[6]}</option>
                                            <option value="7" style="text-align: center;">${OutputDTypeStr[7]}</option>
                                            <option value="8" style="text-align: center;">${OutputDTypeStr[8]}</option>
                                            <option value="9" style="text-align: center;">${OutputDTypeStr[9]}</option>
                                            <option value="10" style="text-align: center;">${
                                                OutputDTypeStr[10]
                                            }</option>
                                            <option value="11" style="text-align: center;">${
                                                OutputDTypeStr[11]
                                            }</option>
                                            <option value="12" style="text-align: center;">${
                                                OutputDTypeStr[12]
                                            }</option>
                                            <option value="13" style="text-align: center;">${
                                                OutputDTypeStr[13]
                                            }</option>
                                            <option value="14" style="text-align: center;">${
                                                OutputDTypeStr[14]
                                            }</option>
                                            <option value="15" style="text-align: center;">${
                                                OutputDTypeStr[15]
                                            }</option>
                                            <option value="16" style="text-align: center;">${
                                                OutputDTypeStr[16]
                                            }</option>
                                        </select>

                                        <label class="container-label">Value Type</label>
                                        <select id = "${
                                            object.Type_Value.ID
                                        }" style="text-align-last:left !important;" onchange="d_out_value_type_changed(this)">
                                            <option value="0" selected style="text-align: center;">Auto</option>
                                            <option value="1" style="text-align: center;">Manual</option>
                                        </select>

                                        <div id = "d_out_manual">
                                            <label class="container-label">Value</label>
                                            <select id = "${
                                                object.Value.ID + value_id_offset_manual
                                            }" style="text-align-last:left !important;">
                                                <option value="0" selected style="text-align: center;">Off</option>
                                                <option value="1" style="text-align: center;">On</option>
                                            </select>
                                        </div>

                                        <div id = "d_out_auto">
                                            <table class="sensor-values-table" style ="width:320px; padding-top:12px;";>
                                                <tr>
                                                    <td class="td-left-aligned">Value:</td>
                                                    <td id="${
                                                        object.Value.ID + value_id_offset_auto
                                                    }" class="td-right-aligned">${object.Value.Value} ${
                    object.Units
                }</td>
                                                </tr>
                                            </table>
                                        </div>

                                        <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                    </div>
                                `;
                enableOption(object.Type.ID, object.Type.Value);
                enableOption(object.Type_Value.ID, object.Type_Value.Value);

                if (object.Type_Value.Value == "Auto") {
                    document.getElementById("d_out_manual").style.display = "none";
                    document.getElementById("d_out_auto").style.display = "block";
                } else if (object.Type_Value.Value == "Manual") {
                    document.getElementById("d_out_manual").style.display = "block";
                    document.getElementById("d_out_auto").style.display = "none";
                }
                openTab(null, "Modify_IO");
            }

            // this should recalculate ID's

            function Enable_div(i, option) {
                console.log("option = ", option);
                console.log("this = ", this);
                if (i == 0) {
                    // Not Set
                    console.log("Not Set selected");
                    document.getElementById("A_div").style.display = "none";
                    document.getElementById("D_div").style.display = "none";
                    document.getElementById("Not_set_div").style.display = "block";
                } else if (i == 1) {
                    //enable Analogue input div
                    console.log("Analog type selected");
                    document.getElementById("A_div").style.display = "block";
                    document.getElementById("D_div").style.display = "none";
                    document.getElementById("Not_set_div").style.display = "none";
                } else if (i == 2) {
                    //enable Digital input div
                    console.log("Digital type selected");
                    //change input type
                    document.getElementById("D_div").style.display = "block";
                    document.getElementById("A_div").style.display = "none";
                    document.getElementById("Not_set_div").style.display = "none";
                }
            }

            function enableOption(selectId, stringVariable) {
                var selectElement = document.getElementById(selectId);
                var options = selectElement.options;
                for (var i = 0; i < options.length; i++) {
                    var option = options[i];
                    if (option.innerHTML === stringVariable) {
                        console.log("Select string matched = ", option.innerHTML);
                        option.selected = true;
                        break;
                    }
                }
            }

            function enableOptionInDiv(tabName, selectId, stringVariable) {
                const tabWindow = document.getElementById(tabName);
                let selector_id = `[id="${selectId}"]`;
                let selectElem = tabWindow.querySelector(selector_id);
                console.log("enableOptionInDiv selectElem = ", selectElem);
                if (selectElem == null) {
                    console.log("Not a select");
                } else {
                    var options = selectElem.options;
                    for (var i = 0; i < options.length; i++) {
                        var option = options[i];
                        if (option.innerHTML === stringVariable) {
                            option.selected = true;
                            break;
                        }
                    }
                }
            }

            function enableOptionByValue(tabName, selectId, value) {
                console.log("enable option by value = ", value);

                const tabWindow = document.getElementById(tabName);
                let selector_id = `[id="${selectId}"]`;
                let selectElem = tabWindow.querySelector(selector_id);
                console.log("enableOptionInDiv selectElem = ", selectElem);
                if (selectElem == null) {
                    console.log("Not a select");
                } else {
                    var options = selectElem.options;
                    console.log("options = ", options);
                    for (var i = 0; i < options.length; i++) {
                        var option = options[i];
                        if (i == value) {
                            option.selected = true;
                            break;
                        }
                    }
                }
            }

            /*
                        function hideOptionsByValue(selectElement, valuesToHide) {
                            console.log("hide options by value");
                            const options = selectElement.options;
                            console.log("options = ", options);
                            for (let i = 0; i < options.length; i++) {
                                const option = options[i];
                                if (valuesToHide.includes(option.value)) {
                                    console.log("hide option = ", option.value);
                                    option.style.display = "none";
                                    option.style.hidden = true;
                                }
                            }
                        }
                        */

            /*
                         function unhideOptionsByValue(selectElement, valuesToHide) {
                            const options = selectElement.options;
                            for (let i = 0; i < options.length; i++) {
                                const option = options[i];
                                if (valuesToHide.includes(option.value)) {
                                    option.style.display = "block";
                                    option.style.hidden = true;
                                }
                            }
                        }
                        */

            function Clear_Sensor_values() {
                var sensor_values_temperature = document.getElementById("Sensor_values_temperatures");
                var Sensor_values_fan_control = document.getElementById("Sensor_values_fan_control");
                var Sensor_values_air_quality_control = document.getElementById("Sensor_values_air_quality_control");
                sensor_values_temperature.innerHTML = "";
                Sensor_values_fan_control.innerHTML = "";
                Sensor_values_air_quality_control.innerHTML = "";
            }

            function Append_Sensor_values_obj(object) {
                var generated_sensor_values = document.getElementById(object.Div_to_append);
                generated_sensor_values.innerHTML += `
                                    <table class="sensor-values-reworked">
                                        <tr>
                                            <td>${object.LabelStr}</td>
                                        </tr>
                                        <tr>
                                            <td class="item">${object.Value} ${object.Units}</td>
                                        </tr>
                                    </table>
                                `;
            }

            /**
             *
             * @param {*} id id of select input element
             * @param {*} type_id type_id used for parsing (cant match id but not in all cases)
             */
            function change_units(id, offset) {
                console.log("change units id = ", id);
                switch (id) {
                    //UNIVERSAL ANALOG
                    case "11200":
                    case "11201":
                    case "11202":
                    case "11203":
                    case "11204":
                    case "11205":
                        {
                            var type = document.getElementById(id).value;
                            console.log("Analog input type = ", type);
                            if (type == 1) {
                                document.getElementById("uin_units").innerHTML = "Sensor Correction (%)";
                                unhide_div("Uin_correction");
                                document.getElementById((Number(id) + 20).toString()).min = -9;
                                document.getElementById((Number(id) + 20).toString()).max = 9;
                                var rh_value_id = Number(id) + Number(offset) + 960;
                                Mb_read_and_update(rh_value_id, "uin_value_placeholder", "%");
                                document.getElementById((Number(id) + 20).toString()).value = 0;
                            } else if (type == 2) {
                                document.getElementById("uin_units").innerHTML = "Sensor Correction (ppm)";
                                unhide_div("Uin_correction");
                                document.getElementById((Number(id) + 20).toString()).min = -99;
                                document.getElementById((Number(id) + 20).toString()).max = 99;
                                var co2_value_id = Number(id) + Number(offset) + 950;
                                Mb_read_and_update(co2_value_id, "uin_value_placeholder", "ppm");
                                document.getElementById((Number(id) + 20).toString()).value = 0;
                                //change min max to -99 to 99
                            } else if (type == 3) {
                                hide_div("Uin_correction");
                                console.log("update 2101");
                                Mb_read_and_update(2100, "uin_value_placeholder", "V");
                            } else if (type == 4) {
                                hide_div("Uin_correction");
                                console.log("update 2101");
                                Mb_read_and_update(2101, "uin_value_placeholder", "V");
                            } else if (type == 5) {
                                hide_div("Uin_correction");
                                Mb_read_and_update(12404, "uin_value_placeholder", "V");
                            } else {
                                // inactive
                                hide_div("Uin_correction");
                                document.getElementById("uin_units").innerHTML = "Sensor Correction";
                            }
                        }
                        break;

                    //UNIVERSAL DIGITAL
                    case "11300":
                    case "11301":
                    case "11302":
                    case "11303":
                    case "11304":
                    case "11305":
                        {
                            var type = document.getElementById(id).value;
                            console.log("type = ", type);
                            if (type == 0) {
                                document.getElementById("uind_value_placeholder").innerHTML = "-";
                            }
                        }
                        break;

                    case "11000":
                    case "11001":
                    case "11002":
                    case "11003":
                    case "11004":
                    case "11005":
                    case "11006":
                        {
                            // find value based on type
                            var type = document.getElementById(id).value;
                            console.log("type = ", type);
                            if (type == 0) {
                                //OAT
                                document.getElementById("ain_value_placeholder").innerHTML = "-";
                            }
                            if (type == 1) {
                                //OAT
                                Mb_read_and_update(12101, "ain_value_placeholder");
                            } else if (type == 2) {
                                //SAT
                                Mb_read_and_update(12102, "ain_value_placeholder");
                            } else if (type == 3) {
                                //OHT
                                Mb_read_and_update(12107, "ain_value_placeholder");
                            } else if (type == 4) {
                                // FPT
                                Mb_read_and_update(12100, "ain_value_placeholder");
                            } else if (type == 5) {
                                // RAT
                                Mb_read_and_update(12103, "ain_value_placeholder");
                            } else if (type == 6) {
                                // EAT
                                Mb_read_and_update(12104, "ain_value_placeholder");
                            } else if (type == 7) {
                                // ECT
                                Mb_read_and_update(12105, "ain_value_placeholder");
                            } else if (type == 8) {
                                // EFT
                                Mb_read_and_update(12106, "ain_value_placeholder");
                            }
                        }
                        break;
                }
            }
            <!-- END OF IO.JS-->

            <!-- START OF SCHEDULE.JS-->

            var schedule_index = 0;
            var schedule_arr = [];

            //JS implementation of C struct
            function schedules(index, days, p1_time, p2_time) {
                this.index = index;
                this.days = days;
                this.p1_time = p1_time;
                this.p2_time = p2_time;
            }

            is_schedule_valid("new_schedule");

            //ADDING Schedule

            /*
                        var register_5100 = 1;
                        var register_5101 = 1;
                        var day1_period1_time = "&nbsp";
                        var day1_period2_time = "&nbsp";

                        if (register_5100 == 1) {
                            var REG_WS_DAY1_PRD1_START_H = 13; //read 5002
                            var REG_WS_DAY1_PRD1_START_M = 50; //read 5003
                            var REG_WS_DAY1_PRD1_END_H = 14; //read 5004
                            var REG_WS_DAY1_PRD1_END_M = 32; //read 5005
                            day1_period1_time =
                                REG_WS_DAY1_PRD1_START_H +
                                ":" +
                                REG_WS_DAY1_PRD1_START_M +
                                "-" +
                                REG_WS_DAY1_PRD1_END_H +
                                ":" +
                                REG_WS_DAY1_PRD1_END_M;
                        }
                        if (register_5101 == 1) {
                            var REG_WS_DAY1_PRD2_START_H = 15; //read 5006
                            var REG_WS_DAY1_PRD2_START_M = 50; //read 5007
                            var REG_WS_DAY1_PRD2_END_H = 16; //read 5008
                            var REG_WS_DAY1_PRD2_END_M = 32; //read 5009
                            day1_period2_time =
                                REG_WS_DAY1_PRD2_START_H +
                                ":" +
                                REG_WS_DAY1_PRD2_START_M +
                                "-" +
                                REG_WS_DAY1_PRD2_END_H +
                                ":" +
                                REG_WS_DAY1_PRD2_END_M;
                        }
                        //day1_period1_time and day1_period2_time are strings in the following format : 'HH:MM-HH:MM'
                        var schedule1 = new schedules(schedule_index, ["Mon", "Fri"], day1_period1_time, day1_period2_time);
                        schedule_arr.push(schedule1);
                        generate_new_schedule(schedule1.index, schedule1.days, schedule1.p1_time, schedule1.p2_time);

                        var schedule2 = new schedules(schedule_index, ["Mon", "Fri"], day1_period1_time, day1_period2_time);
                        schedule_arr.push(schedule2);
                        generate_new_schedule(schedule2.index, schedule2.days, schedule2.p1_time, schedule2.p2_time);

                        var schedule3 = new schedules(schedule_index, ["Mon", "Tue"], day1_period1_time, day1_period2_time);
                        schedule_arr.push(schedule3);
                        generate_new_schedule(schedule3.index, schedule3.days, schedule3.p1_time, schedule3.p2_time);
                        */

            //remove_all_schedules();

            /**
             * period_enabled function is used to enable/disable the Period 1 and Period 2 using switches. It is very important to note that
             * When the period is enabled, the schedule validity check must be performed straight away to ensure it is not possible to save schedule with default
             * start and end times ( 12:00 - 12:00)
             * In order to determine if period1 or period2 is enabled, we check if period1_start or period2_start elements are hidden or not
             * @param {*} param
             */
            function period_enabled(param) {
                var id = param.id;
                console.log("param id = ", id);
                if (param.checked == true) {
                    unhide_div(id + "_div");
                } else if (param.checked == false) {
                    hide_div(id + "_div");
                }
                if (param.id == "p1" || param.id == "p2") {
                    is_schedule_valid("new_schedule");
                } else if (param.id == "p1_modify" || param.id == "p2_modify") {
                    is_schedule_valid("custom_schedule");
                }
            }

            function is_schedule_valid(param) {
                if (param == "new_schedule") {
                    var period1_start = document.getElementById("p1_start").value;
                    var period1_end = document.getElementById("p1_end").value;
                    var period2_start = document.getElementById("p2_start").value;
                    var period2_end = document.getElementById("p2_end").value;
                    if (document.getElementById("p1").checked == true) {
                        if (period1_start >= period1_end) {
                            document.getElementById("save_schedule_btn").disabled = true;
                        } else {
                            document.getElementById("save_schedule_btn").disabled = false;
                        }
                    }

                    if (document.getElementById("p2").checked == true) {
                        if (period2_start >= period2_end) {
                            document.getElementById("save_schedule_btn").disabled = true;
                        } else if (period2_start <= period1_end) {
                            document.getElementById("save_schedule_btn").disabled = true;
                        } else {
                            document.getElementById("save_schedule_btn").disabled = false;
                        }
                    }
                } else if (param == "custom_schedule") {
                    var period1_start_modify = document.getElementById("p1_modify_start").value;
                    var period1_end_modify = document.getElementById("p1_modify_end").value;
                    var period2_start_modify = document.getElementById("p2_modify_start").value;
                    var period2_end_modify = document.getElementById("p2_modify_end").value;
                    if (document.getElementById("p1_modify").checked == true) {
                        if (period1_start_modify >= period1_end_modify) {
                            document.getElementById("save_schedule_btn_modify").disabled = true;
                        } else {
                            document.getElementById("save_schedule_btn_modify").disabled = false;
                        }
                    }

                    if (document.getElementById("p2_modify").checked == true) {
                        //period 2 should also not overlap period 1

                        if (period2_start_modify >= period2_end_modify) {
                            document.getElementById("save_schedule_btn_modify").disabled = true;
                        } else if (period2_start_modify <= period1_end_modify) {
                            document.getElementById("save_schedule_btn_modify").disabled = true;
                        } else {
                            document.getElementById("save_schedule_btn_modify").disabled = false;
                        }
                    }
                }
            }

            /**
             * add_new_schedule() function needs to know what days and period has been selected to add a new schedule
             * Adding a new schedule is only allowed if valid period1 AND/OR period2 schedules are selected.
             *
             */
            function add_new_schedule() {
                // check if atleast 1 day is selected
                if (Count_selected_days() == 0) {
                    window.alert("Select atleast one day");
                    return;
                }
                var period1_schedule_time = "&nbsp";
                var period2_schedule_time = "&nbsp";

                if (document.getElementById("p1").checked == true) {
                    period1_schedule_time =
                        document.getElementById("p1_start").value + "-" + document.getElementById("p1_end").value;
                    console.log("period1 schedule time = ", period1_schedule_time);
                }

                if (document.getElementById("p2").checked == true) {
                    period2_schedule_time =
                        document.getElementById("p2_start").value + "-" + document.getElementById("p2_end").value;
                    console.log("period2 schedule time = ", period2_schedule_time);
                }
                var schedule = new schedules(
                    schedule_index,
                    SelectActiveDays(),
                    period1_schedule_time,
                    period2_schedule_time
                );
                schedule_arr.push(schedule);
                generate_new_schedule(schedule.index, schedule.days, schedule.p1_time, schedule.p2_time);

                openTab(null, "Week Schedule");
            }

            /**
             * If REG_WS_DAY1_PRD1_ENABLED, that means Monday is enabled, read the following registers:
             * REG_WS_DAY1_PRD1_START_H (Hours start)
             * REG_WS_DAY1_PRD1_START_M (Minute start)
             * REG_WS_DAY1_PRD1_END_H (Hour end)
             * REG_WS_DAY1_PRD1_END_M (Minute end)

             * @param {*} schedule_ID ID to identify the schedule
             * @param {*} days days list
             * @param {*} period1_time period1 time that has been formatted by concatenating start and end times
             * @param {*} period2_time period2 time that has been formatted by concatenating start and end times
             */
            //TODO: How to generate a new schedule depending on MODBUS registers (excell table)
            function generate_new_schedule(schedule_ID, days, period1_time, period2_time) {
                if (schedule_index == 0) {
                    document.getElementById("new_schedule_added").innerHTML = "";
                }
                days_array = days.join(", "); // Update the content with the selected days
                new_schedule_added = document.getElementById("new_schedule_added");
                new_schedule_added.innerHTML += `
                <table style = "margin-bottom:20px;"class="schedule" id ="schedule_num${schedule_ID}">
                    <tr>
                        <td colspan="2" style = "font-size:24px;">Schedule ${schedule_ID + 1}</td>
                        <td style = "text-align:right; align-content:right;">
                            <button style="border:none;background:inherit; color:#004985;"onclick="remove_schedule(${schedule_ID})">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 6H5H21" stroke="#004985" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#004985" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <td colspan="3" id = "schedule${schedule_ID}_days">${days}</td>
                    </tr>

                    <tr>
                        <td style = "font-size:18px;" id = "period1_${schedule_ID}_time">${period1_time}</td>
                        <td style = "font-size:18px;" id = "period2_${schedule_ID}_time">${period2_time}</td>
                        <td style = "text-align:right; align-content:right;">
                            <button style="border:none;background: inherit; color: #004985;"
                                onclick="modify_schedule(${schedule_ID})">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#004985" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="#004985" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </button>
                        </td>
                    </tr>
                </table>
                `;
                schedule_index++;
                if (schedule_index < 1) {
                    document.getElementById("new_schedule_added").innerHTML = "";
                }
            }

            function set_schedule() {
                console.log("set schedule clicked");
            }

            function remove_all_schedules() {
                for (var i = 0; i < schedule_arr.length; i++) {
                    var table_to_remove = document.getElementById("schedule_num" + i);
                    table_to_remove.remove();
                    schedule_index = 0;
                }
            }

            //index starts from 0, but schedule number starts from 1
            function remove_schedule(index_to_remove) {
                console.log("remove schedule index =", index_to_remove);
                //delete all schedules because we need to reorganize them
                for (var i = 0; i < schedule_arr.length; i++) {
                    var table_to_remove = document.getElementById("schedule_num" + i);
                    table_to_remove.remove();
                    schedule_index = 0;
                }

                const x = schedule_arr.splice(index_to_remove, 1);
                var num_to_reorganize = schedule_arr.length - index_to_remove;
                var start_index = index_to_remove;

                for (var i = 0; i < num_to_reorganize; i++) {
                    schedule_arr[start_index + i].index = start_index + i;
                }

                for (var i = 0; i < schedule_arr.length; i++) {
                    generate_new_schedule(
                        schedule_arr[i].index,
                        schedule_arr[i].days,
                        schedule_arr[i].p1_time,
                        schedule_arr[i].p2_time
                    );
                }
                if (schedule_index == 0) {
                    document.getElementById("new_schedule_added").innerHTML = "This week schedule is empty";
                }
            }

            function modify_schedule(param) {
                //e
                console.log("modify schedule ID =", param);
                console.log("test id = ", "period1" + "_" + param + "_time");
                var selected_period1_time = document.getElementById("period1" + "_" + param + "_time").innerHTML;
                var selected_period2_time = document.getElementById("period2" + "_" + param + "_time").innerHTML;
                var selected_schedule_days = document.getElementById("schedule" + param + "_days").innerHTML;

                var period1_start;
                var period1_end;
                var period2_start;
                var period2_end;

                console.log("selected_period1_time = ", selected_period1_time);
                console.log("selected_period2_time = ", selected_period2_time);
                console.log("selected_schedule_days = ", selected_schedule_days);
                days_array = textToList(selected_schedule_days);
                console.log("days_array = ", days_array);
                //deactivate all days except selected schedule days

                if (selected_period1_time != "&nbsp;") {
                    var time_1 = selected_period1_time.split("-");
                    period1_start = time_1[0].replace(/(\r\n|\n|\r)/gm, "");
                    period1_end = time_1[1].replace(/(\r\n|\n|\r)/gm, "");
                }

                if (selected_period2_time != "&nbsp;") {
                    var time_2 = selected_period2_time.split("-");
                    period2_start = time_2[0].replace(/(\r\n|\n|\r)/gm, "");
                    period2_end = time_2[1].replace(/(\r\n|\n|\r)/gm, "");
                }

                console.log("period1 start time = ", period1_start);
                console.log("period1 end time = ", period1_end);

                console.log("period2 start time = ", period2_start);
                console.log("period2 end time = ", period2_end);

                document.getElementById("schedule_number").innerHTML = `
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M25.3327 16H6.66602"
                    stroke="#004985"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M15.9993 25.3334L6.66602 16L15.9993 6.66669"
                    stroke="#004985"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            Schedule ${param + 1}`;

                var schedule_to_modify = document.getElementById("schedule_to_modify");
                schedule_to_modify.innerHTML = `
                <h style="font-size: 24px; color: #002543; font-family: Inter, Arial, Helvetica, sans-serif"
                >Days</h
            >

                <div class="weekDays-selector">
                    <input type="checkbox" id="weekday_modify-Mon" class="weekday_modify" />
                    <label for="weekday_modify-Mon">Mon</label>
                    <input type="checkbox" id="weekday_modify-Tue" class="weekday_modify" />
                    <label for="weekday_modify-Tue">Tue</label>
                    <input type="checkbox" id="weekday_modify-Wed" class="weekday_modify" />
                    <label for="weekday_modify-Wed">Wed</label>
                    <input type="checkbox" id="weekday_modify-Thu" class="weekday_modify" />
                    <label for="weekday_modify-Thu">Thu</label>
                    <input type="checkbox" id="weekday_modify-Fri" class="weekday_modify" />
                    <label for="weekday_modify-Fri">Fri</label>
                    <input type="checkbox" id="weekday_modify-Sat" class="weekday_modify" />
                    <label for="weekday_modify-Sat">Sat</label>
                    <input type="checkbox" id="weekday_modify-Sun" class="weekday_modify" />
                    <label for="weekday_modify-Sun">Sun</label>
                </div>

                <table class="schedule_periods_table">
                    <tr>
                    <td> Schedule ${param}</td>
                    </tr>
                </table>

                    <table class="schedule_periods_table">
                        <tr>
                            <td style="min-width: 100px;">Period1</td>
                            <td>
                                <label style="margin-top: 15px;" class="switch">
                                    <input type="checkbox" id="p1_modify" onchange="period_enabled(this)">
                                    <span class="slider round"></span>
                                </label>
                            </td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>

                    <div id = "p1_modify_div">
                    <table class="schedule_periods_table">
                        <tr>
                            <td>
                                <label for="p1_modify_start" id="p1_modify_start_label">Start time </label>
                                <input id="p1_modify_start" type="time" name="p1_modify_start" value="${period1_start}"
                                    onchange="is_schedule_valid('custom_schedule')" />
                            </td>
                            <td>
                                <label for="p1_modify_end" id="p1_modify_end_label">End time </label>
                                <input id="p1_modify_end" type="time" name="p1_modify_end" value="${period1_end}"
                                    onchange="is_schedule_valid('custom_schedule')" />
                            </td>
                        </tr>
                    </table>
                    </div>

                    <table class="schedule_periods_table">
                        <tr>
                            <td style="min-width: 100px;">Period2</td>
                            <td>
                                <label style="margin-top: 15px;" class="switch">
                                <input type="checkbox" id="p2_modify" onchange="period_enabled(this)">
                                    <span class="slider round"></span>
                                </label>
                            </td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>

                    <div id = "p2_modify_div">
                    <table class="schedule_periods_table">
                        <tr>
                            <td>
                                <label for="p2_modify_start" id="p2_modify_start_label">Start time </label>
                                <input id="p2_modify_start" type="time" name="p2_modify_start" value="${period2_start}"
                                    onchange="is_schedule_valid('custom_schedule')" />
                            </td>
                            <td>
                                <label for="p2_modify_end" id="p2_modify_end_label">End time </label>
                                <input id="p2_modify_end" type="time" name="p2_modify_end" value="${period2_end}"
                                    onchange="is_schedule_valid('custom_schedule')" />
                            </td>
                        </tr>
                    </table>
                    </div>



                <div style="width:500px; height:52px; text-align:left; display:flex; flex-direction:row; padding-top:20px;">
                <button
                    style="width:72px; height:52px; display:inline-flex; align-items: center; justify-content: center;"
                    class="systemair-button-inactive" onclick="openTab(event, 'Week Schedule')">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>


                <button id="save_schedule_btn_modify"
                    style="margin-left:20px;width:232px; height:52px; display:inline-flex; align-items: center; justify-content: center;"
                    class="systemair-button-active" onclick="modify_existing_schedule(${param})">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    Save
                </button>
                </div>
                <br>
                `;

                if (selected_period1_time != "&nbsp;") {
                    document.getElementById("p1_modify").click();
                } else {
                    hide_div("p1_modify_div");
                }
                if (selected_period2_time != "&nbsp;") {
                    document.getElementById("p2_modify").click();
                } else {
                    hide_div("p2_modify_div");
                }

                enableCheckboxesByList(days_array);

                openTab(null, "Custom Schedule");
            }

            function modify_existing_schedule(schedule_id) {
                console.log("modify schedule = ", schedule_id);

                var period1_schedule_time = "&nbsp";
                var period2_schedule_time = "&nbsp";

                if (document.getElementById("p1_modify").checked == true) {
                    period1_schedule_time =
                        document.getElementById("p1_modify_start").value +
                        "-" +
                        document.getElementById("p1_modify_end").value;
                    console.log("period1_modify schedule time = ", period1_schedule_time);
                }

                if (document.getElementById("p2_modify").checked == true) {
                    period2_schedule_time =
                        document.getElementById("p2_modify_start").value +
                        "-" +
                        document.getElementById("p2_modify_end").value;
                    console.log("period2_modify schedule time = ", period2_schedule_time);
                }
                console.log("selected modify days = ", SelectActiveDays_modify());

                remove_schedule(schedule_id); //remove the schedule id and recraete the new one

                var schedule = new schedules(
                    schedule_index,
                    SelectActiveDays_modify(),
                    period1_schedule_time,
                    period2_schedule_time
                );
                schedule_arr.push(schedule);
                generate_new_schedule(schedule.index, schedule.days, schedule.p1_time, schedule.p2_time);
                openTab(null, "Week Schedule");
            }

            function Count_selected_days(param) {
                console.log("update weekday checkbox param = ", param);
                const checkboxes = document.querySelectorAll(".weekday_main:checked");
                if (checkboxes.length > 0) {
                    console.log("Day selected");
                    return checkboxes.length;
                } else {
                    console.log("None selected");
                    return 0;
                }
            }

            function SelectActiveDays(param) {
                const checkboxes = document.querySelectorAll(".weekday_main:checked");
                const selectedDays = Array.from(checkboxes).map((checkbox) => checkbox.id.replace("weekday_main-", ""));
                return selectedDays;
            }

            function SelectActiveDays_modify(param) {
                const checkboxes = document.querySelectorAll(".weekday_modify:checked");
                const selectedDays = Array.from(checkboxes).map((checkbox) =>
                    checkbox.id.replace("weekday_modify-", "")
                );
                return selectedDays;
            }

            function uncheckAllDaysCheckboxes() {
                var checkboxes = document.querySelectorAll(".weekday_main");
                checkboxes.forEach(function (checkbox) {
                    checkbox.checked = false;
                });
            }

            //this is used for custom schedule so we use .weekday_modify
            function enableCheckboxesByList(daysToEnable) {
                var checkboxes = document.querySelectorAll(".weekday_modify");

                checkboxes.forEach(function (checkbox) {
                    var day = checkbox.id.replace("weekday_modify-", "");

                    if (daysToEnable.includes(day)) {
                        checkbox.checked = true;
                    } else {
                        checkbox.checked = false;
                    }
                });
            }

            function textToList(text) {
                return text.split(",").map((day) => day.trim());
            }

            <!-- END OF SCHEDULE.JS-->

            <!-- START OF SCRIPTS.JS-->

            /*********************
             * Menu items update *
             *********************/
            var modeWiFi;

            var active_item_id = 0;
            var co2_counter = 0; // variable to keep track of co2 in demand control
            var rh_counter = 0; // variable to keep track of co2 in demand control
            var freecooling_start_hr = 0;
            var freecooling_start_min = 0;
            var freecooling_end_hr = 0;
            var freecooling_end_min = 0;

            function setDate(year, month, day) {
                // Zero-pad month and day if they are single digits
                const monthStr = month < 10 ? `0${month}` : month.toString();
                const dayStr = day < 10 ? `0${day}` : day.toString();

                // Set the formatted date as the value of the input element
                document.getElementById("date-input").value = `${year}-${monthStr}-${dayStr}`;
            }

            function init() {
                unhide_div("p1_div");
                hide_div("p2_div");

                document.getElementById("analog_out_config").click();
                document.getElementById("analog_in_config").click();
                document.getElementById("wifi1").click();

                var unit_backups_visibility = document.getElementById("unit_backups_btn");
                unit_backups_visibility.setAttribute("hidden", "hidden");
            }

            setTimeout(menuUpdate, 5000);

            function menuUpdate() {
                let requestStr = "menu";
                let xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);

                        const responseJson = JSON.parse(this.responseText);
                        if (typeof responseJson === "object") {
                            let cfg_status = responseJson["cfg_status"];
                            console.log("cfg status = ", cfg_status);
                            if (cfg_status == 2) {
                                unhide_div("download_configuration");
                            }
                            if (cfg_status == 0 || cfg_status == 1) {
                                hide_div("download_configuration");
                            }
                            let mac_stat = document.getElementById("idMac");
                            // var mb_stat = document.getElementById("idMbStat");
                            // var cloud_stat = document.getElementById("idCloudStat");
                            // console.log(responseJson);
                            // console.log(responseJson.mac);
                            // console.log(responseJson.mb);
                            // console.log(responseJson.cloud);
                            mac_stat.innerHTML = "MAC: " + responseJson.mac;
                            // if (responseJson.mb == "1") {
                            //   mb_stat.innerHTML =
                            //     'Connected <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                            //   mb_stat.className = "green";
                            // } else {
                            //   mb_stat.innerHTML =
                            //     'Disconnected <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
                            //   mb_stat.className = "red";
                            // }
                            // if (responseJson.cloud == "1") {
                            //   cloud_stat.innerHTML =
                            //     'Online <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                            //   cloud_stat.className = "green";
                            // } else {
                            //   cloud_stat.innerHTML =
                            //     'Offline <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
                            //   cloud_stat.className = "red";
                            // }
                            modeWiFi = responseJson.mode;
                        } else {
                            // Add check if response is not JSON format
                            alert("Error: " + this.responseText);
                        }
                    }
                };
                console.log("REQ STR: " + requestStr);
                xhttp.open("GET", requestStr, true);
                xhttp.send();
                // setTimeout(menuUpdate, 5000);
            }

            /******************************
             * Mobile menu visibility control *
             ******************************/
            const mobileViewWidthPx = 768;
            let showMenu = false;
            const headerMenuClose = document.getElementById("header-menu-close");
            const headerMenuHamburger = document.getElementById("header-menu-hamburger");
            const menu = document.getElementById("menu");

            window.addEventListener("resize", checkIfMobileView);
            checkIfMobileView();
            function checkIfMobileView() {
                if (document.body.clientWidth > mobileViewWidthPx && showMenu) {
                    menu.classList.add("menu-mobile-opened");
                }
            }

            function openMobileMenu() {
                if (!showMenu) {
                    menu.classList.add("menu-mobile-opened");
                    showMenu = true;
                    headerMenuHamburger.style.display = "none";
                    headerMenuClose.style.display = "block";
                } else {
                    menu.classList.remove("menu-mobile-opened");
                    showMenu = false;
                    headerMenuClose.style.display = "none";
                    headerMenuHamburger.style.display = "block";
                }
            }

            /***************
                        * Tab selector *
                        // Should work differently based on whether it is mobile or desktop web
                        ****************/
            function openTab(evt, tabName, closeMenu = false) {
                if (tabName === "New Schedule") {
                    uncheckAllDaysCheckboxes();
                    // set start time and end time to 1:30PM as default everytime the tab is menu-mobile-opened
                    document.getElementById("p1_start").value = "13:30";
                    document.getElementById("p1_end").value = "13:30";
                    // everytime the new schedule is opened, only Period1 should be enabled
                    if (document.getElementById("p1").checked == true) {
                        console.log("p1 is already checked");
                        is_schedule_valid("new_schedule");
                    } else {
                        console.log("p1 is disabled, enabling it by default");
                        document.getElementById("p1").click();
                    }

                    if (document.getElementById("p2").checked == true) {
                        console.log("p2 is checked, disabling it");
                        document.getElementById("p2").click();
                    } else {
                        console.log("no need to do anything, p2 is disabled");
                        // do nothing
                    }
                }

                if (closeMenu && document.body.clientWidth <= mobileViewWidthPx) {
                    menu.classList.remove("menu-mobile-opened");
                    headerMenuHamburger.style.display = "block";
                    headerMenuClose.style.display = "none";
                    showMenu = false;
                }

                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                updateTabValues(tabName);
                /* Check what can be done here to make tab look pretty */
                document.getElementById(tabName).style.display = "block";
                //add 'active' class if element doesn't have it, otherwhise do nothing
                if (!evt.currentTarget.classList.contains("active")) evt.currentTarget.className += " active";
            }

            // Get the element with id="defaultOpen" and click on it
            document.getElementById("idDefaultOpen").click();

            /************************
             * Button color control *
             ************************/
            // collect common elements
            var regInput = document.getElementById("regId");
            var valInput = document.getElementById("regVal");

            function btnColor() {
                var actRead = document.getElementById("idRead");
                var actWrite = document.getElementById("idWrite");

                if (!regInput.validity.valid || regInput.value == "") {
                    actRead.disabled = true;
                    actWrite.disabled = true;
                    if (!regInput.validity.valid) {
                        var rangeMin = regInput.getAttribute("min");
                        var rangeMax = regInput.getAttribute("max");
                        var popUp = regInput.parentNode.querySelector(".popuptext");
                        if (!popUp.classList.contains("show")) {
                            popUp.innerHTML = `Select value in range [${rangeMin} : ${rangeMax}]`;
                            popUp.classList.add("show");
                            setTimeout(() => {
                                popUp.classList.remove("show");
                            }, 4000);
                        }
                    }
                } else {
                    actRead.disabled = false;
                    if (valInput.value == "") {
                        actWrite.disabled = true;
                    } else {
                        actWrite.disabled = false;
                    }
                }
            }

            function imposeMinMax(elemToValidate) {
                console.log("imposeMinMax");
                var popUp = elemToValidate.parentNode.querySelector(".popuptext");

                var rangeMin = parseFloat(elemToValidate.getAttribute("min"));
                var rangeMax = parseFloat(elemToValidate.getAttribute("max"));
                var step = parseFloat(elemToValidate.getAttribute("step")); // Get the step attribute
                var value = parseFloat(elemToValidate.value);

                if (!popUp) {
                    // If the value is higher than max, set it to the highest value

                    // Check min and max attributes
                    if (elemToValidate.value !== "") {
                        if (parseInt(elemToValidate.value) < parseInt(elemToValidate.min)) {
                            elemToValidate.value = elemToValidate.min;
                        }
                        if (parseInt(elemToValidate.value) > parseInt(elemToValidate.max)) {
                            elemToValidate.value = elemToValidate.max;
                        }
                    } else {
                        elemToValidate.value = elemToValidate.min;
                    }
                } else {
                    if (!isNaN(value) && (value < rangeMin || value > rangeMax)) {
                        if (!popUp.classList.contains("show")) {
                            popUp.innerHTML = `Enter value in range [${rangeMin} : ${rangeMax}]`;
                            popUp.classList.add("show");
                            setTimeout(() => {
                                popUp.classList.remove("show");
                            }, 4000);
                        }
                    }
                    if (elemToValidate.value != "") {
                        if (parseInt(elemToValidate.value) < parseInt(elemToValidate.min)) {
                            elemToValidate.value = elemToValidate.min;
                        }
                        if (parseInt(elemToValidate.value) > parseInt(elemToValidate.max)) {
                            elemToValidate.value = elemToValidate.max;
                        }
                    }
                    if (step) {
                        elemToValidate.value = roundToStep(elemToValidate.value, step);
                    }
                }
            }

            function isStepValid(value, step) {
                return Math.abs(Math.round(value / step) * step - value) < Number.EPSILON;
            }

            function roundToStep(value, step) {
                const roundedValue = Math.round(value / step) * step;
                const decimals = step.toString().split(".")[1]?.length || 0; // Get the number of decimal places in the step
                return parseFloat(roundedValue.toFixed(decimals));
            }
            /******************************
             * Content visibility control *
             ******************************/
            function toggleView() {
                var groupset = document.getElementById("idHiddenContent");
                var dropdown = document.getElementById("1273");
                var cfg_percent = document.getElementsByClassName("percentage");
                var cfg_rpm = document.getElementsByClassName("rpm");
                var i, show_percent, show_rpm;
                if (dropdown.value == "0") {
                    groupset.style.visibility = "hidden";
                    show_percent = "flex";
                    show_rpm = "none";
                } else {
                    groupset.style.visibility = "visible";
                    show_percent = "none";
                    show_rpm = "flex";
                }

                for (i = 0; i < cfg_percent.length; i++) {
                    cfg_percent[i].style.display = show_percent;
                }
                for (i = 0; i < cfg_rpm.length; i++) {
                    cfg_rpm[i].style.display = show_rpm;
                }
            }

            /******************************
             * Single register read/write *
             ******************************/
            function singleReadWrite(actName) {
                if (!regInput.validity.valid) {
                    alert(regInput.validationMessage);
                } else {
                    var requestStr = actName + "?" + regInput.id + "=" + regInput.value;

                    if (actName == "write") {
                        if (valInput.value == "") {
                            alert("Please provide value to write");
                            return;
                        } else {
                            requestStr += "&" + valInput.id + "=" + valInput.value;
                        }
                    }

                    console.log(requestStr);
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            if (this.responseText == "MB DISCONNECTED") {
                                //   var mb_stat = document.getElementById("idMbStat");
                                //   mb_stat.innerHTML =
                                //     'Disconnected <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
                                //   mb_stat.className = "red";
                                alert(this.responseText);
                            } else {
                                valInput.value = this.responseText;
                            }
                        }
                    };
                    xhttp.open("GET", requestStr, true);
                    xhttp.send();
                }
            }

            /**************
             * ACK button *
             **************/
            function sendAck(ackButton) {
                //   var requestStr = "write?regId=" + ackButton.id + "&regVal=1";
                const strForm = {};
                var requestStr = "mwrite?";
                strForm[ackButton.id] = 1;
                requestStr += JSON.stringify(strForm);

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("ACK TEXT: " + this.responseText);
                        setTimeout(ackUpdate(ackButton.id - 2), 1000);
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
                // If Filter alarm is acknowledge, open the Filter tab

                console.log("ackbutton id = ", ackButton.id);
                if (ackButton.id === "15142") {
                    openTab(null, "Filter");
                }
            }

            function ackUpdate(ackResID) {
                //   var requestStr = "read?regId=" + ackResID;
                const strForm = {};
                var requestStr = "mread?";
                strForm[ackResID] = 1;
                requestStr += JSON.stringify(strForm);

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("ACK TEXT: " + this.responseText);
                        const responseJson = JSON.parse(this.responseText);
                        if (typeof responseJson === "object") {
                            document.getElementById(ackResID).innerHTML =
                                responseJson[String(ackResID)] == "0" ? "RETURNED" : "ACKNOWLEDGED";
                        } else {
                            console.log("ACK ERROR: " + this.responseText);
                        }
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            /************************
             * Tab elements updater *
             ************************/
            const senseTypeStr = {
                0: "None",
                1: "Outdoor Air Temperature sensor (OAT)",
                2: "Supply Air Temperature sensor (SAT)",
                3: "Overheat Temperature Sensor (OHT)",
                4: "Frost Protection Temperature Sensor (FPT)",
                5: "Room Air Temperature sensor (RAT)",
                6: "Extract Air Temperature sensor (EAT)",
                7: "Extra Controller Temperature sensor (ECT)",
                8: "Efficiency temperature sensor (EFT)",
            };

            const senseTypeFanStr = {
                0: "Supply air fan level",
                1: "Extract air fan level",
            };

            const dinTypeStr = {
                0: "None",
                1: "Away",
                2: "Bypass Damper (BYS)",
                3: "Vacuum Cleaner",
                4: "Cooker Hood",
                5: "Crowded",
                6: "EMT",
                7: "External Stop",
                8: "Extra Controller Alarm",
                9: "Fireplace",
                10: "Holiday",
                11: "Refresh",
                12: "RGS",
                13: "Change Over Feedback",
                14: "Fire Alarm",
                15: "Configurable DIN 1",
                16: "Configurable DIN 2",
                17: "Configurable DIN 3",
                18: "Pressure Guard",
                19: "RMF",
            };

            const ComponentTypeStrTbl = {
                // NOTE: replace magic numbers with defines
                2132: ["Rotating", "Plate"],
                3001: ["None", "Electrical", "Water", "Change-over"],
                3013: ["None", "Water", "Change-Over"],
                3014: ["None", "Preheater", "Heating", "Cooling", "GEO exchanger"],
            };

            var cfgStaSSID = "";
            var remaining_time_interval;
            let remaining_time;
            let passive_house_support;

            function updateTabValues(tabName) {
                /* Home tab */
                // Counters
                var REG_USERMODE_MANUAL_AIRFLOW_LEVEL_SAF_COUNT = 1;
                var REG_FAN_MANUAL_STOP_ALLOWED_COUNT = 1;
                var REG_FAN_REGULATION_UNIT_COUNT = 1;
                var REG_FAN_REGULATION_COUNT = 2;
                var REG_FAN_LEVEL_COUNT = 20;
                // Registers
                var REG_USERMODE_REMAIN_TIME = 1110;
                var REG_USERMODE_MANUAL_AIRFLOW_LEVEL_SAF = 1130;
                var REG_USERMODE_CURRENT = 1160;
                var REG_FAN_MANUAL_STOP_ALLOWED = 1352;
                var REG_FAN_REGULATION_UNIT = 1273;
                var REG_FAN_REGULATION_PBAND = 1270;
                var REG_FAN_LEVEL_SAF_MIN_PERCENTAGE = 1400;

                /* Airflow settings tab */
                // Counters
                var REG_TC_SP_COUNT = 1;
                var REG_UNIT_CONFIG_REHEATER_TYPE_COUNT = 1;
                var REG_ECO_COUNT = 2;
                // Registers
                var REG_TC_SP = 2000;
                var REG_UNIT_CONFIG_REHEATER_TYPE = 3001;
                var REG_CFG_HEATER_ACTUATOR_TYPE = 13020;

                var REG_ECO_T_Y1_OFFSET = 2503;

                /* Sensor reading tab temperature data regs */
                // Counters
                var REG_AI_CFG_CONNECTION_COUNT = 7;
                var REG_SENSOR_VAL_COUNT = 8;
                var REG_AI_CFG_CORRECTION_COUNT = 7;
                const REG_COUNT_1 = 1;
                const REG_COUNT_2 = 2;
                const REG_COUNT_4 = 4;
                const REG_COUNT_5 = 5;
                const REG_COUNT_6 = 6;
                const REG_COUNT_7 = 7;
                const REG_COUNT_8 = 8;
                const REG_COUNT_10 = 10;
                // Registers
                var REG_AI_CFG_CONNECTION_NTC = 11000;
                var REG_SENSOR_VAL = 12100;
                var REG_AI_CFG_CORRECTION_NTC = 11020;
                // Temperature PDM sensor
                const REG_SENSOR_PDM_EAT_CONFIGURED = 12542;
                const REG_SENSOR_PDM_EAT_VALUE = 12543;
                const REG_PDM_CORRECTION_T = 11503;

                /* Sensor reading tab air quality data regs */
                // Counters
                const REG_SENSOR_CO2S_COUNT = 6;
                const REG_SENSOR_RHS_COUNT = 6;
                const REG_SENSOR_CO2S_VAL = 12150;
                const REG_SENSOR_RHS_VAL = 12160;
                const REG_UI_CFG_CORRECTION_ANALOG = 11220;
                // AirQ PDM Sensor
                const REG_UNIT_CONFIG_RHS_PDM = 3021;
                const REG_SENSOR_RHS_PDM = 12135;
                const REG_PDM_CORRECTION_RH = 11502;

                /* Modbus registers */
                var REG_COMM_MODBUS_ADDRESS = 17000;
                var REG_COMM_MODBUS_BAUD_RATE = 17001;
                var REG_COMM_MODBUS_PARITY = 17002;
                var REG_COMM_MODBUS_STOP_BITS = 17003;

                /* Communication registers */
                var REG_SYSTEM_TERMINATION_R = 9020;

                /* Unit Backup registers */
                var REG_USER_SAFE_CONFIG_VALID = 30104;

                /* Input status tab AIN registers */
                // same as above for temperature connection type, value and correction without pdm

                /* Input status DIN registers */
                // Counters
                var REG_DI_CONNECTION_COUNT = 2;
                var REG_DI_CFG_POLARITY_COUNT = 2;
                var REG_INPUT_DIGITAL_DI_COUNT = 2;
                // Registers
                var REG_DI_CONNECTION = 11400;
                var REG_DI_CFG_POLARITY = 11420;
                var REG_INPUT_DIGITAL_DI = 12030;
                var REG_SENSOR_RPM = 12400;

                /* Input status tab UIN registers */
                // Counters
                var REG_UI_CFG_TYPE_COUNT = 6;
                var REG_UI_CONNECTION_ANALOG_COUNT = 6;
                var REG_UI_CONNECTION_DIGITAL_COUNT = 6;
                var REG_UI_CFG_POLARITY_DIGITAL_COUNT = 6;
                var REG_INPUT_DIGITAL_UI_COUNT = 6;
                // Registers
                var REG_UI_CFG_TYPE = 11100;
                var REG_UI_CONNECTION_ANALOG = 11200;
                var REG_UI_CONNECTION_DIGITAL = 11300;
                var REG_UI_CFG_POLARITY_DIGITAL = 11320;
                var REG_INPUT_DIGITAL_UI = 12020;

                /* Output status tab AOUT registers */
                // Counters
                var REG_AO_CFG_CONNECTION_COUNT = 5;
                var REG_AO_AFTER_MUX_COUNT = 5;
                var REG_DO_CFG_CONNECTION_COUNT = 5;
                var REG_DO_AFTER_MUX_COUNT = 5;
                // Registers
                const REG_AO_CFG_CONNECTION = 13000;
                const REG_AO_AFTER_MUX = 13310;
                const REG_DO_CFG_CONNECTION = 13100;
                const REG_DO_AFTER_MUX = 13300;

                /* Filter period tab registers */
                // Counters
                var REG_FILTER_PERIOD_COUNT = 1;
                var REG_FILTER_REMAINING_TIME_COUNT = 2;
                // Registers
                var REG_FILTER_PERIOD = 7000;
                var REG_FILTER_REMAINING_TIME = 7004;

                /* Alarms tab registers */
                // Active alarms counters
                var REG_OUTPUT_ALARM_COUNT = 1;
                var REG_ALARM_COUNT = 3;
                var REG_ALARM_TOTAL_COUNT = 33;
                var REG_ALARM_TS_1ST_COUNT = 12;
                var REG_ALARM_TS_2ND_COUNT = 40;
                var REG_ALARM_TS_3RD_COUNT = 12;
                var REG_ALARM_TS_4TH_COUNT = 2;
                // Active alarms registers
                var REG_OUTPUT_ALARM = 14002;
                var REG_ALARM_SAF = 15000;
                var REG_ALARM_EAF = 15007;
                var REG_ALARM_FROST_PROT = 15014;
                var REG_ALARM_DEFROSTING = 15021;
                var REG_ALARM_SAF_RPM = 15028;
                var REG_ALARM_EAF_RPM = 15035;
                var REG_ALARM_FPT = 15056;
                var REG_ALARM_OAT = 15063;
                var REG_ALARM_SAT = 15070;
                var REG_ALARM_RAT = 15077;
                var REG_ALARM_EAT = 15084;
                var REG_ALARM_ECT = 15091;
                var REG_ALARM_EFT = 15098;
                var REG_ALARM_OHT = 15105;
                var REG_ALARM_EMT = 15112;
                var REG_ALARM_RGS = 15119;
                var REG_ALARM_BYS = 15126;
                var REG_ALARM_SECONDARY_AIR = 15133;
                var REG_ALARM_FILTER = 15140;
                var REG_ALARM_EXTRA_CONTROLLER = 15147;
                var REG_ALARM_EXTERNAL_STOP = 15154;
                var REG_ALARM_RH = 15161;
                var REG_ALARM_CO2 = 15168;
                var REG_ALARM_LOW_SAT = 15175;
                var REG_ALARM_BYF = 15182;
                var REG_ALARM_MANUAL_OVERRIDE_OUTPUTS = 15500;
                var REG_ALARM_PDM_RHS = 15507;
                var REG_ALARM_PDM_EAT = 15514;
                var REG_ALARM_MANUAL_FAN_STOP = 15521;
                var REG_ALARM_OVERHEAT_TEMPERATURE = 15528;
                var REG_ALARM_FIRE_ALARM = 15535;
                var REG_ALARM_FILTER_WARNING = 15542;
                var REG_ALARM_ROTOR_MOTOR_FEEDBACK = 15563;
                // Active alarms TS parts
                let REG_ALARM_TS_1ST = 15300;
                let REG_ALARM_TS_2ND = 15316;
                let REG_ALARM_TS_3RD = 15600;
                let REG_ALARM_TS_4TH = 15616;

                // Alarms logs counters
                var REG_ALARM_LOG_COUNT = 200;
                var REG_ALARM_LOG_STATE_POS = 1;
                var REG_ALARM_TS_YEAR_POS = 3;
                var REG_ALARM_TS_MONTH_POS = 4;
                var REG_ALARM_TS_DAY_POS = 5;
                var REG_ALARM_TS_HOUR_POS = 6;
                var REG_ALARM_TS_MIN_POS = 7;
                var REG_ALARM_TS_SEC_POS = 8;
                // Alarms logs registers
                var REG_ALARM_LOG_START = 15700;

                var i;
                const strForm = {};
                let requestStr = "mread?";
                let no_payload_flag = false;

                const tabWindow = document.getElementById(tabName);

                switch (tabName) {
                    // ----------------------------------------------------------------------------------------------------------------------
                    case "Unit information":
                    case "Configuration":
                    case "Cooling Control":
                    case "User Modes":
                        {
                            // skip
                        }
                        return;
                    case "Control regulation":
                        {
                            strForm[2132] = REG_COUNT_1;
                        }
                        break;
                    case "Unit version":
                        {
                            requestStr = "unit_version";
                            no_payload_flag = true;
                        }
                        break;
                    case "Date and Time":
                        {
                            strForm[6000] = REG_COUNT_1;
                            strForm[6001] = REG_COUNT_1;
                            strForm[6002] = REG_COUNT_1;
                            strForm[6003] = REG_COUNT_1;
                            strForm[6004] = REG_COUNT_1;
                            strForm[6007] = REG_COUNT_1;
                        }
                        break;
                    case "Unit Date and Time":
                        {
                            strForm[6000] = REG_COUNT_1;
                            strForm[6001] = REG_COUNT_1;
                            strForm[6002] = REG_COUNT_1;
                            strForm[6003] = REG_COUNT_1;
                            strForm[6004] = REG_COUNT_1;
                            strForm[6006] = REG_COUNT_1;
                            strForm[6007] = REG_COUNT_1;
                        }
                        break;
                    case "System Preferences":
                        {
                            strForm[6000] = REG_COUNT_1;
                            strForm[6001] = REG_COUNT_1;
                            strForm[6002] = REG_COUNT_1;
                            strForm[6003] = REG_COUNT_1;
                            strForm[6004] = REG_COUNT_1;
                            strForm[6006] = REG_COUNT_1;
                            strForm[6007] = REG_COUNT_1;

                            strForm[8003] = REG_COUNT_1;
                        }
                        break;
                    case "Home":
                    case "backdrop":
                    case "Network settings":
                    case "Unit Country":
                    case "Filter":
                    case "Components":
                    case "Components-config":
                    case "Heat Exchanger":
                    case "Outdoor Compensation":
                    case "Outdoor Compensation Winter":
                    case "Outdoor Compensation Summer":
                    case "Pressure Sensors":
                    case "Heater":
                    case "Cooler":
                    case "Extra Controller":
                    case "Preheater setting":
                    case "Precooler setting":
                    case "Temperature Control":
                    case "SATC Split":
                    case "Cascade settings":
                    case "ECO Mode":
                    case "Moisture Transfer Control":
                    case "Cooling Recovery":
                    case "Demand Control":
                    case "CO2 Sensor":
                    case "RH Sensor":
                    case "Fan Control":
                    case "Away_mode":
                    case "Vacuum_cleaner_mode":
                    case "Cooker_hood_mode":
                    case "Crowded_mode":
                    case "Fireplace_mode":
                    case "Holiday_mode":
                    case "Refresh_mode":
                    case "Pressure_guard_mode":
                    case "Config_digital_input1_mode":
                    case "Config_digital_input2_mode":
                    case "Config_digital_input3_mode":
                    case "Modify_IO":
                    case "Airflow Levels Settings":
                        {
                            let inputs;
                            if (tabName == "Network settings") {
                                requestStr = "cfgget?";
                                document.getElementById("scanned_ssids").innerHTML = ``;
                                hide_div("hidden_connect_button");
                            }
                            if (tabName == "backdrop" || tabName == "Components") {
                                inputs = tabWindow.querySelectorAll("input, td[id]");
                            } else if (tabName == "Airflow Levels Settings") {
                                inputs = tabWindow.querySelectorAll("input");
                            } else {
                                const elemArea = tabWindow.querySelector(".container");
                                inputs = elemArea.querySelectorAll(
                                    "input, select, [id='1110'], [id='7004'], td[id], span[id]"
                                );
                            }
                            inputs.forEach((element) => {
                                if (element.id == "1110" || element.id == "7004") {
                                    strForm[element.id] = REG_COUNT_2;
                                } else if (tabName == "Network settings") {
                                    strForm[element.id] = "";
                                } else {
                                    strForm[element.id] = REG_COUNT_1;
                                }
                            });
                            switch (tabName) {
                                case "Home":
                                    {
                                        // request current header mode to Hide ECO mode if needed
                                        strForm[REG_UNIT_CONFIG_REHEATER_TYPE] = REG_COUNT_1;
                                        // request current mode reg 1160
                                        strForm[REG_USERMODE_CURRENT] = REG_COUNT_1;
                                        // request manual fan stop reg 1352
                                        strForm[REG_FAN_MANUAL_STOP_ALLOWED] = REG_COUNT_1;
                                    }
                                    break;
                                case "Demand Control":
                                    {
                                        co2_counter = 0; //reset counter
                                        rh_counter = 0; //reset counter
                                        strForm[REG_UI_CONNECTION_ANALOG] = REG_COUNT_6;
                                        strForm[11500] = REG_COUNT_1;
                                    }
                                    break;
                                case "Away_mode":
                                case "Holiday_mode":
                                case "Pressure_guard_mode":
                                case "Config_digital_input1_mode":
                                case "Config_digital_input2_mode":
                                case "Config_digital_input3_mode":
                                    {
                                        // request manual fan stop reg 1352
                                        strForm[REG_FAN_MANUAL_STOP_ALLOWED] = REG_COUNT_1;
                                    }
                                    break;
                                case "Heat Exchanger":
                                    {
                                        strForm[2260] = REG_COUNT_1;
                                    }
                                    break;
                                case "Airflow Levels Settings":
                                    {
                                        // request additional data for low/high limits calculation
                                        strForm[9001] = 1;
                                        strForm[12700] = 2;
                                        strForm[12705] = 2;
                                        strForm[12800] = 2;
                                        strForm[12805] = 2;
                                        strForm[14400] = 2;
                                        strForm[23035] = 1;
                                        strForm[23135] = 1;
                                    }
                                    break;
                                default:
                                    {
                                        // nothing to do
                                    }
                                    break;
                            }
                        }
                        break;
                    case "Free Cooling":
                        {
                            strForm[4111] = REG_COUNT_1;
                            strForm[4112] = REG_COUNT_1;
                            strForm[4100] = REG_COUNT_1;
                            strForm[4105] = REG_COUNT_1;
                            strForm[4106] = REG_COUNT_1;
                            strForm[4107] = REG_COUNT_1;
                            strForm[4108] = REG_COUNT_1;
                            strForm[4104] = REG_COUNT_1;
                            strForm[4102] = REG_COUNT_1;
                            strForm[4103] = REG_COUNT_1;
                            strForm[6007] = REG_COUNT_1;
                        }
                        break;
                    case "Sensor values":
                        {
                            strForm[REG_AI_CFG_CONNECTION_NTC] = REG_AI_CFG_CONNECTION_COUNT;
                            strForm[REG_SENSOR_PDM_EAT_CONFIGURED] = REG_COUNT_1;
                            strForm[REG_SENSOR_VAL] = REG_SENSOR_VAL_COUNT;
                            strForm[REG_SENSOR_PDM_EAT_VALUE] = REG_COUNT_1;

                            strForm[REG_UI_CFG_TYPE] = REG_UI_CFG_TYPE_COUNT;
                            strForm[REG_UI_CONNECTION_ANALOG] = REG_UI_CONNECTION_ANALOG_COUNT;
                            strForm[REG_SENSOR_RHS_PDM] = REG_COUNT_1;
                            strForm[REG_SENSOR_CO2S_VAL] = REG_SENSOR_CO2S_COUNT;
                            strForm[REG_SENSOR_RHS_VAL] = REG_SENSOR_RHS_COUNT;
                            strForm[REG_SENSOR_RPM] = REG_COUNT_2;

                            strForm[REG_UNIT_CONFIG_RHS_PDM] = REG_COUNT_1;
                        }
                        break;
                    case "Alarms":
                        {
                            console.log("updateTabValues: " + tabName);
                            strForm[REG_OUTPUT_ALARM] = REG_OUTPUT_ALARM_COUNT;
                            strForm[REG_ALARM_SAF] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_EAF] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_FROST_PROT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_DEFROSTING] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_SAF_RPM] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_EAF_RPM] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_FPT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_OAT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_SAT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_RAT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_EAT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_ECT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_EFT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_OHT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_EMT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_RGS] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_BYS] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_SECONDARY_AIR] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_FILTER] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_EXTRA_CONTROLLER] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_EXTERNAL_STOP] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_RH] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_CO2] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_LOW_SAT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_BYF] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_MANUAL_OVERRIDE_OUTPUTS] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_PDM_RHS] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_PDM_EAT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_MANUAL_FAN_STOP] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_OVERHEAT_TEMPERATURE] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_FIRE_ALARM] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_FILTER_WARNING] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_ROTOR_MOTOR_FEEDBACK] = REG_ALARM_COUNT;
                            // request TS regs
                            strForm[REG_ALARM_TS_1ST] = REG_ALARM_TS_1ST_COUNT;
                            strForm[REG_ALARM_TS_2ND] = REG_ALARM_TS_2ND_COUNT;
                            strForm[REG_ALARM_TS_3RD] = REG_ALARM_TS_3RD_COUNT;
                            strForm[REG_ALARM_TS_4TH] = REG_ALARM_TS_4TH_COUNT;
                            // request log regs
                            strForm[REG_ALARM_LOG_START] = REG_ALARM_LOG_COUNT;
                        }
                        break;
                    /* CONFIGURATION TAB */
                    case "Input":
                        {
                            console.log("updateTabValues: " + tabName);
                            /* INPUT ANALOG */
                            strForm[REG_AI_CFG_CONNECTION_NTC] = REG_COUNT_7;
                            strForm[REG_SENSOR_VAL] = REG_COUNT_8;
                            strForm[REG_AI_CFG_CORRECTION_NTC] = REG_COUNT_7;

                            /* INPUT DIGITAL */
                            strForm[REG_DI_CONNECTION] = REG_COUNT_2;
                            strForm[REG_DI_CFG_POLARITY] = REG_COUNT_2;
                            strForm[REG_INPUT_DIGITAL_DI] = REG_COUNT_2;
                            strForm[REG_SENSOR_RPM] = REG_COUNT_2;

                            /* INPUT UNIVERSAL */
                            // UDI
                            strForm[REG_UI_CFG_TYPE] = REG_COUNT_6;
                            strForm[REG_UI_CONNECTION_ANALOG] = REG_COUNT_6;
                            strForm[REG_UI_CONNECTION_DIGITAL] = REG_COUNT_6;
                            strForm[REG_UI_CFG_POLARITY_DIGITAL] = REG_COUNT_6;
                            strForm[REG_INPUT_DIGITAL_UI] = REG_COUNT_6;

                            // UAI
                            strForm[12404] = REG_COUNT_1;
                            strForm[2100] = REG_COUNT_2;
                            strForm[REG_SENSOR_RHS_PDM] = REG_COUNT_1;
                            strForm[REG_SENSOR_CO2S_VAL] = REG_COUNT_6;
                            strForm[REG_SENSOR_RHS_VAL] = REG_COUNT_6;
                            strForm[REG_UI_CFG_CORRECTION_ANALOG] = REG_COUNT_6;

                            /* PDM/I2C */
                            strForm[11501] = REG_COUNT_1;
                            strForm[REG_SENSOR_PDM_EAT_CONFIGURED] = REG_COUNT_2;
                            strForm[REG_PDM_CORRECTION_T] = REG_COUNT_1;
                            strForm[11500] = REG_COUNT_1;
                            strForm[REG_PDM_CORRECTION_RH] = REG_COUNT_1;

                            /* PRESSURE CARDS */
                            strForm[23035] = REG_COUNT_1;
                            strForm[23135] = REG_COUNT_1;
                            strForm[23038] = REG_COUNT_2;
                            strForm[23138] = REG_COUNT_2;
                            strForm[23000] = REG_COUNT_2;
                            strForm[23100] = REG_COUNT_2;
                        }
                        break;
                    case "Output":
                        {
                            console.log("updateTabValues: " + tabName);
                            /* OUTPUT CONFIG */
                            strForm[2148] = REG_COUNT_1;
                            strForm[REG_AO_CFG_CONNECTION] = REG_COUNT_5;
                            strForm[13025] = REG_COUNT_1;
                            strForm[13030] = REG_COUNT_4;
                            strForm[REG_DO_CFG_CONNECTION] = REG_COUNT_4;
                            strForm[13200] = REG_COUNT_1;
                            strForm[REG_DO_AFTER_MUX] = REG_COUNT_4;
                            strForm[REG_AO_AFTER_MUX] = REG_COUNT_5;
                            strForm[14000] = REG_COUNT_2;
                            strForm[13500] = REG_COUNT_10;
                            strForm[13600] = REG_COUNT_2;
                            strForm[13700] = REG_COUNT_10;
                            strForm[13800] = REG_COUNT_2;
                        }
                        break;
                    case "Modbus":
                        {
                            strForm[REG_COMM_MODBUS_ADDRESS] = REG_COUNT_1;
                            strForm[REG_COMM_MODBUS_BAUD_RATE] = REG_COUNT_1;
                            strForm[REG_COMM_MODBUS_PARITY] = REG_COUNT_1;
                            strForm[REG_COMM_MODBUS_STOP_BITS] = REG_COUNT_1;
                        }
                        break;
                    case "Communication":
                        {
                            strForm[REG_SYSTEM_TERMINATION_R] = REG_COUNT_1;
                        }
                        break;
                    case "Unit Backups":
                        {
                            strForm[REG_USER_SAFE_CONFIG_VALID] = REG_COUNT_1;
                            //requestStr = "iam_cfg_status?";
                        }
                        break;
                    case "Software Update":
                        {
                            requestStr = "file_ver";
                            no_payload_flag = true;
                        }
                        break;
                    case "FWs update":
                        {
                            requestStr = "fw_list";
                            no_payload_flag = true;
                        }
                        break;
                    // ----------------------------------------------------------------------------------------------------------------------
                }

                if (no_payload_flag === false) {
                    console.log(tabName + " strForm: " + JSON.stringify(strForm));
                    requestStr += JSON.stringify(strForm);
                }
                console.log(requestStr);

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);
                        if (this.responseText === "ERROR") {
                            alert("Undefined error");
                        } else if (this.responseText === "WRITE TMO") {
                            alert("Write timeout");
                        } else if (this.responseText === "READ TMO") {
                            // add READ TMO to web_m3b request handlers
                            alert("Write timeout");
                        } else if (this.responseText === "RESPONSE TMO") {
                            alert("Response timeout");
                        } else if (this.responseText === "EMPTY") {
                            alert("FS empty");
                        } else if (this.responseText == "MB DISCONNECTED") {
                            // var mb_stat = document.getElementById("idMbStat");
                            // mb_stat.innerHTML =
                            //   'Disconnected <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
                            // mb_stat.className = "red";
                            alert(this.responseText);
                        } else {
                            var sensorType, sensorTypeStr, sensorCorrection, sensorValue, tabTable;
                            var innerHTML = "";
                            var j = 0;

                            const responseJson = JSON.parse(this.responseText);

                            console.log(responseJson);

                            if (typeof responseJson === "object") {
                                switch (tabName) {
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Home":
                                    case "backdrop":
                                    case "Filter":
                                    case "Unit Country":
                                    case "Modbus":
                                    case "Communication":
                                    case "Network settings":
                                    case "Heat Exchanger":
                                    case "Heater":
                                    case "Cooler":
                                    case "Extra Controller":
                                    case "Outdoor Compensation":
                                    case "Outdoor Compensation Winter":
                                    case "Outdoor Compensation Summer":
                                    case "Pressure Sensors":
                                    case "Preheater setting":
                                    case "Precooler setting":
                                    case "Temperature Control":
                                    case "SATC Split":
                                    case "Cascade settings":
                                    case "ECO Mode":
                                    case "Moisture Transfer Control":
                                    case "Cooling Recovery":

                                    case "Demand Control":
                                    case "CO2 Sensor":
                                    case "RH Sensor":
                                    case "Fan Control":
                                    case "Away_mode":
                                    case "Vacuum_cleaner_mode":
                                    case "Cooker_hood_mode":
                                    case "Crowded_mode":
                                    case "Fireplace_mode":
                                    case "Holiday_mode":
                                    case "Refresh_mode":
                                    case "Pressure_guard_mode":
                                    case "Config_digital_input1_mode":
                                    case "Config_digital_input2_mode":
                                    case "Config_digital_input3_mode":
                                    case "Modify_IO":
                                        {
                                            for (let key in responseJson) {
                                                let int_key = parseInt(key);
                                                switch (int_key) {
                                                    case 10:
                                                        {
                                                            cfgStaSSID = responseJson[key];
                                                            if (cfgStaSSID != "") {
                                                                document.getElementById(
                                                                    "scanned_ssids"
                                                                ).innerHTML = `<div style="padding-bottom: 5px">
                                                                                            <input type="checkbox" class ="checkbox-round-unit-backups" style="cursor: default" value="${cfgStaSSID}" name="wifi" checked disabled>
                                                                                            <label>${cfgStaSSID}</label>
                                                                                           </div>
                                                                                        `;
                                                            }
                                                        }
                                                        break;
                                                    case 1111:
                                                    case 1161:
                                                    case 2260:
                                                    case 7005:
                                                    case 9000:
                                                        {
                                                            // skip
                                                        }
                                                        break;

                                                    case 8003:
                                                        {
                                                            let value = responseJson[key];
                                                            console.log("8003 value = ", value);
                                                            enable_checkbox_by_value(value.toString());
                                                        }
                                                        break;

                                                    case 3001:
                                                        {
                                                            let heater_mode = responseJson[key];
                                                            console.log("heater_mode = ", heater_mode);
                                                            change_heater_type(heater_mode);

                                                            enableOptionByValue(tabName, key, heater_mode);

                                                            if (heater_mode == 0) {
                                                                console.log("hiding eco mode placehodler");
                                                                hide_div("eco_mode_placeholder");
                                                            } else {
                                                                console.log("unhiding eco mode placehodler");
                                                                unhide_div("eco_mode_placeholder");
                                                            }
                                                        }
                                                        break;
                                                    case 2132:
                                                        {
                                                            let heater_exchanger_type = responseJson[key];
                                                            passive_house_support = responseJson[String(2260)];
                                                            console.log(
                                                                "Current heat exchanger type = ",
                                                                heater_exchanger_type
                                                            );
                                                            change_heat_exchanger_type(heater_exchanger_type);
                                                            enableOptionInDiv(
                                                                tabName,
                                                                key,
                                                                ComponentTypeStrTbl[key][heater_exchanger_type]
                                                            );
                                                        }
                                                        break;
                                                    case 3013:
                                                        {
                                                            let cooler_type = responseJson[key];
                                                            console.log("Current cooler type = ", cooler_type);
                                                            change_cooler_type(cooler_type);
                                                            enableOptionByValue(tabName, key, cooler_type);
                                                        }
                                                        break;
                                                    case 100:
                                                        {
                                                            let wifi_mode = responseJson[key];
                                                            tabWindow.querySelector(`[id="${key}"]`).value = wifi_mode;
                                                        }
                                                        break;
                                                    case 11500:
                                                        {
                                                            let Inbuilt_RH = responseJson[key];
                                                            if (Inbuilt_RH == 1) {
                                                                rh_counter++;
                                                            }
                                                        }
                                                        break;
                                                    case 11200:
                                                        {
                                                            let UAI1_type = responseJson[key];
                                                            if (UAI1_type == 2) {
                                                                co2_counter++;
                                                            } else if (UAI1_type == 1) {
                                                                rh_counter++;
                                                            }
                                                        }
                                                        break;
                                                    case 11201:
                                                        {
                                                            let UAI2_type = responseJson[key];
                                                            if (UAI2_type == 2) {
                                                                co2_counter++;
                                                            } else if (UAI2_type == 1) {
                                                                rh_counter++;
                                                            }
                                                        }
                                                        break;
                                                    case 11202:
                                                        {
                                                            let UAI3_type = responseJson[key];
                                                            if (UAI3_type == 2) {
                                                                co2_counter++;
                                                            } else if (UAI3_type == 1) {
                                                                rh_counter++;
                                                            }
                                                        }
                                                        break;
                                                    case 11203:
                                                        {
                                                            let UAI4_type = responseJson[key];
                                                            if (UAI4_type == 2) {
                                                                co2_counter++;
                                                            } else if (UAI4_type == 1) {
                                                                rh_counter++;
                                                            }
                                                        }
                                                        break;
                                                    case 11204:
                                                        {
                                                            let UAI5_type = responseJson[key];
                                                            if (UAI5_type == 2) {
                                                                co2_counter++;
                                                            } else if (UAI5_type == 1) {
                                                                rh_counter++;
                                                            }
                                                        }
                                                        break;
                                                    case 11205:
                                                        {
                                                            let UAI6_type = responseJson[key];
                                                            if (UAI6_type == 2) {
                                                                co2_counter++;
                                                            } else if (UAI6_type == 1) {
                                                                rh_counter++;
                                                            }
                                                            if (co2_counter > 0) {
                                                                document.getElementById("co2_status").innerHTML =
                                                                    "Configure sensor settings";
                                                            } else {
                                                                document.getElementById("co2_status").innerHTML =
                                                                    "Not connected";
                                                            }
                                                            if (rh_counter > 0) {
                                                                document.getElementById("rh_status").innerHTML =
                                                                    "Configure sensor settings";
                                                            } else {
                                                                document.getElementById("rh_status").innerHTML =
                                                                    "Not connected";
                                                            }
                                                        }
                                                        break;
                                                    case 1250:
                                                        {
                                                            enableOptionByValue(
                                                                "Outdoor Compensation",
                                                                key,
                                                                responseJson[key]
                                                            );
                                                        }
                                                        break;
                                                    case 1254:
                                                        {
                                                            document.getElementById(key).value = responseJson[key];
                                                        }
                                                        break;
                                                    case 12700:
                                                    case 12701:
                                                    case 12601:
                                                    case 12602:
                                                    case 12800:
                                                    case 12801:
                                                    case 12604:
                                                    case 12603:
                                                        {
                                                            document.getElementById(key).value = responseJson[key];
                                                        }
                                                        break;
                                                    case 1258:
                                                    case 1251:
                                                        {
                                                            document.getElementById(key).value = responseJson[key];
                                                        }
                                                        break;
                                                    case 4105:
                                                        {
                                                            console.log("4105: " + responseJson[key]);
                                                            freecooling_start_hr = responseJson[key];
                                                        }
                                                        break;
                                                    case 4106:
                                                        {
                                                            console.log("4106: " + responseJson[key]);
                                                            freecooling_start_min = responseJson[key];
                                                            var hours = freecooling_start_hr;
                                                            var minutes = freecooling_start_min;
                                                            // Format the time as HH:mm
                                                            var formattedTime =
                                                                (hours < 10 ? "0" : "") +
                                                                hours +
                                                                ":" +
                                                                (minutes < 10 ? "0" : "") +
                                                                minutes;
                                                            document.getElementById("freecooling_start").value =
                                                                formattedTime;
                                                        }
                                                        break;
                                                    case 4107:
                                                        {
                                                            console.log("4107: " + responseJson[key]);
                                                            freecooling_end_hr = responseJson[key];
                                                        }
                                                        break;
                                                    case 4108:
                                                        {
                                                            console.log("4108: " + responseJson[key]);
                                                            freecooling_end_min = responseJson[key];
                                                            var hours = freecooling_end_hr;
                                                            var minutes = freecooling_end_min;
                                                            // Format the time as HH:mm
                                                            var formattedTime =
                                                                (hours < 10 ? "0" : "") +
                                                                hours +
                                                                ":" +
                                                                (minutes < 10 ? "0" : "") +
                                                                minutes;
                                                            document.getElementById("freecooling_end").value =
                                                                formattedTime;
                                                        }
                                                        break;

                                                    case 15:
                                                    case 1034:
                                                    case 1043:
                                                    case 1352:
                                                    case 2133:
                                                    case 2203:
                                                    case 2262:
                                                    case 9020:
                                                        {
                                                            let selectElem = tabWindow.querySelector(`[id="${key}"]`);
                                                            if (selectElem != null) {
                                                                selectElem.value = responseJson[key];
                                                                selectElem.checked =
                                                                    selectElem.value == "1" ? true : false;
                                                            }
                                                            if (key == 1352) {
                                                                const optionsToDisable = tabWindow.querySelectorAll(
                                                                    `[data-option="optionToDisable"]`
                                                                );
                                                                optionsToDisable.forEach((option) => {
                                                                    option.disabled =
                                                                        responseJson[key] == "0" ? true : false;
                                                                });
                                                            }
                                                        }
                                                        break;
                                                    // MULTIPLIED VALUES
                                                    case 4102:
                                                    case 4103:
                                                    case 4104:
                                                    case 2000:
                                                    case 2010:
                                                    case 2020:
                                                    case 2021:
                                                    case 2040:
                                                    case 2053:
                                                    case 2112:
                                                    case 2450:
                                                    case 2200:
                                                    case 2314:
                                                    case 2315:
                                                    case 2400:
                                                    case 2403:
                                                    case 2421:
                                                    case 2422:
                                                    case 2503:
                                                    case 12100:
                                                    case 12101:
                                                    case 12102:
                                                    case 12103:
                                                    case 12104:
                                                    case 12105:
                                                    case 12106:
                                                    case 12107:
                                                    case 13030:
                                                    case 13031:
                                                    case 13700:
                                                    case 13701:
                                                    case 13702:
                                                    case 13703:
                                                    case 13704:
                                                        {
                                                            if (int_key >= 12100 && int_key <= 12107) {
                                                                tabWindow.querySelector(`[id="${key}"]`).innerText =
                                                                    responseJson[key] / 10;
                                                            } else {
                                                                tabWindow.querySelector(`[id="${key}"]`).value =
                                                                    responseJson[key] / 10;
                                                            }
                                                        }
                                                        break;
                                                    // SIGNED VALUES
                                                    case 11220: //UIN 1
                                                    case 11221: //UIN 2
                                                    case 11222: //UIN 3
                                                    case 11223: //UIN 4
                                                    case 11224: //UIN 5
                                                    case 11225: //UIN 6
                                                    case 11502: //Inbuilt RH
                                                    case 23000:
                                                    case 23001:
                                                    case 23100:
                                                    case 23101:
                                                    case 23038:
                                                    case 23039:
                                                    case 23138:
                                                    case 23139:
                                                        {
                                                            console.log("handle signed values");
                                                            let regValue = responseJson[key];
                                                            regValue = regValue > 32767 ? regValue - 65536 : regValue;
                                                            tabWindow.querySelector(`[id="${key}"]`).value = regValue;
                                                        }
                                                        break;
                                                    // MULTIPLIED SIGNED VALUES
                                                    case 2402:
                                                    case 1253:
                                                    case 1255:
                                                    case 1256:
                                                    case 1257:
                                                    case 1150:
                                                    case 2419:
                                                    case 2420:
                                                    case 11020:
                                                    case 11021:
                                                    case 11022:
                                                    case 11023:
                                                    case 11024:
                                                    case 11025:
                                                    case 11026:
                                                    case 11503:
                                                        {
                                                            let regValue = responseJson[key];
                                                            regValue = regValue > 32767 ? regValue - 65536 : regValue;
                                                            tabWindow.querySelector(`[id="${key}"]`).value =
                                                                regValue / 10;
                                                        }
                                                        break;
                                                    case 1110:
                                                        {
                                                            remaining_time =
                                                                (responseJson[String(int_key + 1)] << 16) +
                                                                responseJson[key];
                                                        }
                                                        break;
                                                    case 1160:
                                                        {
                                                            console.log(
                                                                "1110: " +
                                                                    responseJson[String(int_key + 1)] +
                                                                    " | 1111: " +
                                                                    responseJson[key + 1]
                                                            );
                                                            tabWindow.querySelector(`[id="1161"]`).value =
                                                                responseJson[key] + 1;
                                                            if (responseJson[key] >= 2 && responseJson[key] <= 6) {
                                                                if (typeof remaining_time_interval === "undefined") {
                                                                    remaining_time_interval = setInterval(
                                                                        updateRemainingTime,
                                                                        1000
                                                                    );
                                                                }
                                                            } else {
                                                                clearRemainingTime();
                                                            }
                                                        }
                                                        break;
                                                    case 1273:
                                                    case 2030:
                                                    case 3014:
                                                        {
                                                            let paramField = tabWindow.querySelector(`[id="${key}"]`);
                                                            paramField.value = responseJson[key];
                                                            if (key == 3014) {
                                                                change_extra_controller_type(paramField.value);
                                                                enableOptionInDiv(
                                                                    tabName,
                                                                    key,
                                                                    ComponentTypeStrTbl[key][paramField.value]
                                                                );
                                                            } else if (key == 2030) {
                                                                change_temperature_control_mode(paramField);
                                                            } else if (key == 1273) {
                                                                document.getElementById("9000").value =
                                                                    responseJson["9000"];
                                                                change_fan_airflow_type(paramField);
                                                            }
                                                        }
                                                        break;
                                                    case 7004:
                                                        {
                                                            console.log(
                                                                "7004: " +
                                                                    responseJson[key] +
                                                                    " | 7005: " +
                                                                    responseJson[String(int_key + 1)]
                                                            );
                                                            let remainingMonths =
                                                                (responseJson[String(int_key + 1)] << 16) +
                                                                responseJson[key];
                                                            console.log("REMAINING MON: " + remainingMonths);
                                                            remainingMonths = Math.floor(
                                                                remainingMonths / 60 / 60 / 24 / 30
                                                            );
                                                            console.log("REMAINING MONTHS: " + remainingMonths);
                                                            tabWindow.querySelector(`[id="${key}"]`).innerText =
                                                                remainingMonths;
                                                        }
                                                        break;
                                                    case 12020:
                                                    case 12021:
                                                    case 12022:
                                                    case 12023:
                                                    case 12024:
                                                    case 12025:
                                                    case 12030:
                                                    case 12031:
                                                        {
                                                            let dinPolarity;
                                                            if (int_key >= 12020 && int_key <= 12025) {
                                                                dinPolarity = responseJson[String(int_key - 700)];
                                                            } else {
                                                                dinPolarity = responseJson[String(int_key - 610)];
                                                            }
                                                            sensorValue = responseJson[key];
                                                            // invert sensor value if polarity value is 1 (normally closed)
                                                            sensorValue =
                                                                dinPolarity == 1 ? ~sensorValue & 1 : sensorValue;

                                                            let params = tabWindow.querySelectorAll(`[id="${key}"]`);
                                                            params.forEach((element) => {
                                                                element.innerText = Digital_value[sensorValue];
                                                            });
                                                        }
                                                        break;
                                                    // case 17001:
                                                    //     {
                                                    //         console.log("received 17001 response");
                                                    //         console.log(
                                                    //             "document.getElementById(key).value = responseJson[key]  = ",
                                                    //             (document.getElementById(key).value = responseJson[key])
                                                    //         );
                                                    //         document.getElementById(key).selectedIndex = responseJson[key];
                                                    //     }
                                                    //     break;
                                                    default:
                                                        {
                                                            console.log("DEF CASE KEY: " + key);
                                                            tabWindow.querySelector(`[id="${key}"]`).value =
                                                                responseJson[key];
                                                        }
                                                        break;
                                                }
                                            }
                                        }
                                        break;
                                    case "Free Cooling":
                                        {
                                            let status_checkbox = responseJson["4100"];
                                            if (status_checkbox == 1) {
                                                document.getElementById("4100").checked = true;
                                            } else {
                                                document.getElementById("4100").checked = false;
                                            }

                                            let supply_air_fan_value = responseJson["4111"];
                                            let extract_air_fan_value = responseJson["4112"];
                                            document.getElementById("4111").value = supply_air_fan_value;
                                            document.getElementById("4112").value = extract_air_fan_value;

                                            //update extract/room cancel temeprature
                                            document.getElementById("4104").value = responseJson["4104"] / 10;
                                            // update outdoor nighttime activation high limit
                                            document.getElementById("4102").value = responseJson["4102"] / 10;
                                            //update outdoor nighttime activation low limit
                                            document.getElementById("4103").value = responseJson["4103"] / 10;

                                            document.getElementById("4106").value = responseJson["4106"];
                                            document.getElementById("4108").value = responseJson["4108"];

                                            let hour_format = responseJson["6007"];
                                            let hour_start = responseJson["4105"];
                                            let minute_start = responseJson["4106"];
                                            let hour_end = responseJson["4107"];
                                            let minute_end = responseJson["4108"];

                                            let hours_start_unchanged = responseJson["4105"];
                                            let minutes_start_unchanged = responseJson["4106"];
                                            let hours_end_unchanged = responseJson["4107"];
                                            let minutes_end_unchanged = responseJson["4108"];

                                            console.log("hour format = ", hour_format);
                                            if (hour_format == 0) {
                                                document.getElementById("6007").checked = false;
                                                unhide_div("ampm-div_freecoling_start");
                                                unhide_div("ampm-div_freecoling_end");
                                                remove_time_options("4105");
                                                remove_time_options("4107");

                                                //HANDLE START TIME
                                                if (hour_start >= 12) {
                                                    document.getElementById("ampm_freecooling_start").value = 1;
                                                    //if hour is 12, we do not need to substract( 12:00 in 24 hour format is dispalyed in 12PM)
                                                    if (hour_start != 12) {
                                                        document.getElementById("4105").value = hour_start - 12;
                                                    } else {
                                                        document.getElementById("4105").value = hour_start;
                                                    }
                                                } else {
                                                    document.getElementById("ampm_freecooling_start").value = 0;
                                                    document.getElementById("4105").value = hour_start;
                                                }

                                                //HANDLE END TIME
                                                if (hour_end >= 12) {
                                                    document.getElementById("ampm_freecooling_end").value = 1;
                                                    //if hour is 12, we do not need to substract( 12:00 in 24 hour format is dispalyed in 12PM)
                                                    if (hour_end != 12) {
                                                        document.getElementById("4107").value = hour_end - 12;
                                                    } else {
                                                        document.getElementById("4107").value = hour_end;
                                                    }
                                                } else {
                                                    document.getElementById("ampm_freecooling_end").value = 0;
                                                    document.getElementById("4107").value = hour_end;
                                                }
                                            } else {
                                                document.getElementById("6007").checked = true;

                                                hide_div("ampm-div_freecoling_start");
                                                hide_div("ampm-div_freecoling_end");
                                                add_time_options("4105");
                                                add_time_options("4107");

                                                document.getElementById("4105").value = hour_start;
                                                document.getElementById("4107").value = hour_end;
                                            }

                                            var hours_start_padded = padWithZero(hours_start_unchanged);
                                            var minutes_start_padded = padWithZero(minutes_start_unchanged);
                                            var hours_end_padded = padWithZero(hours_end_unchanged);
                                            var minutes_end_padded = padWithZero(minutes_end_unchanged);

                                            document.getElementById("freecooling_time_placeholder").innerText =
                                                "Freecooling time: " +
                                                hours_start_padded +
                                                ":" +
                                                minutes_start_padded +
                                                " - " +
                                                hours_end_padded +
                                                ":" +
                                                minutes_end_padded;
                                        }
                                        break;
                                    case "Date and Time":
                                        {
                                            let year = responseJson["6000"].toString();
                                            let month = responseJson["6001"].toString();
                                            let day = responseJson["6002"].toString();
                                            let hour = responseJson["6003"];
                                            let minute = responseJson["6004"];
                                            let hour_format = responseJson["6007"];
                                            let real_hour = hour;

                                            document.getElementById("6000").value = year;
                                            document.getElementById("6001").value = month;
                                            document.getElementById("6002").value = day;
                                            document.getElementById("6004").value = minute;

                                            console.log("year = ", year);
                                            console.log("month = ", month);
                                            console.log("day = ", day);
                                            console.log("hour = ", hour);
                                            console.log("real_hour = ", real_hour);
                                            console.log("minute = ", minute);

                                            setDate(year, month, day);
                                            //workarround because HMI displays incorrect date
                                            if (hour == 0) {
                                                console.log("hour set to 12 \n");
                                                real_hour = 12;
                                            }

                                            // if 12 hour format is selected
                                            if (hour_format == 0) {
                                                unhide_div("ampm-div");
                                                remove_time_options("6003");
                                                if (real_hour >= 12) {
                                                    document.getElementById("ampm").value = 1;
                                                    //if hour is 12, we do not need to substract( 12:00 in 24 hour format is dispalyed in 12PM)
                                                    if (real_hour != 12) {
                                                        document.getElementById("6003").value = real_hour - 12;
                                                    } else {
                                                        document.getElementById("6003").value = real_hour;
                                                    }
                                                } else {
                                                    document.getElementById("ampm").value = 0;
                                                    document.getElementById("6003").value = real_hour;
                                                }
                                            } else {
                                                hide_div("ampm-div");
                                                add_time_options("6003");
                                                document.getElementById("6003").value = real_hour;
                                                //change width of 6003 and 6004
                                            }
                                        }
                                        break;
                                    case "Unit Date and Time":
                                        {
                                            let DST = responseJson["6006"];
                                            let hour_format = responseJson["6007"]; // 1 for 12-hour format, 0 for 24-hour format
                                            console.log("DST = ", DST);
                                            if (DST == 1) document.getElementById("6006").checked = true;
                                            else document.getElementById("6006").checked = false;

                                            let year = responseJson["6000"];
                                            let month = responseJson["6001"];
                                            let day = responseJson["6002"];
                                            let hour = responseJson["6003"];
                                            let minute = responseJson["6004"];

                                            if (hour == 0) {
                                                hour = 12;
                                            }

                                            var newDate = new Date(year, month - 1, day, hour, minute);

                                            var options = {
                                                day: "2-digit",
                                                month: "2-digit",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                second: "2-digit",
                                            };

                                            console.log("newDate = ", newDate);
                                            var formattedDate;

                                            if (hour_format == 1) {
                                                document.getElementById("6007").checked = true;
                                                formattedDate = newDate.toLocaleString("en-UK", options);
                                                console.log("selecting 24 Hour time format \n");
                                                options.hour12 = false;
                                                hide_div("ampm-div");
                                                add_time_options("6003");
                                            } else {
                                                document.getElementById("6007").checked = false;
                                                formattedDate = newDate.toLocaleString("en-US", options);
                                                console.log("selecting 12 Hour time format\n");
                                                options.hour12 = true;
                                                unhide_div("ampm-div");
                                                remove_time_options("6003");
                                            }

                                            console.log("formattedDate = ", formattedDate);
                                            document.getElementById("date-time-placeholder").innerHTML = formattedDate;
                                        }
                                        break;
                                    case "System Preferences":
                                        {
                                            let selected_country = responseJson["8003"];
                                            var unitCountryInputs =
                                                document.querySelectorAll('input[name="unit-country"]');
                                            unitCountryInputs.forEach(function (input) {
                                                if (parseInt(input.value) === selected_country) {
                                                    // Get the parent <td> element and then its innerHTML
                                                    var tdElement = input.parentNode.nextElementSibling;
                                                    var innerHTMLValue = tdElement.innerHTML.trim(); // Use trim() to remove any leading/trailing whitespace

                                                    // Print the innerHTML value
                                                    document.getElementById("unit-country-placeholder-pref").innerHTML =
                                                        innerHTMLValue;
                                                }
                                            });

                                            let hour_format = responseJson["6007"]; // 1 for 12-hour format, 0 for 24-hour format

                                            let year = responseJson["6000"];
                                            let month = responseJson["6001"];
                                            let day = responseJson["6002"];
                                            let hour = responseJson["6003"];
                                            let minute = responseJson["6004"];

                                            if (hour == 0) {
                                                hour = 12;
                                            }

                                            var newDate = new Date(year, month - 1, day, hour, minute);

                                            var options = {
                                                day: "2-digit",
                                                month: "2-digit",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                second: "2-digit",
                                            };

                                            console.log("newDate = ", newDate);
                                            var formattedDate;
                                            if (hour_format == 1) {
                                                document.getElementById("6007").checked = true;
                                                formattedDate = newDate.toLocaleString("en-UK", options);
                                                console.log("selecting 24 Hour time format \n");
                                                options.hour12 = false;
                                            } else {
                                                document.getElementById("6007").checked = false;
                                                formattedDate = newDate.toLocaleString("en-US", options);
                                                console.log("selecting 12 Hour time format\n");
                                                options.hour12 = true;
                                            }

                                            console.log("formattedDate = ", formattedDate);
                                            document.getElementById("unit-date-time-placeholder-pref").innerHTML =
                                                formattedDate;
                                        }
                                        break;

                                    case "Unit version":
                                        {
                                            let MB_SW_Version = responseJson["MB SW version"];
                                            let MB_HW_Version = responseJson["MB HW version"];
                                            let MB_Model = responseJson["MB Model"];
                                            let System_item_number = responseJson["System Item Number"];
                                            let System_serial_number = responseJson["System Serial Number"];
                                            let IAM_SW_Version = responseJson["IAM SW version"];
                                            console.log("MB_SW_Version = ", MB_SW_Version);
                                            console.log("MB_HW_Version = ", MB_HW_Version);
                                            console.log("MB_Model = ", MB_Model);
                                            console.log("System_item_number = ", System_item_number);
                                            console.log("System_serial_number = ", System_serial_number);
                                            console.log("IAM_SW_Version = ", IAM_SW_Version);
                                            document.getElementById("model_placeholder").innerHTML = MB_Model;
                                            document.getElementById("serial_placeholder").innerHTML =
                                                System_serial_number;
                                            document.getElementById("mb_sw_placeholder").innerHTML = MB_SW_Version;
                                            document.getElementById("iam_sw_placeholder").innerHTML = IAM_SW_Version;
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Components":
                                    case "Components-config":
                                        {
                                            for (let key in responseJson) {
                                                let idx = responseJson[key];
                                                tabWindow.querySelector(`[id="${key}"]`).innerText =
                                                    ComponentTypeStrTbl[key][idx];
                                                console.log("typeStrTbl[key][idx] = ", ComponentTypeStrTbl[key][idx]);
                                                console.log(
                                                    key +
                                                        ".innerHTML = " +
                                                        tabWindow.querySelector(`[id="${key}"]`).innerHTML
                                                );
                                            }
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Sensor values":
                                        {
                                            Clear_Sensor_values();
                                            for (i = 0; i < REG_AI_CFG_CONNECTION_COUNT; i++) {
                                                sensorType = responseJson[REG_AI_CFG_CONNECTION_NTC + i];
                                                if (sensorType != 0) {
                                                    sensorTypeStr = senseTypeStr[sensorType];
                                                    const mapTypeValueTbl = {
                                                        1: 1,
                                                        2: 2,
                                                        3: 7,
                                                        4: 0,
                                                        5: 3,
                                                        6: 4,
                                                        7: 5,
                                                        8: 6,
                                                    };

                                                    sensorValue =
                                                        responseJson[REG_SENSOR_VAL + mapTypeValueTbl[sensorType]];
                                                    sensorValue =
                                                        (sensorValue > 32767 ? sensorValue - 65536 : sensorValue) / 10;

                                                    var sensor_value = {
                                                        Value: sensorValue,
                                                        LabelStr: sensorTypeStr,
                                                        Units: "&deg;C",
                                                        Div_to_append: "Sensor_values_temperatures",
                                                    };
                                                    Append_Sensor_values_obj(sensor_value);
                                                }
                                            }

                                            sensorType = responseJson[REG_UNIT_CONFIG_RHS_PDM];
                                            if (sensorType != 0) {
                                                sensorValue = responseJson[REG_SENSOR_RHS_PDM];
                                                var sensor_value = {
                                                    Value: sensorValue,
                                                    LabelStr: "Inbuilt RH",
                                                    Units: "%",
                                                    Div_to_append: "Sensor_values_air_quality_control",
                                                };
                                                Append_Sensor_values_obj(sensor_value);
                                            }

                                            for (i = 0; i < 2; i++) {
                                                sensorValue = responseJson[REG_SENSOR_RPM + i];
                                                console.log("sensor value = ", sensorValue);
                                                var sensor_value = {
                                                    Value: sensorValue,
                                                    LabelStr: senseTypeFanStr[i],
                                                    Units: "rpm",
                                                    Div_to_append: "Sensor_values_fan_control",
                                                };
                                                Append_Sensor_values_obj(sensor_value);
                                            }

                                            if (responseJson[REG_SENSOR_PDM_EAT_CONFIGURED] != 0) {
                                                sensorTypeStr = "Inbuilt Extract Air Temperature sensor";
                                                sensorValue = responseJson[REG_SENSOR_PDM_EAT_VALUE] / 10;

                                                var sensor_value = {
                                                    Value: sensorValue,
                                                    LabelStr: sensorTypeStr,
                                                    Units: "&deg;C",
                                                    Div_to_append: "Sensor_values_temperatures",
                                                };
                                                Append_Sensor_values_obj(sensor_value);
                                            }

                                            for (i = 0; i < REG_UI_CFG_TYPE_COUNT; i++) {
                                                // Universal input type 1 (Analog input) only
                                                if (responseJson[REG_UI_CFG_TYPE + i] == 1) {
                                                    sensorType = responseJson[REG_UI_CONNECTION_ANALOG + i];
                                                    // sensorMode RH or CO2 only, bc there is no reg description for other modes
                                                    // TODO: ask sysair for explanation!!!
                                                    if (sensorType > 0 && sensorType < 3) {
                                                        const uainConStr = {
                                                            0: "None",
                                                            1: "RH sensor (RH)",
                                                            2: "CO2 sensor (CO2)",
                                                            3: "Supply Air Fan Control (SAFC)",
                                                            4: "Extract Air Fan Control (EAFC)",
                                                            5: "Bypass damper Feedback (BYF)",
                                                        };
                                                        sensorTypeStr = uainConStr[sensorType];
                                                        var startRegister =
                                                            sensorType == 1 ? REG_SENSOR_RHS_VAL : REG_SENSOR_CO2S_VAL;
                                                        sensorValue = responseJson[startRegister + i];
                                                        var units;
                                                        if (sensorTypeStr === "CO2 sensor (CO2)") {
                                                            units = "ppm";
                                                        } else {
                                                            units = "%";
                                                        }
                                                        var sensor_value_air_quality = {
                                                            Value: sensorValue,
                                                            LabelStr: sensorTypeStr,
                                                            Units: units,
                                                            Div_to_append: "Sensor_values_air_quality_control",
                                                        };
                                                        console.log(
                                                            "appending sensor_value_air_quality = ",
                                                            sensor_value_air_quality
                                                        );
                                                        Append_Sensor_values_obj(sensor_value_air_quality);
                                                    }
                                                }
                                            }
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Input status":
                                        {
                                            tabTable = document.getElementById("idAINStatus");

                                            /* Analogue input status table */
                                            for (i = 0; i < REG_AI_CFG_CONNECTION_COUNT; i++) {
                                                // console.log(REG_AI_CFG_CONNECTION_COUNT + " " + (REG_AI_CFG_CONNECTION_NTC + i) + " " + responseJson[REG_AI_CFG_CONNECTION_NTC + i]);
                                                sensorType = responseJson[REG_AI_CFG_CONNECTION_NTC + i];
                                                if (sensorType != 0) {
                                                    j++;
                                                    // console.log(responseJson[REG_AI_CFG_CORRECTION_NTC + i]);
                                                    sensorTypeStr = senseTempStr[sensorType];
                                                    sensorCorrection = responseJson[REG_AI_CFG_CORRECTION_NTC + i];
                                                    sensorValue = responseJson[REG_SENSOR_VAL + (sensorType - 1)] / 10;

                                                    innerHTML += `<th style="padding-top: 12px;">Analogue Input ${j}</th>
                                                                                       <tr>
                                                                                           <td>Type:</td>
                                                                                           <td style="text-align: right;"><b>${sensorTypeStr}</b></td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td>Sensor correction:</td>
                                                                                           <td style="text-align: right;"><b>${sensorCorrection} &deg;C</b></td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td>Value:</td>
                                                                                           <td style="text-align: right;"><b>${sensorValue} &deg;C</b></td>
                                                                                       </tr>`;
                                                }
                                            }
                                            tabTable.innerHTML = innerHTML;

                                            /* Digital input status table */
                                            tabTable = document.getElementById("idDINStatus");
                                            innerHTML = "";
                                            j = 0;

                                            for (i = 0; i < REG_DI_CONNECTION_COUNT; i++) {
                                                // console.log(REG_DI_CONNECTION_COUNT + " " + (REG_DI_CONNECTION + i) + " " + responseJson[REG_DI_CONNECTION + i]);
                                                sensorType = responseJson[REG_DI_CONNECTION + i];
                                                if (sensorType != 0) {
                                                    j++;
                                                    sensorTypeStr = dinTypeStr[sensorType];
                                                    var dinPolarity =
                                                        responseJson[REG_DI_CFG_POLARITY + i] == 0
                                                            ? "Normally Open (NO)"
                                                            : "Normally Closed (NC)";
                                                    sensorValue =
                                                        responseJson[REG_INPUT_DIGITAL_DI + i] == 1 ? "ON" : "OFF";

                                                    innerHTML += `<th style="padding-top: 12px;">Digital Input ${j}</th>
                                                                                       <tr>
                                                                                           <td>Type:</td>
                                                                                           <td style="text-align: right;"><b>${sensorTypeStr}</b></td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td>Contact function:</td>
                                                                                           <td style="text-align: right;"><b>${dinPolarity}</b></td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td>Value:</td>
                                                                                           <td style="text-align: right;"><b>${sensorValue}</b></td>
                                                                                       </tr>`;
                                                }
                                            }
                                            tabTable.innerHTML = innerHTML;

                                            /* Universal input status table */
                                            tabTable = document.getElementById("idUINStatus");
                                            innerHTML = "";
                                            j = 0;

                                            for (i = 0; i < REG_UI_CFG_TYPE_COUNT; i++) {
                                                // console.log(REG_SENSOR_CO2S_COUNT + " " + (REG_SENSOR_CO2S_VAL + i) + " " + responseJson[REG_SENSOR_CO2S_VAL + i]);
                                                var modeType = responseJson[REG_UI_CFG_TYPE + i];
                                                if (modeType != 0) {
                                                    const uinModeStr = {
                                                        0: "None",
                                                        1: "Analogue Input",
                                                        2: "Digital Input",
                                                    };
                                                    modeTypeStr = uinModeStr[modeType];
                                                    switch (modeTypeStr) {
                                                        case "None": {
                                                            console.log(
                                                                "Shouldn't get here. Mode type: " + modeTypeStr
                                                            );
                                                            return;
                                                        }
                                                        case "Analogue Input":
                                                            {
                                                                sensorType = responseJson[REG_UI_CONNECTION_ANALOG + i];
                                                                const uainConStr = {
                                                                    0: "None",
                                                                    1: "RH",
                                                                    2: "CO2",
                                                                    3: "SAFC",
                                                                    4: "EAFC",
                                                                    5: "BYF",
                                                                };
                                                                if (sensorType != 0) {
                                                                    // j++;
                                                                    sensorTypeStr = uainConStr[sensorType];
                                                                }
                                                                console.log(
                                                                    "Not sure about dependencies to show values"
                                                                );
                                                            }
                                                            break;
                                                        case "Digital Input":
                                                            {
                                                                sensorType =
                                                                    responseJson[REG_UI_CONNECTION_DIGITAL + i];
                                                                sensorTypeStr = dinTypeStr[sensorType];
                                                                if (sensorType != 0) {
                                                                    j++;
                                                                    let dinPolarity =
                                                                        responseJson[REG_UI_CFG_POLARITY_DIGITAL + i] ==
                                                                        0
                                                                            ? "Normally Open (NO)"
                                                                            : "Normally Closed (NC)";
                                                                    sensorValue =
                                                                        responseJson[REG_INPUT_DIGITAL_UI + i] == 1
                                                                            ? "ON"
                                                                            : "OFF";

                                                                    innerHTML += `<th style="padding-top: 12px;">Universal Input ${j}</th>
                                                                                                       <tr>
                                                                                                           <td>Mode:</td>
                                                                                                           <td style="text-align: right;"><b>${modeTypeStr}</b></td>
                                                                                                       </tr>
                                                                                                       <tr>
                                                                                                           <td>Type:</td>
                                                                                                           <td style="text-align: right;"><b>${sensorTypeStr}</b></td>
                                                                                                       </tr>
                                                                                                       <tr>
                                                                                                           <td>Polarity:</td>
                                                                                                           <td style="text-align: right;"><b>${dinPolarity}</b></td>
                                                                                                       </tr>
                                                                                                       <tr>
                                                                                                           <td>Value:</td>
                                                                                                           <td style="text-align: right;"><b>${sensorValue}</b></td>
                                                                                                       </tr>`;
                                                                }
                                                            }
                                                            break;
                                                        default:
                                                            {
                                                                console.log("Unknown mode type: " + modeType);
                                                            }
                                                            break;
                                                    }
                                                }
                                            }
                                            tabTable.innerHTML = innerHTML;
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Output status":
                                        {
                                            /* Analogue output status table */
                                            tabTable = document.getElementById("idAOUTStatus");

                                            for (i = 0; i < REG_AO_CFG_CONNECTION_COUNT; i++) {
                                                sensorType = responseJson[REG_AO_CFG_CONNECTION + i];
                                                if (sensorType != 0) {
                                                    const aoutTypeStr = {
                                                        0: "None",
                                                        1: "Heater",
                                                        2: "Heat Exchanger",
                                                        3: "Cooler",
                                                        4: "Extra Controller",
                                                        5: "Change Over",
                                                        6: "Temperature Setpoint",
                                                    };
                                                    j++;
                                                    sensorTypeStr = aoutTypeStr[sensorType];
                                                    sensorValue = responseJson[REG_AO_AFTER_MUX + i] / 10;
                                                    innerHTML += `<th style="padding-top: 12px;">Analogue Output ${j}</th>
                                                                                       <tr>
                                                                                           <td>Type:</td>
                                                                                           <td style="text-align: right;"><b>${sensorTypeStr}</b></td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td>Value:</td>
                                                                                           <td style="text-align: right;"><b>${sensorValue} V</b></td>
                                                                                       </tr>`;
                                                }
                                            }
                                            tabTable.innerHTML = innerHTML;

                                            /* Digital output status table */
                                            tabTable = document.getElementById("idDOUTStatus");
                                            innerHTML = "";
                                            j = 0;

                                            for (i = 0; i < REG_DO_CFG_CONNECTION_COUNT; i++) {
                                                sensorType = responseJson[REG_DO_CFG_CONNECTION + i];
                                                if (sensorType != 0) {
                                                    const doutTypeStr = {
                                                        0: "None",
                                                        1: "Step Y1 Heating",
                                                        2: "Step Y2 Exchanger",
                                                        3: "Step Y3 Cooling",
                                                        4: "Step Y4 ExtraController Alarm",
                                                        5: "Outdoor Exhaust Air Damper",
                                                        6: "Secondary Air",
                                                        7: "Activate Cooling",
                                                        8: "Interlock External Fan Control",
                                                        9: "Circulation Pump Y1 Heating",
                                                        10: "Circulation Pump Y3 Cooling",
                                                        11: "Circulation Pump Y1 Y3 Change Over",
                                                        12: "Circulation Pump Y4 Extra Controller",
                                                        13: "Unit status OK",
                                                        14: "WS unscheduled",
                                                        15: "WS scheduled",
                                                    };
                                                    j++;
                                                    sensorTypeStr = doutTypeStr[sensorType];
                                                    sensorValue =
                                                        responseJson[REG_DO_AFTER_MUX + i] == 1 ? "ON" : "OFF";
                                                    innerHTML += `<th style="padding-top: 12px;">Digital Output ${j}</th>
                                                                                       <tr>
                                                                                           <td>Type:</td>
                                                                                           <td style="text-align: right;"><b>${sensorTypeStr}</b></td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td>Value:</td>
                                                                                           <td style="text-align: right;"><b>${sensorValue}</b></td>
                                                                                       </tr>`;
                                                }
                                                tabTable.innerHTML = innerHTML;
                                            }
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Alarms":
                                        {
                                            /* Active alarms table */
                                            tabTable = document.getElementById("idAlarmActive");
                                            const alarmTypeStr = {
                                                0: "Supply air fan control",
                                                1: "Extract air fan control",
                                                2: "Frost Protection",
                                                3: "Defrosting",
                                                4: "Supply air fan RPM",
                                                5: "Extract air fan RPM",
                                                6: "Frost protection temperature sensor",
                                                7: "Outside air temperature sensor",
                                                8: "Supply air temperature sensor",
                                                9: "Room air temperature sensor",
                                                10: "Extract air temperature sensor",
                                                11: "Extra controller temperature sensor",
                                                12: "Efficiency temperature sensor",
                                                13: "Overheat temperature sensor",
                                                14: "Emergency thermostat",
                                                15: "Rotor Guard",
                                                16: "Bypass damper",
                                                17: "Secondary Air",
                                                18: "Filter",
                                                19: "Extra Controller",
                                                20: "External Stop",
                                                21: "RH sensor",
                                                22: "CO2 sensor",
                                                23: "Low supply air temperature",
                                                24: "Bypass damper feedback",
                                                25: "Manual Mode",
                                                26: "Inbuilt relative humidity sensor",
                                                27: "Inbuilt extract air temperature",
                                                28: "Manual Fan Stop",
                                                29: "Overheating",
                                                30: "Fire",
                                                31: "Filter Warning",
                                                32: "Rotor motor feedback",
                                            };
                                            let timestampReg = REG_ALARM_TS_1ST;
                                            let alarmBaseReg = REG_ALARM_SAF;
                                            let ALARM_STATUS_POS = 1;
                                            let ALARM_BTN_POS = 2;
                                            let ALARM_REG_GAP = 7;
                                            let ALARM_TS_GAP = 2;

                                            innerHTML += `<table class="sensor-values-table" style="min-width: 25%; width: 350px">`;
                                            for (i = 0; i < REG_ALARM_TOTAL_COUNT; i++) {
                                                if (
                                                    responseJson[String(alarmBaseReg + ALARM_STATUS_POS)] != 0 &&
                                                    responseJson[String(alarmBaseReg + ALARM_STATUS_POS)] != 2
                                                ) {
                                                    sensorTypeStr = alarmTypeStr[i];
                                                    let ackStatus = "UNKNOWN";
                                                    if (responseJson[String(alarmBaseReg + ALARM_STATUS_POS)] == 3) {
                                                        ackStatus = "ACKNOWLEDGED";
                                                    } else {
                                                        ackStatus =
                                                            responseJson[String(alarmBaseReg)] == 1
                                                                ? "ACTIVE"
                                                                : "RETURNED";
                                                    }
                                                    let ackBtn = alarmBaseReg + ALARM_BTN_POS;
                                                    let timestamp =
                                                        responseJson[String(timestampReg + 1)] * 65536 +
                                                        responseJson[String(timestampReg)] -
                                                        760516096;
                                                    let date = new Date(timestamp * 1000);
                                                    let alarmDate =
                                                        date.getUTCFullYear() +
                                                        "-" +
                                                        ("0" + (date.getUTCMonth() + 1)).slice(-2) +
                                                        "-" +
                                                        ("0" + date.getUTCDate()).slice(-2);

                                                    let alarmTime =
                                                        ("0" + date.getUTCHours()).slice(-2) +
                                                        ":" +
                                                        ("0" + date.getUTCMinutes()).slice(-2) +
                                                        ":" +
                                                        ("0" + date.getUTCSeconds()).slice(-2);
                                                    innerHTML += `<th colspan="2" class="top-item">${sensorTypeStr} alarm</th>
                                                                                       <tr>
                                                                                           <td class="td-left-aligned">Date:</td>
                                                                                           <td class="td-right-aligned">${alarmDate}</td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td class="td-left-aligned">Time:</td>
                                                                                           <td class="td-right-aligned">${alarmTime}</td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td class="alarm_result" style="width: 100%" id="${alarmBaseReg}">${ackStatus}</td>
                                                                                           <td><button class="systemair-button-active" id="${ackBtn}" onClick="sendAck(this)">Acknowledge</button></td>
                                                                                       </tr>`;
                                                }

                                                alarmBaseReg += ALARM_REG_GAP;
                                                if (alarmBaseReg == 15042) {
                                                    alarmBaseReg = REG_ALARM_FPT;
                                                } else if (alarmBaseReg == 15189) {
                                                    alarmBaseReg = REG_ALARM_MANUAL_OVERRIDE_OUTPUTS;
                                                } else if (alarmBaseReg == 15549) {
                                                    alarmBaseReg = REG_ALARM_ROTOR_MOTOR_FEEDBACK;
                                                }

                                                timestampReg += ALARM_TS_GAP;
                                                if (timestampReg == 15312) {
                                                    timestampReg = REG_ALARM_TS_2ND;
                                                } else if (timestampReg == 15612) {
                                                    timestampReg = REG_ALARM_TS_4TH;
                                                } else if (alarmBaseReg == 15183) {
                                                    timestampReg = 15354;
                                                } else if (alarmBaseReg == REG_ALARM_MANUAL_OVERRIDE_OUTPUTS) {
                                                    timestampReg = REG_ALARM_TS_3RD;
                                                } else if (alarmBaseReg == 15535) {
                                                    timestampReg = 15352;
                                                } else if (alarmBaseReg == 15542) {
                                                    timestampReg = 15610;
                                                }
                                            }
                                            innerHTML += `</table><br />`;
                                            tabTable.innerHTML = innerHTML;
                                            innerHTML = "";

                                            /* Alarms log table */
                                            tabTable = document.getElementById("idAlarmLog");
                                            // different order than in alarmTypeStr, but same names
                                            const logWrnTypeStr = {
                                                0: "Frost Protection",
                                                1: "Frost protection temperature sensor",
                                                2: "Defrosting",
                                                3: "Supply air fan RPM",
                                                4: "Extract air fan RPM",
                                                5: "Supply air fan control",
                                                6: "Extract air fan control",
                                                7: "Emergency thermostat",
                                                8: "Bypass damper",
                                                9: "Rotor Guard",
                                                10: "Secondary Air",
                                                11: "Outside air temperature sensor",
                                                12: "Overheat temperature",
                                                13: "Supply air temperature sensor",
                                                14: "Room air temperature sensor",
                                                15: "Extract air temperature sensor",
                                                16: "Extra controller temperature sensor",
                                                17: "Efficiency temperature sensor",
                                                18: "Inbuilt relative humidity sensor",
                                                19: "Inbuilt extract air temperature",
                                                20: "Filter",
                                                21: "Extra Controller",
                                                22: "External Stop",
                                                23: "Manual Fan Stop",
                                                24: "Overheating",
                                                25: "Low supply air temperature",
                                                26: "CO2 sensor",
                                                27: "RH sensor",
                                                28: "Manual Mode",
                                                29: "Fire",
                                                30: "Filter Warning",
                                                31: "Rotor motor feedback",
                                                32: "Bypass damper feedback",
                                            };
                                            innerHTML += `<table class="sensor-values-table" style="min-width: 25%; width: 350px">`;
                                            for (i = 0; i < REG_ALARM_LOG_COUNT / 10; i++) {
                                                alarmBaseReg = REG_ALARM_LOG_START + i * 10;
                                                sensorType = responseJson[String(alarmBaseReg)];
                                                sensorTypeStr = logWrnTypeStr[sensorType];
                                                let logDate =
                                                    "20" +
                                                    responseJson[String(alarmBaseReg + REG_ALARM_TS_YEAR_POS)] +
                                                    "-" +
                                                    (
                                                        "0" +
                                                        responseJson[String(alarmBaseReg + REG_ALARM_TS_MONTH_POS)]
                                                    ).slice(-2) +
                                                    "-" +
                                                    (
                                                        "0" + responseJson[String(alarmBaseReg + REG_ALARM_TS_DAY_POS)]
                                                    ).slice(-2);

                                                let logTime =
                                                    (
                                                        "0" + responseJson[String(alarmBaseReg + REG_ALARM_TS_HOUR_POS)]
                                                    ).slice(-2) +
                                                    ":" +
                                                    (
                                                        "0" + responseJson[String(alarmBaseReg + REG_ALARM_TS_MIN_POS)]
                                                    ).slice(-2) +
                                                    ":" +
                                                    (
                                                        "0" + responseJson[String(alarmBaseReg + REG_ALARM_TS_SEC_POS)]
                                                    ).slice(-2);

                                                const alarmLogStateStr = {
                                                    0: "Inactive",
                                                    1: "Active",
                                                    2: "Waiting",
                                                    3: "Acknowledged",
                                                };

                                                let logStatus =
                                                    alarmLogStateStr[
                                                        responseJson[String(alarmBaseReg + REG_ALARM_LOG_STATE_POS)]
                                                    ];

                                                /*
                                                let logStatus = responseJson[
                                                    String(alarmBaseReg + REG_ALARM_LOG_STATE_POS)
                                                ]
                                                    ? "Acknowledged"
                                                    : "Returned";
                                                */

                                                innerHTML += `<th colspan="2" class="top-item">${sensorTypeStr} alarm</th>
                                                                       <tr>
                                                                           <td class="td-left-aligned">Date:</td>
                                                                           <td  class="td-right-aligned">${logDate}</td>
                                                                       </tr>
                                                                       <tr>
                                                                           <td class="td-left-aligned">Time:</td>
                                                                           <td  class="td-right-aligned">${logTime}</td>
                                                                       </tr>
                                                                       <tr>
                                                                           <td class="td-left-aligned">Status:</td>
                                                                           <td  class="td-right-aligned">${logStatus}</td>
                                                                       </tr>`;
                                            }
                                            innerHTML += `</table><br />`;
                                            tabTable.innerHTML = innerHTML;
                                            document.getElementById("active_alarms").click();
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    /* CONFIGURATION TAB */
                                    case "Input":
                                        {
                                            // Clear all inputs 1st
                                            Clear_Analog_Inputs();
                                            Clear_Digital_Inputs();
                                            Clear_Universal_Inputs();

                                            console.log("updateTabValues: " + tabName);

                                            /* Analog input table */
                                            for (i = 0; i < REG_AI_CFG_CONNECTION_COUNT; i++) {
                                                // console.log(REG_AI_CFG_CONNECTION_COUNT + " " + (REG_AI_CFG_CONNECTION_NTC + i) + " " + responseJson[REG_AI_CFG_CONNECTION_NTC + i]);
                                                sensorType = responseJson[String(REG_AI_CFG_CONNECTION_NTC + i)];
                                                if (sensorType == 0) {
                                                    sensorValue = 0;
                                                } else {
                                                    sensorValue =
                                                        responseJson[String(Analog_type_to_Value_reg[sensorType])];
                                                    sensorValue =
                                                        (sensorValue > 32767 ? sensorValue - 65536 : sensorValue) / 10;
                                                }
                                                sensorCorrection = responseJson[String(REG_AI_CFG_CORRECTION_NTC + i)];
                                                sensorCorrection =
                                                    (sensorCorrection > 32767
                                                        ? sensorCorrection - 65536
                                                        : sensorCorrection) / 10;

                                                const input_args = {
                                                    Type: {
                                                        ID: REG_AI_CFG_CONNECTION_NTC + i,
                                                        Value: sensorType,
                                                    },
                                                    Value: {
                                                        ID: Analog_type_to_Value_reg[sensorType],
                                                        Value: sensorValue,
                                                    },
                                                    Correction: {
                                                        ID: REG_AI_CFG_CONNECTION_NTC + i + 20,
                                                        Value: sensorCorrection,
                                                    },
                                                    LabelStr: Analog_input_name[REG_AI_CFG_CONNECTION_NTC + i],
                                                    TypeStr: InputATypeStr[sensorType],
                                                    DivId: "a_in_" + (i + 1),
                                                };

                                                //   console.log(
                                                //     "AIN INPUT ARGS:\r\n" + JSON.stringify(input_args, null, 2)
                                                //   );
                                                Append_Analog_Input_obj(input_args);
                                            }

                                            /* Digital input table */
                                            for (i = 0; i < REG_DI_CONNECTION_COUNT; i++) {
                                                // console.log(REG_DI_CONNECTION_COUNT + " " + (REG_DI_CONNECTION + i) + " " + responseJson[REG_DI_CONNECTION + i]);
                                                sensorType = responseJson[String(REG_DI_CONNECTION + i)];
                                                var dinPolarity = responseJson[String(REG_DI_CFG_POLARITY + i)];
                                                sensorValue = responseJson[String(REG_INPUT_DIGITAL_DI + i)];
                                                // invert sensor value if polarity value is 1 (normally closed)
                                                sensorValue = dinPolarity == 1 ? ~sensorValue & 1 : sensorValue;

                                                const input_args = {
                                                    Type: { ID: REG_DI_CONNECTION + i, Value: sensorType }, // Type.ID corresponds to "Digital Input 1" or "Digital Input 2" whereas Type.Value determines input type such as "Crowded"
                                                    Value: {
                                                        ID: REG_DI_CONNECTION + i + 630,
                                                        Value: Digital_value[sensorValue],
                                                    }, // Value.ID corresponds to state of D1 register. For D1 is always 12030 and D2 is 12031
                                                    CF: {
                                                        ID: REG_DI_CONNECTION + i + 20,
                                                        Value: Contact_function_e[dinPolarity],
                                                    }, // CF.ID is always Type.ID + 20
                                                    LabelStr: Digital_input_name[REG_DI_CONNECTION + i], // convert Type.ID to string. For example: 11400 = "Digital Input 1"
                                                    TypeStr: UDI_Type[sensorType], // Convert Type.Value to string. For example 5 = "Crowded"
                                                    DivId: "d_in_" + (i + 1), // Div that is being is when the IO is expanded
                                                };

                                                //   console.log(
                                                //     "DIN INPUT ARGS:\r\n" + JSON.stringify(input_args, null, 2)
                                                //   );
                                                Append_Digital_Input_obj(input_args);
                                            }

                                            // FANS
                                            for (i = 0; i < REG_COUNT_2; i++) {
                                                sensorValue = responseJson[String(REG_SENSOR_RPM + i)];
                                                let input_args = {
                                                    Value: { ID: REG_SENSOR_RPM, Value: sensorValue },
                                                    LabelStr: Digital_feedback_label[REG_SENSOR_RPM + i],
                                                };

                                                //   console.log(
                                                //     "DIN INPUT ARGS:\r\n" + JSON.stringify(input_args, null, 2)
                                                //   );
                                                Append_Digital_Input_obj(input_args);
                                            }

                                            /* Universal input table */
                                            // UAI/UDI
                                            for (i = 0; i < REG_UI_CFG_TYPE_COUNT; i++) {
                                                // console.log(REG_SENSOR_CO2S_COUNT + " " + (REG_SENSOR_CO2S_VAL + i) + " " + responseJson[REG_SENSOR_CO2S_VAL + i]);
                                                let modeType = responseJson[String(REG_UI_CFG_TYPE + i)];
                                                let typeReg = convert_Mode_to_Type_ID(REG_UI_CFG_TYPE + i, modeType);
                                                let optionTypeReg = convert_Mode_to_Option_ID(
                                                    REG_UI_CFG_TYPE + i,
                                                    modeType
                                                );
                                                let typeValue = 0;
                                                let typeValName = 0;
                                                let optionTypeValue = 0;
                                                sensorValue = 0;
                                                let valueUnits = "";

                                                if (modeType != 0) {
                                                    typeValue = responseJson[String(typeReg)];
                                                    let sensorValReg = convert_Mode_to_Value_ID(
                                                        REG_UI_CFG_TYPE + i,
                                                        typeValue,
                                                        modeType
                                                    );
                                                    if (modeType == 1) {
                                                        const typeUnits = {
                                                            0: "",
                                                            1: "%",
                                                            2: "ppm",
                                                            3: "V",
                                                            4: "V",
                                                            5: "V",
                                                        };
                                                        typeValName = UAI_Type[typeValue];
                                                        if (typeValue > 0 && typeValue < 3) {
                                                            optionTypeValue = responseJson[String(optionTypeReg)];
                                                        }
                                                        optionTypeValue =
                                                            optionTypeValue > 32767
                                                                ? optionTypeValue - 65536
                                                                : optionTypeValue;
                                                        sensorValue = responseJson[String(sensorValReg)];
                                                        // can CO2 ppm value be negative?
                                                        sensorValue = sensorValue > 32767 ? 0 : sensorValue;
                                                        console.log("sensorValue = ", sensorValue);
                                                        valueUnits = typeUnits[typeValue];
                                                        if (typeValue >= 3) {
                                                            sensorValue = sensorValue / 10;
                                                        }
                                                    } else if (modeType == 2) {
                                                        typeValName = UDI_Type[typeValue];
                                                        let dinPolarity = responseJson[String(optionTypeReg)];
                                                        optionTypeValue = Contact_function_e[dinPolarity];
                                                        sensorValue = responseJson[String(sensorValReg)];
                                                        // invert sensor value if polarity value is 1 (normally closed)
                                                        sensorValue = dinPolarity == 1 ? ~sensorValue & 1 : sensorValue;
                                                        sensorValue = Digital_value[sensorValue];
                                                    }

                                                    const input_args = {
                                                        Mode: {
                                                            ID: REG_UI_CFG_TYPE + i,
                                                            Value: UniversalModeStr[modeType],
                                                        }, //determine if we are dealing with digital or analog input
                                                        Type: {
                                                            ID: typeReg,
                                                            Value: typeValName,
                                                        },
                                                        Option: { ID: optionTypeReg, Value: optionTypeValue },
                                                        Value: {
                                                            ID: sensorValReg,
                                                            Value: sensorValue,
                                                        },
                                                        LabelStr: "Universal Input " + (i + 1),
                                                        DivId: "u_in_" + (i + 1), // Div that is being is when the IO is expanded
                                                        Units: valueUnits,
                                                    };

                                                    Append_Universal_Input_obj(input_args);
                                                } else {
                                                    const input_args = {
                                                        Mode: {
                                                            ID: REG_UI_CFG_TYPE + i,
                                                            Value: UniversalModeStr[modeType],
                                                        }, //determine if we are dealing with digital or analog input
                                                        LabelStr: "Universal Input " + (i + 1),
                                                        DivId: "u_in_" + (i + 1), // Div that is being is when the IO is expanded
                                                    };

                                                    Append_Universal_Input_obj(input_args);
                                                }
                                            }

                                            // EAT
                                            sensorCorrection = responseJson[String(REG_PDM_CORRECTION_T)];
                                            sensorCorrection =
                                                (sensorCorrection > 32767
                                                    ? sensorCorrection - 65536
                                                    : sensorCorrection) / 10;
                                            let input_uni_EAT = {
                                                EAT_Conf: {
                                                    ID: 11501,
                                                    Value: UI_Status[responseJson[String(11501)]],
                                                },
                                                EAT_Value: {
                                                    ID: REG_SENSOR_PDM_EAT_VALUE,
                                                    Value: responseJson[String(REG_SENSOR_PDM_EAT_VALUE)] / 10,
                                                },
                                                EAT_Correction: {
                                                    ID: REG_PDM_CORRECTION_T,
                                                    Value: sensorCorrection,
                                                },
                                                LabelStr: "Inbuilt EAT sensor",
                                                DivId: "u_in_EAT", // Div that is being is when the IO is expanded
                                                Units: "&deg;C",
                                            };
                                            Append_Universal_Input_obj(input_uni_EAT);

                                            // RH
                                            sensorCorrection = responseJson[String(REG_PDM_CORRECTION_RH)];
                                            sensorCorrection =
                                                sensorCorrection > 32767 ? sensorCorrection - 65536 : sensorCorrection;
                                            let input_uni_RH = {
                                                EAT_Conf: {
                                                    ID: 11500,
                                                    Value: UI_Status[responseJson["11500"]],
                                                },
                                                EAT_Value: {
                                                    ID: REG_SENSOR_RHS_PDM,
                                                    Value: responseJson[String(REG_SENSOR_RHS_PDM)],
                                                },
                                                EAT_Correction: {
                                                    ID: REG_PDM_CORRECTION_RH,
                                                    Value: sensorCorrection,
                                                },
                                                LabelStr: "Inbuilt RH sensor",
                                                DivId: "u_in_RH", // Div that is being is when the IO is expanded
                                                Units: "%",
                                            };
                                            Append_Universal_Input_obj(input_uni_RH);

                                            // PC1/PC2
                                            let safCorrection = responseJson["23038"];
                                            safCorrection =
                                                safCorrection > 32767 ? safCorrection - 65536 : safCorrection;

                                            let eafCorrection = responseJson["23039"];
                                            eafCorrection =
                                                eafCorrection > 32767 ? eafCorrection - 65536 : eafCorrection;

                                            let safvalue = responseJson["23000"];
                                            safvalue = safvalue > 32767 ? safvalue - 65536 : safvalue;

                                            let eafvalue = responseJson["23001"];
                                            eafvalue = eafvalue > 32767 ? eafvalue - 65536 : eafvalue;

                                            let input_uni_PC1 = {
                                                Type: {
                                                    ID: 23035,
                                                    Value: Pressure_card_type[responseJson["23035"]],
                                                },
                                                SAF: {
                                                    Correction: { ID: 23038, Value: safCorrection },
                                                    Value: { ID: 23000, Value: safvalue },
                                                },
                                                EAF: {
                                                    Correction: { ID: 23039, Value: eafCorrection },
                                                    Value: { ID: 23001, Value: eafvalue },
                                                },
                                                LabelStr: "Pressure card 1",
                                                Units: "Pa",
                                            };
                                            Append_Universal_Input_obj(input_uni_PC1);

                                            safCorrection = responseJson["23138"];
                                            safCorrection =
                                                safCorrection > 32767 ? safCorrection - 65536 : safCorrection;

                                            eafCorrection = responseJson["23139"];
                                            eafCorrection =
                                                eafCorrection > 32767 ? eafCorrection - 65536 : eafCorrection;

                                            safvalue = responseJson["23100"];
                                            safvalue = safvalue > 32767 ? safvalue - 65536 : safvalue;

                                            eafvalue = responseJson["23101"];
                                            eafvalue = eafvalue > 32767 ? eafvalue - 65536 : eafvalue;

                                            let input_uni_PC2 = {
                                                Type: {
                                                    ID: 23135,
                                                    Value: Pressure_card_type[responseJson["23135"]],
                                                },
                                                SAF: {
                                                    Correction: { ID: 23138, Value: safCorrection },
                                                    Value: { ID: 23100, Value: safvalue },
                                                },
                                                EAF: {
                                                    Correction: { ID: 23139, Value: eafCorrection },
                                                    Value: { ID: 23101, Value: eafvalue },
                                                },
                                                LabelStr: "Pressure card 2",
                                                Units: "Pa",
                                            };
                                            Append_Universal_Input_obj(input_uni_PC2);
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Output":
                                        {
                                            // Clear all outputs 1st
                                            Clear_Analog_Output();
                                            Clear_Digital_Output();

                                            console.log("updateTabValues: " + tabName);
                                            let valueType = 0;
                                            let sensorValueReg = 0;

                                            /* AOUT */
                                            for (i = 0; i < REG_COUNT_5; i++) {
                                                let sensorTypeReg = REG_AO_CFG_CONNECTION + i;
                                                sensorType = responseJson[String(sensorTypeReg)];
                                                valueType = responseJson[String(sensorTypeReg + 500)];
                                                sensorValueReg =
                                                    valueType == 0 ? sensorTypeReg + 310 : sensorTypeReg + 700;
                                                const input_args = {
                                                    Type: {
                                                        ID: sensorTypeReg,
                                                        Value: OutputATypeStr[sensorType],
                                                    },
                                                    Type_Value: {
                                                        ID: sensorTypeReg + 500,
                                                        Value: OutputTypeOfValue[valueType],
                                                    },
                                                    Value: {
                                                        ID: sensorValueReg,
                                                        Value: responseJson[String(sensorValueReg)] / 10,
                                                    },
                                                    LabelStr: "Analogue Output " + (i + 1),
                                                    DivId: "a_out_" + (i + 1), // Div that is being is when the IO is expanded
                                                    Units: "V",
                                                };

                                                //   console.log(
                                                //     "AOUT ARGS:\r\n" + JSON.stringify(input_args, null, 2)
                                                //   );
                                                Append_Analog_Output_obj(input_args);
                                            }

                                            sensorType = responseJson["13200"];
                                            valueType = responseJson["13509"];
                                            sensorValueReg = valueType == 0 ? 2148 : 13709;
                                            const triac_args = {
                                                Type: { ID: 13200, Value: TriacOutputType[sensorType] },
                                                Type_Value: {
                                                    ID: 13509,
                                                    Value: OutputTypeOfValue[valueType],
                                                },
                                                Value: {
                                                    ID: sensorValueReg,
                                                    Value: responseJson[String(sensorValueReg)],
                                                },
                                                LabelStr: "Triac Output",
                                                DivId: "a_out_triac", // Div that is being is when the IO is expanded
                                                Units: "%",
                                            };

                                            // console.log(
                                            //   "TRIAC ARGS:\r\n" + JSON.stringify(triac_args, null, 2)
                                            // );
                                            Append_Analog_Output_obj(triac_args);

                                            for (i = 0; i < REG_COUNT_2; i++) {
                                                valueType = responseJson[String(13600 + i)];
                                                sensorValueReg = valueType == 0 ? 14000 + i : 13800 + i;
                                                const outputNameStr = {
                                                    0: "SAF",
                                                    1: "EAF",
                                                };
                                                const input_args = {
                                                    Type_Value: {
                                                        ID: 13600 + i,
                                                        Value: OutputTypeOfValue[valueType],
                                                    },
                                                    Value: {
                                                        ID: sensorValueReg,
                                                        Value: responseJson[String(sensorValueReg)],
                                                    },
                                                    LabelStr: outputNameStr[i] + " Output", // convert Type.ID to string. For example: 11400 = "Digital Input 1"
                                                    DivId: outputNameStr[i] + "_out", // Div that is being is when the IO is expanded
                                                    Units: "%",
                                                };

                                                //   console.log(
                                                //     outputNameStr[i] +
                                                //       " ARGS:\r\n" +
                                                //       JSON.stringify(input_args, null, 2)
                                                //   );
                                                Append_Analog_Output_obj(input_args);
                                            }

                                            /* DOUT */
                                            for (i = 0; i < REG_COUNT_4; i++) {
                                                let sensorTypeReg = REG_DO_CFG_CONNECTION + i;
                                                sensorType = responseJson[String(sensorTypeReg)];
                                                valueType = responseJson[String(sensorTypeReg + 405)];
                                                sensorValueReg =
                                                    valueType == 0 ? sensorTypeReg + 200 : sensorTypeReg + 605;
                                                sensorValue = responseJson[String(sensorValueReg)];
                                                const input_args = {
                                                    Type: {
                                                        ID: sensorTypeReg,
                                                        Value: OutputDTypeStr[sensorType],
                                                    },
                                                    Type_Value: {
                                                        ID: sensorTypeReg + 405,
                                                        Value: OutputTypeOfValue[valueType],
                                                    },
                                                    Value: {
                                                        ID: sensorValueReg,
                                                        Value: Digital_value[sensorValue],
                                                    },
                                                    LabelStr: "Digital Output " + (i + 1),
                                                    DivId: "d_out_" + (i + 1), // Div that is being is when the IO is expanded
                                                    Units: "",
                                                };

                                                //   console.log(
                                                //     "DOUT ARGS:\r\n" + JSON.stringify(input_args, null, 2)
                                                //   );
                                                Append_Digital_Output_obj(input_args);
                                            }
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Airflow Levels Settings":
                                        {
                                            // UPDATE LOW/HIGH LIMITS
                                            let saf_low_limit = 100;
                                            let saf_high_limit = 1000;
                                            let eaf_low_limit = 100;
                                            let eaf_high_limit = 1000;

                                            // check selected airflow type and calculate low/high limits
                                            let airFlowType = document.getElementById("1273").value;
                                            if (airFlowType != 0 && airFlowType != 1) {
                                                if (airFlowType == 2) {
                                                    saf_low_limit = responseJson["12700"];
                                                    saf_high_limit = responseJson["12701"];
                                                    eaf_low_limit = responseJson["12800"];
                                                    eaf_high_limit = responseJson["12801"];
                                                } else if (airFlowType == 3) {
                                                    //12706 and 12806 are negative

                                                    if (responseJson["23035"] == 0 && responseJson["23135"] == 0) {
                                                        saf_low_limit = Math.round(
                                                            responseJson["14400"] * Math.pow(responseJson["12700"], 0.5)
                                                        );
                                                        saf_high_limit = Math.round(
                                                            responseJson["14400"] *
                                                                Math.pow(
                                                                    responseJson["12701"] - responseJson["12700"],
                                                                    0.5
                                                                )
                                                        );
                                                        eaf_low_limit = Math.round(
                                                            responseJson["14401"] * Math.pow(responseJson["12800"], 0.5)
                                                        );
                                                        eaf_high_limit = Math.round(
                                                            responseJson["14401"] *
                                                                Math.pow(
                                                                    responseJson["12801"] - responseJson["12800"],
                                                                    0.5
                                                                )
                                                        );
                                                    } else {
                                                        console.log("responseJson[12706] = ", responseJson["12706"]);
                                                        console.log("responseJson[12806] = ", responseJson["12806"]);

                                                        let signed_12706 = responseJson[12706];
                                                        signed_12706 =
                                                            signed_12706 > 32767 ? signed_12706 - 65536 : signed_12706;

                                                        let signed_12705 = responseJson[12705];
                                                        signed_12705 =
                                                            signed_12705 > 32767 ? signed_12705 - 65536 : signed_12705;

                                                        let signed_12805 = responseJson[12805];
                                                        signed_12805 =
                                                            signed_12805 > 32767 ? signed_12805 - 65536 : signed_12805;

                                                        let signed_12806 = responseJson[12806];
                                                        signed_12806 =
                                                            signed_12806 > 32767 ? signed_12806 - 65536 : signed_12806;

                                                        console.log("signed_12706 = ", signed_12706);
                                                        console.log("signed_12705 = ", signed_12705);
                                                        console.log("signed_12805 = ", signed_12805);
                                                        console.log("signed_12806 = ", signed_12806);

                                                        console.log("responseJson[9001] =", responseJson["9001"]);

                                                        let saf_k_factor =
                                                            (signed_12705 / 100) * Math.pow(500, signed_12706 / 1000);
                                                        console.log("saf_k_factor test = ", saf_k_factor);
                                                        let eaf_k_factor =
                                                            (signed_12805 / 100) * Math.pow(500, signed_12806 / 1000);
                                                        console.log("eaf_k_factor test = ", eaf_k_factor);
                                                        saf_low_limit = 0;
                                                        eaf_low_limit = 0;
                                                        if (responseJson["9001"] == 0) {
                                                            saf_high_limit = Math.floor(
                                                                (saf_k_factor * Math.pow(500, 0.5)) / 3.6
                                                            );
                                                            eaf_high_limit = Math.floor(
                                                                (eaf_k_factor * Math.pow(500, 0.5)) / 3.6
                                                            );
                                                        } else if (responseJson["9001"] == 1) {
                                                            saf_high_limit = Math.floor(
                                                                saf_k_factor * Math.pow(500, 0.5)
                                                            );
                                                            eaf_high_limit = Math.floor(
                                                                eaf_k_factor * Math.pow(500, 0.5)
                                                            );
                                                        } else {
                                                            saf_high_limit = Math.floor(
                                                                (saf_k_factor * Math.pow(500, 0.5)) / 0.5886
                                                            );
                                                            eaf_high_limit = Math.floor(
                                                                (eaf_k_factor * Math.pow(500, 0.5)) / 0.5886
                                                            );
                                                        }
                                                    }
                                                }

                                                document.getElementById(
                                                    "safRangeCaption"
                                                ).innerHTML = `${saf_low_limit} - ${saf_high_limit}`;
                                                document.getElementById(
                                                    "eafRangeCaption"
                                                ).innerHTML = `${eaf_low_limit} - ${eaf_high_limit}`;

                                                console.log(
                                                    "saf_low_limit = " +
                                                        saf_low_limit +
                                                        " saf_high_limit = " +
                                                        saf_high_limit +
                                                        " eaf_low_limit = " +
                                                        eaf_low_limit +
                                                        " eaf_high_limit = " +
                                                        eaf_high_limit
                                                );
                                            }

                                            for (let key in responseJson) {
                                                if (Number(key) >= 1400 && Number(key) <= 1439) {
                                                    let element = document.getElementById(key);
                                                    if (element != null) {
                                                        element.value = responseJson[key];
                                                        if (airFlowType != 0 && airFlowType != 1) {
                                                            if (Number(key) % 2 == 0) {
                                                                element.min = saf_low_limit;
                                                                element.max = saf_high_limit;
                                                            } else {
                                                                element.min = eaf_low_limit;
                                                                element.max = eaf_high_limit;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "FWs update":
                                        {
                                            /* FWs update FWs list */
                                            constructFWUpdateList(responseJson);
                                        }
                                        break;
                                    case "Unit Backups":
                                        {
                                            console.log("responseJson = ", responseJson);
                                            var is_config_valid_value =
                                                responseJson[String(REG_USER_SAFE_CONFIG_VALID)];
                                            console.log("is_config_valid_value = ", is_config_valid_value);
                                            if (is_config_valid_value == 0) {
                                                hide_div("activate_configuration");
                                            } else if (is_config_valid_value == 1) {
                                                unhide_div("activate_configuration");
                                            }
                                            var button = document.getElementById("unit_backups_btn");
                                            button.setAttribute("hidden", "hidden");
                                        }
                                        break;
                                    case "Software Update":
                                        {
                                            console.log("Handle software update json =" + responseJson);
                                            constructFWList(responseJson);
                                        }
                                        break;
                                    case "Control regulation":
                                        {
                                            var heat_exchanger_type = responseJson[2132];
                                            if (heat_exchanger_type == "0") {
                                                unhide_div("Moisture_transfer_placeholder");
                                            } else {
                                                hide_div("Moisture_transfer_placeholder");
                                            }
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                }
                            } else {
                                // Add check if response is not JSON format
                                alert("Error: " + this.responseText);
                                console.log("NOT AN OBJECT");
                            }
                        }
                    }
                };
                xhttp.overrideMimeType("application/json");
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            /******************
             * Tab cfg setter *
             ******************/

            function configureParamValues(tabName, extraID, ID_to_discard) {
                console.log("configureParamValues");
                console.log("tabName = ", tabName);
                console.log("extraID = ", extraID);
                console.log("ID_to_discard = ", ID_to_discard);

                //check all all inputs inside the div, hidden inputs should not be detected

                //var ID_to_discard_decoded = JSON.parse(decodeURIComponent(ID_to_discard));
                //console.log("ID_to_discard = ",ID_to_discard_decoded);

                let tab = document.getElementById(tabName);
                let divs_to_hide = checkDivElementsVisibility(tab);
                //console.log("divs to hide = ", divs_to_hide);

                let inputs = tab.querySelectorAll("input, select");
                let requestStr = "mwrite?";
                let strForm = {};

                if (
                    tabName == "Network settings" ||
                    tabName == "wifi_config_result" ||
                    tabName == "wifi_mode_div" ||
                    tabName == "wifi_hotspot_config_result" ||
                    tabName == "cloud_domain_config"
                ) {
                    requestStr = "cfgset?";
                }
                for (const element of inputs) {
                    let id = element.id;
                    // skip id3 (Authentication mode) for Network settings tab as we keep it only for representation and not configuration
                    if (id != "3") {
                        let val = element.value;
                        console.log(element.type);
                        if (element.type == "checkbox" && element.hasAttribute("id") == false) {
                            // skip checkbox if it has no id
                        } else {
                            if (
                                element.type == "number" ||
                                element.type == "select-one" ||
                                element.type == "checkbox"
                            ) {
                                if (id != 10) {
                                    // *10 registers add to array below
                                    const multiplyRegVal = [
                                        2000, 2503, 2400, 2402, 2403, 2419, 2420, 2421, 2422, 2112, 2450, 2315, 2040,
                                        2053, 2021, 2020, 2010, 2200, 2314, 1150, 13700, 13701, 13702, 13703, 13704,
                                        11020, 11021, 11022, 11023, 11024, 11025, 11026, 11503, 13030, 13031, 1253,
                                        1255, 1256, 1257, 4102, 4103, 4104,
                                    ];
                                    // make integer from string
                                    val = +val;
                                    for (const element of multiplyRegVal) {
                                        if (element == id) {
                                            // if registers 11220-11225, we also ned to check type. If type is C02, need to do *10, otherwise 1:1
                                            val *= 10;
                                            console.log(id + ": value * 10 = " + val);
                                            break;
                                        }
                                    }
                                }
                            }
                            if (
                                id != 4105 &&
                                id != 4106 &&
                                id != 4107 &&
                                id != 4108 &&
                                id != 8003 &&
                                id != 6000 &&
                                id != 6001 &&
                                id != 6002 &&
                                id != 6003 &&
                                id != 6004
                            ) {
                                strForm[id] = val;
                            } else {
                                strForm[id] = Number(val);
                            }
                            // add exception for start and end time to ensure they are not sent in string format
                        }

                        if (tabName == "Date and Time") {
                            if (id == 6003) {
                                if (document.getElementById("6007").checked == true) {
                                    console.log("24 hour format is checked ");
                                } else {
                                    console.log("24 hour format is not checked");
                                    if (document.getElementById("ampm").value == 1) {
                                        console.log("PM selected");
                                        if (strForm[id] == 12) {
                                            // do nothing
                                        } else {
                                            strForm[id] = val + 12;
                                        }
                                    } else {
                                        console.log("AM selected");
                                        strForm[id] = val;
                                        if (strForm[id] == 12) {
                                            strForm[id] = val - 12;
                                        } else {
                                            strForm[id] = val;
                                        }
                                    }
                                }
                            }
                        }

                        if (tabName == "Free Cooling") {
                            if (id == 4105) {
                                if (document.getElementById("6007").checked == true) {
                                    console.log("24 hour format is checked ");
                                } else {
                                    console.log("24 hour format is not checked");
                                    if (document.getElementById("ampm_freecooling_start").value == 1) {
                                        console.log("PM selected freecooling start");
                                        if (strForm[id] == 12) {
                                            // do nothing
                                        } else {
                                            strForm[id] = val + 12;
                                        }
                                    } else {
                                        console.log("AM selected freecooling start");
                                        strForm[id] = val;
                                        if (strForm[id] == 12) {
                                            strForm[id] = val - 12;
                                        } else {
                                            strForm[id] = val;
                                        }
                                    }
                                }
                            }
                        }

                        if (tabName == "Free Cooling") {
                            if (id == 4107) {
                                if (document.getElementById("6007").checked == true) {
                                    console.log("24 hour format is checked ");
                                } else {
                                    console.log("24 hour format is not checked");
                                    if (document.getElementById("ampm_freecooling_end").value == 1) {
                                        console.log("PM selected freecooling end");
                                        if (strForm[id] == 12) {
                                            // do nothing
                                        } else {
                                            strForm[id] = val + 12;
                                        }
                                    } else {
                                        console.log("AM selected freecooling end");
                                        strForm[id] = val;
                                        if (strForm[id] == 12) {
                                            strForm[id] = val - 12;
                                        } else {
                                            strForm[id] = val;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (divs_to_hide.length > 0) {
                    for (const element of divs_to_hide) {
                        //console.log("removing div = " + element);
                        delete strForm[element];
                    }
                }

                if (extraID != null) {
                    console.log("appending extraID = ", extraID);
                    let tab_extra_value;
                    tab_extra_value = document.getElementById(extraID).value;
                    if (tab_extra_value == null) {
                        console.log("value is undefined");
                        tab_extra_value = document.getElementById(extraID).innerHTML;
                        console.log("inner html = ", tab_extra_value);
                    }
                    console.log("extra id value = ", tab_extra_value);
                    strForm[extraID] = parseInt(tab_extra_value);
                }

                if (ID_to_discard != null) {
                    if (Array.isArray(ID_to_discard)) {
                        console.log("object");
                        for (const element of ID_to_discard) {
                            delete strForm[element.id];
                        }
                    } else {
                        console.log("not object");
                        delete strForm[ID_to_discard];
                    }
                }

                if (
                    tabName == "wifi_config_result" ||
                    tabName == "wifi_hotspot_config_result" ||
                    tabName == "cloud_domain_config"
                ) {
                    strForm = encodeURIComponent(JSON.stringify(strForm));
                } else {
                    strForm = JSON.stringify(strForm);
                }

                console.log(strForm);
                requestStr += strForm;
                console.log(requestStr);
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);
                        // Handle response pop-up window ACK/NACK
                        if (this.responseText === "OK") {
                            if (tabName != "backdrop") {
                                alert("Parameters written successfully");
                            }
                            if (tabName == "Filter" || tabName == "Home" || tabName == "Modify_IO") {
                                setTimeout(updateTabValues(tabName), 2000);
                            }
                        } else if (this.responseText === "ERROR") {
                            alert("Undefined error");
                        } else if (this.responseText === "WRITE TMO") {
                            alert("Write timeout");
                        } else if (this.responseText === "RESPONSE TMO") {
                            alert("Response timeout");
                        }
                    }
                };
                xhttp.overrideMimeType("application/json");
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            /*************
             * FW update *
             *************/
            //selecting all required elements
            const dropArea = document.querySelector(".drag-area"),
                dragText = dropArea.querySelector("span"),
                input = dropArea.querySelector("input"),
                progressArea = document.querySelector(".progress-area"),
                uploadedArea = document.querySelector(".uploaded-area"),
                fwListArea = document.querySelector(".contained-area");
            var file; //this is a global variable and we'll use it inside multiple functions

            // Drag and Drop area click
            dropArea.onclick = () => {
                input.click();
            };

            input.addEventListener("change", function () {
                //getting user select file and [0] this means if user select multiple files then we'll select only the first one
                file = this.files[0];
                dropArea.classList.add("active");
                dragText.textContent = file.name;
            });

            //If user Drag File Over DropArea
            dropArea.addEventListener("dragover", (event) => {
                event.preventDefault(); //preventing from default behaviour
                dropArea.classList.add("active");
                dragText.textContent = "Release to Upload File";
            });

            //If user leave dragged File from DropArea
            dropArea.addEventListener("dragleave", () => {
                dropArea.classList.remove("active");
                dragText.textContent = "Drag & Drop to Upload File";
            });

            //If user drop File on DropArea
            dropArea.addEventListener("drop", (event) => {
                event.preventDefault(); //preventing from default behaviour
                //getting user select file and [0] this means if user select multiple files then we'll select only the first one
                file = event.dataTransfer.files[0];
                dragText.textContent = file.name;
            });

            // file upload function
            function uploadFile() {
                if (file === undefined) {
                    alert("Select a firmware file to proceed");
                    return;
                }
                let fileName = file.name;
                let fileExt = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) || undefined;
                switch (fileExt) {
                    case "bin":
                        break;
                    case "txt":
                        break;
                    default:
                        alert(
                            "Wrong file type selected or has no file extention [" +
                                fileExt +
                                "]. Supported file extentions: .bin, .txt"
                        );
                        return;
                }

                const MAX_FILE_SIZE = 4096 * 1024; // 4096 KB -> 4 MB
                let ready = false;

                if (file.length == 0) {
                    alert("File path on server is not set!");
                } else if (fileName.indexOf(" ") >= 0) {
                    alert("File name cannot have spaces!");
                } else if (fileName[fileName.length - 1] == "/") {
                    alert("File name not specified after path!");
                } else if (file.size > MAX_FILE_SIZE) {
                    alert("File is too large! File size limit: " + MAX_FILE_SIZE / 1024 + " KB");
                } else {
                    let uploadPath = "/upload/" + fileName;
                    let xhttp = new XMLHttpRequest();
                    xhttp.open("POST", uploadPath, true);
                    xhttp.upload.addEventListener("progress", ({ loaded, total }) => {
                        var fileLoaded = Math.floor((loaded / total) * 100);
                        var fileTotal = Math.floor(total / 1000);
                        var fileSize =
                            fileTotal < 1024 ? fileTotal + " KB" : (loaded / (1024 * 1024)).toFixed(2) + " MB";
                        var progressHTML = `<li class="row">
                                                                       <div class="content">
                                                                           <div class="details">
                                                                               <span class="name">${fileName} • Uploading</span>
                                                                               <span class="percent">${fileLoaded}%</span>
                                                                           </div>
                                                                           <div class="progress-bar">
                                                                               <div class="progress" style="width: ${fileLoaded}%"></div>
                                                                           </div>
                                                                       </div>
                                                                   </li>`;
                        // uploadedArea.innerHTML = ""; //uncomment this line if you don't want to show upload history
                        uploadedArea.classList.add("onprogress");
                        progressArea.innerHTML = progressHTML;
                        if (loaded == total) {
                            ready = true;
                            /* progressArea.innerHTML = ""; */
                            var uploadedHTML = `<li class="row">
                                                                           <div class="content upload">
                                                                               <div class="details">
                                                                                   <span class="name">${fileName} • Uploaded</span>
                                                                                   <span class="size">${fileSize}</span>
                                                                               </div>
                                                                           </div>
                                                                       </li>`;
                            uploadedArea.classList.remove("onprogress");
                            uploadedArea.innerHTML = uploadedHTML; //uncomment this line if you want to show upload history
                            // uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML); //uncomment this line if you don't want to show upload history
                        }
                    });
                    xhttp.onreadystatechange = function () {
                        if (xhttp.readyState == 4) {
                            if (xhttp.status == 200) {
                                console.log(xhttp.responseText);
                                console.log(xhttp);
                                if (!ready) {
                                    document.open();
                                    document.write(xhttp.responseText);
                                    document.close();
                                } else {
                                    console.log(xhttp.responseText);
                                    if (this.responseText === "EMPTY") {
                                        alert("FS empty");
                                    } else if (this.responseText === "Restarting...") {
                                        alert(this.responseText);
                                    } else {
                                        const list = JSON.parse(this.responseText);
                                        constructFWUpdateList(list);
                                    }
                                }
                            } else if (xhttp.status == 0) {
                                alert("Server closed the connection abruptly!");
                                location.reload();
                            } else {
                                alert(xhttp.status + " Error!\n" + xhttp.responseText);
                                location.reload();
                            }
                        }
                    };
                    xhttp.send(file);
                }
            }

            //todo determine if we can perform update or there is no option to do update (new firmware not present)

            function constructFWList(fwList) {
                //console.log("fwList = ", fwList);

                console.log("MB_flash versions:");
                for (const key in fwList.MB_flash) {
                    if (fwList.MB_flash.hasOwnProperty(key)) {
                        console.log(`${key}: ${fwList.MB_flash[key]}`);
                    }
                }

                // Print the versions of HMIs
                console.log("\nHMI versions:");
                fwList.HMIs.forEach((hmi) => {
                    for (const key in hmi) {
                        if (key.startsWith("HMI_") || key === "MB_file ver") {
                            console.log(`${key}: ${hmi[key]}`);
                        }
                    }
                });

                // Print the versions of IAM_flash
                console.log("\nIAM_flash versions:");
                for (const key in fwList.IAM_flash) {
                    if (fwList.IAM_flash.hasOwnProperty(key)) {
                        console.log(`${key}: ${fwList.IAM_flash[key]}`);
                    }
                }
                //MB VERSIONS
                let MB_Flash_mb_file_ver = fwList.MB_flash["MB_file ver"];
                let MB_Flash_hmi_file_ver = fwList.MB_flash["HMI_file ver"];
                let MB_Flash_res_file_ver = fwList.MB_flash["HMI_resources_file ver"];
                console.log("MB_Flash_mb_file_ver = ", MB_Flash_mb_file_ver);
                console.log("MB_Flash_hmi_file_ver = ", MB_Flash_hmi_file_ver);
                console.log("MB_Flash_res_file_ver = ", MB_Flash_res_file_ver);

                //IAM VERSIONS
                let IAM_Flash_mb_file_ver = fwList.IAM_flash["MB_file ver"];
                let IAM_Flash_hmi_file_ver = fwList.IAM_flash["HMI_file ver"];
                let IAM_Flash_res_file_ver = fwList.IAM_flash["HMI_resources_file ver"];
                console.log("IAM_Flash_mb_file_ver = ", IAM_Flash_mb_file_ver);
                console.log("IAM_Flash_hmi_file_ver = ", IAM_Flash_hmi_file_ver);
                console.log("IAM_Flash_res_file_ver = ", IAM_Flash_res_file_ver);

                //HMI VERSIONS
                let HMI_Flash_mb_file_ver = fwList.HMIs.map((hmi) => hmi["MB_file ver"]);
                let HMI_Flash_hmi_file_ver = fwList.HMIs.map((hmi) => hmi["HMI_file ver"]);
                let HMI_Flash_res_file_ver = fwList.HMIs.map((hmi) => hmi["HMI_resources_file ver"]);
                console.log("HMI_Flash_mb_file_ver = ", HMI_Flash_mb_file_ver);
                console.log("HMI_Flash_hmi_file_ver = ", HMI_Flash_hmi_file_ver);
                console.log("HMI_Flash_res_file_ver = ", HMI_Flash_res_file_ver);

                let fwListTbl = `<table class="software-update-table">
                                                           <th></th>
                                                           <th>MB</th>
                                                           <th>HMI</th>
                                                           <th>RES</th>
                                                           `;
                fwList["HMIs"].forEach((element) => {
                    fwListTbl += `<tr>
                                                           <td>HMI${element["number"]}</td>
                                                           <td class="item-bold">${element["MB_file ver"]}</td>
                                                           <td class="item-bold">${element["HMI_file ver"]}</td>
                                                           <td class="item-bold">${element["HMI_resources_file ver"]}</td>
                                                       </tr>`;
                });

                fwListTbl += `<tr>
                                                       <td>MB</td>
                                                       <td class="item-bold">${fwList["MB_flash"]["MB_file ver"]}</td>
                                                       <td class="item-bold">${fwList["MB_flash"]["HMI_file ver"]}</td>
                                                       <td class="item-bold">${fwList["MB_flash"]["HMI_resources_file ver"]}</td>
                                                   </tr>`;

                fwListTbl += `<tr>
                                                       <td>IAM</td>
                                                       <td class="item-bold">${fwList["IAM_flash"]["MB_file ver"]}</td>
                                                       <td class="item-bold">${fwList["IAM_flash"]["HMI_file ver"]}</td>
                                                       <td class="item-bold">${fwList["IAM_flash"]["HMI_resources_file ver"]}</td>
                                                   </tr>`;

                fwListTbl += `</table>`;

                fwListTbl += `


                <div id = "start_update_placeholder" style="max-width: 400px">
                    <button
                        class="unit-version-button"
                        id = "20015"
                        onclick="start_update()"
                    >
                        Start Update
                    </button>
                </div>

                            <div class="backdrop" id="popup_update"></div>`;

                document.getElementById("fwList").innerHTML = fwListTbl;

                let update_status = fwList["Start_update"];
                console.log("update_status = ", update_status);
                if (update_status == "true") {
                    console.log("update status true");
                    unhide_div("start_update_placeholder");
                } else {
                    console.log("update status false");
                    hide_div("start_update_placeholder");
                }
            }

            function constructFWUpdateList(fwList) {
                let fwListAreaHTML = "";
                for (let i in fwList) {
                    fwListAreaHTML += `<li class="row">
                                                        <span class="name">${fwList[i]}</span>
                                                        <button class="action" onclick="openTab(event, 'Software Update'); document.getElementById('fwList').innerHTML = 'Scanning...'">Update</button>
                                                    </li>`;
                }
                fwListArea.innerHTML = fwListAreaHTML;
            }

            var timeInterval, tmoCnt;

            function initiateFWUpdate(fwString) {
                var targetList = ["IAM", "Mainboard", "HMI"];
                var result, targetString;
                for (let i in targetList) {
                    result = fwString.indexOf(targetList[i]);
                    if (result != -1) {
                        targetString = targetList[i];
                        break;
                    }
                }
                if (result == -1) {
                    alert("Smth went wrong");
                    return;
                }
                var postString = "/update/" + fwString;
                console.log(postString);
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);
                        if (this.responseText == "MB disconnected" || this.responseText == "Update scheduled") {
                            // var mb_stat = document.getElementById("idMbStat");
                            // mb_stat.innerHTML =
                            //   'Disconnected <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
                            // mb_stat.className = "red";
                            alert(this.responseText);
                            return;
                        }
                        // restrict interactions with page
                        document.getElementById("overlay").style.visibility = "visible";
                        [].map.call(document.getElementsByClassName("main"), function (elem) {
                            elem.addEventListener(
                                "keydown",
                                function (e) {
                                    if (e.keyCode != 9) {
                                        // allow tab key to escape out
                                        e.returnValue = false;
                                        return false;
                                    }
                                },
                                true
                            );
                        });
                        console.log("INPUT: " + targetString);
                        if (targetString == "IAM") {
                            tmoCnt = 15;
                            updateCountdown();
                            timeInterval = setInterval(updateCountdown, 1000);
                        } else {
                            tmoCnt = 0;
                            // run update status check
                            timeInterval = setInterval(updateStatus, 1000);
                        }
                    } else {
                        console.log("STATUS: " + this.status);
                    }
                };
                xhttp.open("POST", postString, true);
                xhttp.send();
            }

            var days, hours, mins, secs;

            function updateCountdown() {
                console.log(tmoCnt);
                console.log(document.getElementById("modal"));
                mins = Math.floor(tmoCnt / 60);
                secs = Math.floor(tmoCnt % 60);
                document.getElementById("modal").innerText = ("0" + mins).slice(-2) + ":" + ("0" + secs).slice(-2);
                tmoCnt--;
                if (tmoCnt < 0) {
                    clearInterval(timeInterval);
                    location.reload(true);
                }
            }

            function updateStatus() {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);
                        if (this.responseText == "IDLE") {
                            clearInterval(timeInterval);
                            location.reload(true);
                        } else if (this.responseText == "IN PROGRESS") {
                            mins = Math.floor(tmoCnt / 60);
                            secs = Math.floor(tmoCnt % 60);
                            document.getElementById("modal").innerText =
                                ("0" + mins).slice(-2) + ":" + ("0" + secs).slice(-2);
                            tmoCnt++;
                        }
                    }
                };
                xhttp.open("GET", "/upd_status", true);
                xhttp.send();
            }

            function updateRemainingTime() {
                days = Math.floor(remaining_time / 60 / 60 / 24);
                hours = Math.floor((remaining_time / 60 / 60) % 24);
                mins = Math.floor((remaining_time / 60) % 60);
                secs = Math.floor(remaining_time % 60);

                if (days >= 1) {
                    document.getElementById("1110").innerText =
                        days +
                        "d " +
                        ("0" + hours).slice(-2) +
                        ":" +
                        ("0" + mins).slice(-2) +
                        ":" +
                        ("0" + secs).slice(-2);
                } else {
                    document.getElementById("1110").innerText =
                        ("0" + hours).slice(-2) + ":" + ("0" + mins).slice(-2) + ":" + ("0" + secs).slice(-2);
                }
                remaining_time--;
                if (remaining_time < 0) {
                    clearRemainingTime();
                }
            }

            function clearRemainingTime() {
                clearInterval(remaining_time_interval);
                remaining_time_interval = undefined;
                document.getElementById("1110").innerText = "";
            }

            function scanWiFi_new(btnSpinner) {
                console.log("scan wifi new ");
                var getString = "/scan";
                console.log(getString);
                btnSpinner.classList.toggle("button--loading");
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            console.log(this.responseText);
                            if (this.responseText === "ERR") {
                                alert("Failed to scan wifi");
                                return;
                            }

                            var innerHTML = ``;
                            const responseJson = JSON.parse(this.responseText);
                            if (typeof responseJson === "object") {
                                var ssidList = responseJson["10"];
                                ssidList.forEach((element) => {
                                    if (cfgStaSSID != "" && element == cfgStaSSID) {
                                        console.log(cfgStaSSID + " | " + element);
                                        innerHTML += `<div style="padding-bottom: 5px">
                                                                    <input type="checkbox" class="checkbox-round-unit-backups" value="${element}" name="wifi" onclick="onlyOne(this)" checked/>
                                                                    <label>${element}</label>
                                                                  </div>
                                                                `;
                                    } else {
                                        innerHTML += `<div style="padding-bottom: 5px">
                                                                    <input type="checkbox" class="checkbox-round-unit-backups" value="${element}" name="wifi" onclick="onlyOne(this)"/>
                                                                    <label>${element}</label>
                                                                  </div>
                                                                `;
                                    }
                                });
                            }
                            document.getElementById("scanned_ssids").innerHTML = innerHTML;
                        } else {
                            console.log("STATUS: " + this.status + "| STATE: " + this.readyState);
                        }
                        btnSpinner.classList.toggle("button--loading");
                    } else {
                        console.log("STATUS: " + this.status + "| STATE: " + this.readyState);
                    }
                };
                xhttp.open("GET", getString, true);
                xhttp.send();
            }

            // lukas test
            function user_mode_popup_construct(sel) {
                console.log(sel);
                if (parseInt(sel.value) >= 3 && parseInt(sel.value) <= 7) {
                    console.log("CHECK PASS");
                    const mode_map = {
                        Holiday: {
                            ID: 1100,
                            units: "d",
                            limits: { min: "1", max: "365", def: "1" },
                            step: 1,
                        },
                        Away: {
                            ID: 1101,
                            units: "h",
                            limits: { min: "1", max: "72", def: "1" },
                            step: 1,
                        },
                        Fireplace: {
                            ID: 1102,
                            units: "min",
                            limits: { min: "1", max: "60", def: "1" },
                            step: 1,
                        },
                        Refresh: {
                            ID: 1103,
                            units: "min",
                            limits: { min: "1", max: "240", def: "1" },
                            step: 1,
                        },
                        Crowded: {
                            ID: 1104,
                            units: "h",
                            limits: { min: "1", max: "8", def: "1" },
                            step: 1,
                        },
                    };
                    var user_mode_popup = document.getElementById("backdrop");
                    var mode_name = sel.options[sel.selectedIndex].text;
                    user_mode_popup.style.display = "flex";
                    user_mode_popup.innerHTML = `
                                   <div class="popdiv">
                                   <table class="popup-table">
                                       <tr>
                                       <th colspan="3" class="popup-header">${mode_name}</th>
                                       </tr>
                                       <tr>
                                       <td class="popup-input-text">Activate for</td>
                                       <td class="popup-input-number">
                                           <button
                                           style="border:none; background: none; color: #004985"
                                           onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                           >
                                           <svg
                                               xmlns="http://www.w3.org/2000/svg"
                                               width="24"
                                               height="24"
                                               viewBox="0 0 24 24"
                                               fill="none"
                                               stroke="currentColor"
                                               stroke-width="2"
                                               stroke-linecap="round"
                                               stroke-linejoin="round"
                                               class="feather feather-chevron-up"
                                           >
                                               <polyline points="18 15 12 9 6 15"></polyline>
                                           </svg>
                                           </button>
                                           <br />
                                           <input
                                               id="${mode_map[mode_name].ID}"
                                               type="number"
                                               style="
                                                   border: none;
                                                   color: #037bc7 !important;
                                                   text-align: center;
                                                   padding-left:0px !important;
                                                   text-decoration: underline;
                                                   max-width: 40px;
                                                   color: #004985;
                                               "
                                               min="${mode_map[mode_name].limits.min}"
                                               max="${mode_map[mode_name].limits.max}"
                                               step="${mode_map[mode_name].step}"
                                               value="${mode_map[mode_name].limits.def}"
                                               onblur="imposeMinMax(this)"
                                           />
                                           <span class="popup">
                                               <h class="popup-input-text">${mode_map[mode_name].units}</h>
                                               <span class="popuptext"></span>
                                           </span>
                                           <br />

                                                       <button
                                                       style="border: none; background: none; color: #004985"
                                                       onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                       >
                                                       <svg
                                                           xmlns="http://www.w3.org/2000/svg"
                                                           width="24"
                                                           height="24"
                                                           viewBox="0 0 24 24"
                                                           fill="none"
                                                           stroke="currentColor"
                                                           stroke-width="2"
                                                           stroke-linecap="round"
                                                           stroke-linejoin="round"
                                                           class="feather feather-chevron-down"
                                                       >
                                                           <polyline points="6 9 12 15 18 9"></polyline>
                                                       </svg>
                                                       </button>
                                                   </td>
                                                   </tr>

                                                   <tr>
                                                   <td>
                                                       <button
                                                       class="popup-button-cancel"
                                                       onclick="user_mode_popup_cancel('backdrop')"
                                                       >
                                                       Cancel
                                                       </button>
                                                   </td>
                                                   <td>
                                                       <button
                                                       class="popup-button-ok"
                                                       onclick="user_mode_popup_configure('backdrop')"
                                                       >
                                                       OK
                                                       </button>
                                                   </td>
                                                   </tr>
                                               </table>
                                               </div>
                                           `;
                    updateTabValues("backdrop");
                }
            }

            function reveal_hidden_menu_user_modes(sel, user_mode) {
                console.log("mode = ", user_mode);

                if (user_mode == "away") {
                    console.log("away mode selected");
                    document.getElementById("backdrop_name_away").textContent = "Away";
                    document.getElementById("backdrop_away_mode").style.display = "flex";
                    document.getElementById("fake_away").value = sel.value;
                }

                if (user_mode == "crowded") {
                    console.log("crowded mode selected");
                    document.getElementById("backdrop_name_crowded").textContent = "Crowded";
                    document.getElementById("backdrop_crowded_mode").style.display = "flex";
                    document.getElementById("fake_crowded").value = sel.value;
                }

                if (user_mode == "fireplace") {
                    console.log("fireplace mode selected");
                    document.getElementById("backdrop_name_fireplace").textContent = "Fireplace";
                    document.getElementById("backdrop_fireplace_mode").style.display = "flex";
                    document.getElementById("fake_fireplace").value = sel.value;
                }

                if (user_mode == "holiday") {
                    console.log("holiday mode selected");
                    document.getElementById("backdrop_name_holiday").textContent = "Holiday";
                    document.getElementById("backdrop_holiday_mode").style.display = "flex";
                    document.getElementById("fake_holiday").value = sel.value;
                }

                if (user_mode == "refresh") {
                    console.log("refresh mode selected");
                    document.getElementById("backdrop_name_refresh").textContent = "Refresh";
                    document.getElementById("backdrop_refresh_mode").style.display = "flex";
                    document.getElementById("fake_refresh").value = sel.value;
                }

                if (user_mode == "dig_in1") {
                    console.log("dig_in1 mode selected");
                    document.getElementById("backdrop_name_dig_in1").textContent = "Config. digital input 1";
                    document.getElementById("backdrop_dig_in1_mode").style.display = "flex";
                    document.getElementById("fake_din1").value = sel.value;
                }

                if (user_mode == "dig_in2") {
                    console.log("dig_in2 mode selected");
                    document.getElementById("backdrop_name_dig_in2").textContent = "Config. digital input 2";
                    document.getElementById("backdrop_dig_in2_mode").style.display = "flex";
                    document.getElementById("fake_din2").value = sel.value;
                }

                if (user_mode == "dig_in3") {
                    console.log("dig_in3 mode selected");
                    document.getElementById("backdrop_name_dig_in3").textContent = "Config digital input 3";
                    document.getElementById("backdrop_dig_in3_mode").style.display = "flex";
                    document.getElementById("fake_din3").value = sel.value;
                }
            }

            /**
             *
             * This function is called when hidden menu ok is clicked
             */
            //  backdrop_user_mode
            // backdrop
            function hidden_menu_ok(select) {
                var away_mode = select.localeCompare("backdrop_away_mode");
                var crowded = select.localeCompare("backdrop_crowded_mode");
                var fireplace_mode = select.localeCompare("backdrop_fireplace_mode");
                var holiday_mode = select.localeCompare("backdrop_holiday_mode");
                var refresh_mode = select.localeCompare("backdrop_refresh_mode");

                var dig_in1_mode = select.localeCompare("backdrop_dig_in1_mode");
                var dig_in2_mode = select.localeCompare("backdrop_dig_in2_mode");
                var dig_in3_mode = select.localeCompare("backdrop_dig_in3_mode");
                var home = select.localeCompare("backdrop");

                //var select = document.getElementById("1161");
                //var mode_selected = select.options[select.selectedIndex].text;
                //var id = select.options[select.selectedIndex].id;

                if (away_mode == 0) {
                    console.log("hide away menu");
                    var away_element = document.getElementById("1181");
                    var away_element_value = away_element.value;
                    console.log("away_element = ", away_element);
                    console.log("away_element_value = ", away_element_value);
                    document.getElementById("backdrop_away_mode").style.display = "none";
                    document.getElementById("away_placeholder").value = away_element_value;
                }
                if (crowded == 0) {
                    var crowded_element = document.getElementById("1184");
                    var crowded_element_value = crowded_element.value;
                    console.log("crowded_element = ", crowded_element);
                    console.log("crowded_element_value = ", crowded_element_value);
                    console.log("hide crowded menu");
                    document.getElementById("backdrop_crowded_mode").style.display = "none";
                    document.getElementById("crowded_placeholder").value = crowded_element_value;
                }
                if (fireplace_mode == 0) {
                    var fireplace_element = document.getElementById("1182");
                    var fireplace_element_value = fireplace_element.value;
                    console.log("fireplace_element = ", fireplace_element);
                    console.log("fireplace_element_value = ", fireplace_element_value);
                    console.log("hide fireplace menu");
                    document.getElementById("backdrop_fireplace_mode").style.display = "none";
                    document.getElementById("fireplace_placeholder").value = fireplace_element_value;
                }
                if (holiday_mode == 0) {
                    var holiday_element = document.getElementById("1180");
                    var holiday_element_value = holiday_element.value;
                    console.log("holiday_element = ", holiday_element);
                    console.log("holiday_element_value = ", holiday_element_value);
                    console.log("hide holiday menu");
                    document.getElementById("backdrop_holiday_mode").style.display = "none";
                    document.getElementById("holiday_placeholder").value = holiday_element_value;
                }
                if (refresh_mode == 0) {
                    var refresh_element = document.getElementById("1183");
                    var refresh_element_value = refresh_element.value;
                    console.log("refresh_element = ", refresh_element);
                    console.log("refresh_element_value = ", refresh_element_value);
                    console.log("hide refresh menu");
                    document.getElementById("backdrop_refresh_mode").style.display = "none";
                    document.getElementById("refresh_placeholder").value = refresh_element_value;
                }
                if (dig_in1_mode == 0) {
                    var dig_in1_element = document.getElementById("1187");
                    var dig_in1_element_value = dig_in1_element.value;
                    console.log("dig_in1_element = ", dig_in1_element);
                    console.log("dig_in1_element_value = ", dig_in1_element_value);
                    console.log("hide dig_in1 menu");
                    document.getElementById("backdrop_dig_in1_mode").style.display = "none";
                    document.getElementById("dig_in1_placeholder").value = dig_in1_element_value;
                }
                if (dig_in2_mode == 0) {
                    var dig_in2_element = document.getElementById("1188");
                    var dig_in2_element_value = dig_in2_element.value;
                    console.log("dig_in2_element = ", dig_in2_element);
                    console.log("dig_in2_element_value = ", dig_in2_element_value);
                    console.log("hide dig_in2 menu");
                    document.getElementById("backdrop_dig_in2_mode").style.display = "none";
                    document.getElementById("dig_in2_placeholder").value = dig_in2_element_value;
                }
                if (dig_in3_mode == 0) {
                    var dig_in3_element = document.getElementById("1189");
                    var dig_in3_element_value = dig_in2_element.value;
                    console.log("dig_in3_element = ", dig_in3_element);
                    console.log("dig_in3_element_value = ", dig_in3_element_value);
                    console.log("hide dig_in3 menu");
                    document.getElementById("backdrop_dig_in3_mode").style.display = "none";
                    document.getElementById("dig_in3_placeholder").value = dig_in3_element_value;
                }

                if (home == 0) {
                    document.getElementById("backdrop").style.display = "none";
                    const strForm = {};
                    var requestStr = "mwrite?";
                    strForm[id] = document.getElementById("1110").value;
                    requestStr += JSON.stringify(strForm);
                    console.log(requestStr);
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            if (this.responseText == "MB DISCONNECTED") {
                                // var mb_stat = document.getElementById("idMbStat");
                                // mb_stat.innerHTML = 'Disconnected <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
                                // mb_stat.className = "red";
                                alert(this.responseText);
                            } else {
                                // valInput.value = this.responseText;
                                console.log(this.responseText);
                            }
                        }
                    };
                    xhttp.open("GET", requestStr, true);
                    xhttp.send();
                }
            }

            function hidden_menu_ok_value_override(select) {
                switch (select) {
                    case "backdrop_away_mode":
                        {
                            document.getElementById("1181").value = document.getElementById("fake_away").value;
                        }
                        break;
                    case "backdrop_crowded_mode":
                        {
                            document.getElementById("1184").value = document.getElementById("fake_crowded").value;
                        }
                        break;
                    case "backdrop_fireplace_mode":
                        {
                            document.getElementById("1182").value = document.getElementById("fake_fireplace").value;
                        }
                        break;
                    case "backdrop_holiday_mode":
                        {
                            document.getElementById("1180").value = document.getElementById("fake_holiday").value;
                        }
                        break;
                    case "backdrop_refresh_mode":
                        {
                            document.getElementById("1183").value = document.getElementById("fake_refresh").value;
                        }
                        break;
                    case "backdrop_dig_in1_mode":
                        {
                            document.getElementById("1187").value = document.getElementById("fake_din1").value;
                        }
                        break;
                    case "backdrop_dig_in2_mode":
                        {
                            document.getElementById("1188").value = document.getElementById("fake_din2").value;
                        }
                        break;
                    case "backdrop_dig_in3_mode":
                        {
                            document.getElementById("1189").value = document.getElementById("fake_din3").value;
                        }
                        break;
                    default:
                        {
                            console.log("SHOULDN'T GET HERE!!!");
                        }
                        break;
                }
                document.getElementById(select).style.display = "none";
            }

            function user_mode_popup_configure(sel) {
                configureParamValues(sel);
                let user_mode_popup = document.getElementById(sel);
                user_mode_popup.innerHTML = ``;
                user_mode_popup.style.display = "none";
            }

            /**
             * This function is called when hidden menu cancel is clicked
             */
            function hidden_menu_cancel() {
                // if cancel clicked, return to previous mode
                console.log("cancel hidden menu");

                document.getElementById("backdrop_away_mode").style.display = "none";
                document.getElementById("backdrop_crowded_mode").style.display = "none";
                document.getElementById("backdrop_fireplace_mode").style.display = "none";
                document.getElementById("backdrop_holiday_mode").style.display = "none";
                document.getElementById("backdrop_refresh_mode").style.display = "none";
                document.getElementById("backdrop_dig_in1_mode").style.display = "none";
                document.getElementById("backdrop_dig_in2_mode").style.display = "none";
                document.getElementById("backdrop_dig_in3_mode").style.display = "none";

                document.getElementById("backdrop").style.display = "none";
            }

            function hidden_menu_cancel_simple(sel) {
                document.getElementById(sel).style.display = "none";
            }

            function user_mode_popup_cancel(sel) {
                let user_mode_popup = document.getElementById(sel);
                user_mode_popup.innerHTML = ``;
                user_mode_popup.style.display = "none";
            }

            //WEEK SCHEDULE FUNCTIONS:

            /**
             * This function handles unscheduled period airflow level
             * @param {*} sel - select html element
             */
            function handle_unscheduled_period_airflow_level(sel) {
                console.log("handle_unscheduled_period_airflow_level");
                var mode_selected = sel.options[sel.selectedIndex].value;
                var id = sel.id;
                console.log("Option selected =", mode_selected);
                console.log("Option ID = ", id);
            }

            /**
             * This function handles unscheduled period temperature offset
             * @param {*} sel - input type element
             */
            function handle_unscheduled_period_temperature_offset(sel) {
                console.log("handle_unscheduled_period_airflow_level");
                var value = sel.value;
                var id = sel.id;
                console.log("Value selected =", value);
                console.log("ID = ", id);
            }

            /**
             * This function handles scheduled period airflow level
             * @param {*} sel - select html element
             */
            function handle_scheduled_period_airflow_level(sel) {
                console.log("handle_scheduled_period_airflow_level");
                var mode_selected = sel.options[sel.selectedIndex].value;
                var id = sel.id;
                console.log("Option selected =", mode_selected);
                console.log("Option ID = ", id);
            }

            /**
             * This function handles scheduled period temperature offset
             * @param {*} sel - input type element
             */
            function handle_scheduled_period_temperature_offset(sel) {
                console.log("handle_scheduled_period_airflow_level");
                var value = sel.value;
                var id = sel.id;
                console.log("Value selected =", value);
                console.log("ID = ", id);
            }

            /**
             * Detect_inputs() function checks which io selector within input status button has been pressed. Once the button is pressed:
             * 1. Active button style is applied to the pressed button and cleared on ohter buttons
             * 2. hide other divs except for the active one
             * @param {*} param button information
             */

            function Detect_inputs(param) {
                console.log("Detecting inputs");

                var class_button_pressed = param.className;
                var text = param.textContent;
                var id = param.id;

                console.log("class button pressed = ", class_button_pressed);
                console.log("text = ", text);
                console.log("id = ", id);

                let digital_div_config = document.getElementById("idDINStatus-config");
                let analog_div_config = document.getElementById("idAINStatus-config");
                let universal_div_config = document.getElementById("idUINStatus-config");

                if (id == "analog_in_config") {
                    console.log("hiding digital and universal divs CONFIG");
                    analog_div_config.removeAttribute("hidden");
                    digital_div_config.setAttribute("hidden", "hidden");
                    universal_div_config.setAttribute("hidden", "hidden");
                } else if (id == "digital_in_config") {
                    console.log("hiding analog and universal divs CONFIG");
                    digital_div_config.removeAttribute("hidden");
                    analog_div_config.setAttribute("hidden", "hidden");
                    universal_div_config.setAttribute("hidden", "hidden");
                } else if (id == "universal_in_config") {
                    console.log("hiding digital and analog divs CONFIG");
                    universal_div_config.removeAttribute("hidden");
                    digital_div_config.setAttribute("hidden", "hidden");
                    analog_div_config.setAttribute("hidden", "hidden");
                }

                var io_selector = document.getElementsByClassName(param.className);
                //console.log("io selected = ", io_selector);
                for (i = 0; i < io_selector.length; i++) {
                    io_selector[i].className = io_selector[i].className.replace(" active-button", "");
                }
                document.getElementById(id).className += " active-button";
            }

            /**
             * Detect_outputs() function checks which io selector within output status button has been pressed. Once the button is pressed:
             * 1. Active button style is applied to the pressed button and cleared on ohter buttons
             * 2. hide other divs except for the active one
             * @param {*} param button information
             */
            function Detect_outputs(param) {
                console.log("Detecting outputs");
                var class_button_pressed = param.className;
                var text = param.textContent;
                var id = param.id;
                //console.log("class button pressed = ", class_button_pressed);
                console.log("text = ", text);
                console.log("id = ", id);

                let digital_div_config = document.getElementById("idDOUTStatus-config");
                let analog_div_config = document.getElementById("idAOUTStatus-config");

                if (id == "analog_out_config") {
                    console.log("hiding digital div CONFIG");
                    analog_div_config.removeAttribute("hidden");
                    digital_div_config.setAttribute("hidden", "hidden");
                } else if (id == "digital_out_config") {
                    console.log("hiding analog div CONFIG");
                    digital_div_config.removeAttribute("hidden");
                    analog_div_config.setAttribute("hidden", "hidden");
                    //Clear_Digital_Output();

                    var type_out_d1 = 13100;
                    var mode_out_d1 = 5;
                    var out_d1 = {
                        Type: { ID: type_out_d1, Value: OutputDTypeStr[mode_out_d1] },
                        Type_Value: { ID: type_out_d1 + 405, Value: OutputTypeOfValue[1] },
                        Value: { ID: type_out_d1 + 605, Value: Digital_value[1] }, // +605 if OutputTypeOfValue is manual
                        LabelStr: "Digital Output 1",
                        DivId: "d_out_1", // Div that is being is when the IO is expanded
                        Units: "",
                    };
                    //Append_Digital_Output_obj(out_d1);

                    var type_out_d3 = 13102;
                    var mode_out_d3 = 7;
                    var out_d3 = {
                        Type: { ID: type_out_d3, Value: OutputDTypeStr[mode_out_d3] },
                        Type_Value: { ID: type_out_d3 + 405, Value: OutputTypeOfValue[0] },
                        Value: { ID: type_out_d3 + 200, Value: Digital_value[0] }, // +200 if OutputTypeOfValue is auto
                        LabelStr: "Digital Output 3",
                        DivId: "d_out_3", // Div that is being is when the IO is expanded
                        Units: "",
                    };
                    //Append_Digital_Output_obj(out_d3);
                }

                var io_selector = document.getElementsByClassName(class_button_pressed);
                for (i = 0; i < io_selector.length; i++) {
                    io_selector[i].className = io_selector[i].className.replace(" active-button", "");
                }

                document.getElementById(id).className += " active-button";
            }

            /**
             * Detect_alarms() function checks which io selector within Alarms  has been pressed. Once the button is pressed:
             * 1. Active button style is applied to the pressed button and cleared on ohter buttons
             * 2. hide other divs except for the active one
             * @param {*} param button information
             */

            function Detect_alarms(param) {
                var class_button_pressed = param.className;
                var text = param.textContent;
                var id = param.id;

                //console.log("class button pressed = ", class_button_pressed);
                console.log("text = ", text);
                console.log("id = ", id);

                if (id == "active_alarms") {
                    console.log("hiding alarms log div");
                    var active_alarms_div = document.getElementById("idAlarmActive");
                    var id_alarm_log = document.getElementById("idAlarmLog");
                    active_alarms_div.removeAttribute("hidden");
                    id_alarm_log.setAttribute("hidden", "hidden");
                } else if (id == "alarms_log") {
                    console.log("hiding active alarms div");
                    let id_alarm_log = document.getElementById("idAlarmLog");
                    let id_alarm_Active = document.getElementById("idAlarmActive");

                    id_alarm_log.removeAttribute("hidden");
                    id_alarm_Active.setAttribute("hidden", "hidden");
                }

                var io_selector = document.getElementsByClassName("selector-alarms");
                for (i = 0; i < io_selector.length; i++) {
                    io_selector[i].className = io_selector[i].className.replace(" active-button", "");
                }

                document.getElementById(id).className += " active-button";
            }

            /**
             * This function is called when Alarm acknowledge button is clicked
             */
            function alarm_acknowledge() {
                console.log("alarm acknowledged");
                document.getElementById("alarm_result_ack").textContent = "CLICKED";
                // set timer
                setInterval(displayHello, 1000);
            }

            function displayHello() {
                console.log("test");
            }

            /**
             * This function is called when Check for updates button is clicked within unit information -> unit version
             */
            function Check_for_updates() {
                console.log("Checking for updates");
            }

            /**
             * This function is called when Start update button is clicked within unit information -> unit version -> check for updates
             */
            var upd_interval;
            function start_update() {
                console.log("starting update");
                var requestStr = "start_upd";
                console.log(requestStr);
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);
                        if (this.responseText == "OK") {
                            console.log("OK response received, start update periodic requests.");
                            if (!upd_interval) {
                                upd_interval = setInterval(periodic_upd_status_request, 1000);
                                showPopup_start_update("popup_update", "Update in progress...");
                            } else {
                                console.log("interval already started");
                            }
                        }
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            /**
             * change_period_AM_PM function is used to change the time from AM -> PM and vice versa. It is very important to note
             * that everytime the time has been changed, schedule validity must be performed.
             * @param {
             * } option
             */
            function change_period_AM_PM(button_id) {
                console.log("button id = ", button_id);

                var button_pressed = document.getElementById(button_id).value;
                console.log("button value = ", button_pressed);
                if (button_pressed == "AM") {
                    console.log("changing value to PM");
                    document.getElementById(button_id).value = "PM";
                } else {
                    console.log("changing value to AM");
                    //button_pressed = "AM";
                    document.getElementById(button_id).value = "AM";
                }
            }

            /**
             *
             * @param {*} action - input type value ID to be modified
             * @param {*} direction - 1 - go up, 0 - go down
             * @param {*} max_value - maximum allowed input type value
             * @param {*} min_value  - minimum allowed input type value
             */
            function schedule_time(action, direction, max_value, min_value) {
                var button_pressed = document.getElementById(action);
                var current_time_value = button_pressed.value;
                var new_time_value = current_time_value;
                if (direction == 1) {
                    if (new_time_value < max_value) {
                        new_time_value++;
                        if (new_time_value < 10) {
                            var new_time_value = "0" + new_time_value;
                            document.getElementById(action).value = new_time_value;
                        } else {
                            document.getElementById(action).value = new_time_value;
                        }
                    }
                } else if (direction == 0) {
                    if (new_time_value > min_value) {
                        new_time_value--;
                        if (new_time_value < 10) {
                            var new_time_value = "0" + new_time_value;
                            document.getElementById(action).value = new_time_value;
                        } else {
                            document.getElementById(action).value = new_time_value;
                        }
                    }
                }
            }

            //unselect all other countries except the one that is clicked.
            function unit_backups_selector(param) {
                id = param.id;
                // go through all checkbox and see if the one that is currently active is clicked to disable
                console.log("id = ", id);

                var button = document.getElementById("unit_backups_btn");

                var option1 = document.getElementById("unit_backups_option1");
                var option2 = document.getElementById("unit_backups_option2");
                var option3 = document.getElementById("unit_backups_option3");
                var option4 = document.getElementById("unit_backups_option4");
                var option5 = document.getElementById("unit_backups_option5");
                var option6 = document.getElementById("unit_backups_option6");

                if (id == "unit_backups_option1") {
                    console.log("selected unit_backups_option1");
                    if (option1.checked) {
                        console.log("not checked yet");
                    } else {
                        console.log("element already checked ");
                        option1.checked = false;
                        button.setAttribute("hidden", "hidden");
                        return;
                    }
                    button.removeAttribute("hidden");
                    document.getElementById("unit_backups_text").textContent = "RESTORE";
                }

                if (id == "unit_backups_option2") {
                    console.log("selected unit_backups_option2");
                    if (option2.checked) {
                        console.log("not checked yet");
                    } else {
                        console.log("element already checked ");
                        option2.checked = false;
                        button.setAttribute("hidden", "hidden");
                        return;
                    }

                    button.removeAttribute("hidden");
                    document.getElementById("unit_backups_text").textContent = "CLEAR";
                }

                if (id == "unit_backups_option3") {
                    console.log("selected unit_backups_option3");
                    if (option3.checked) {
                        console.log("not checked yet");
                    } else {
                        console.log("element already checked ");
                        option3.checked = false;
                        button.setAttribute("hidden", "hidden");
                        return;
                    }

                    button.removeAttribute("hidden");
                    document.getElementById("unit_backups_text").textContent = "ACTIVATE";
                }

                if (id == "unit_backups_option4") {
                    console.log("selected unit_backups_option4");
                    if (option4.checked) {
                        console.log("not checked yet");
                    } else {
                        console.log("element already checked ");
                        option4.checked = false;
                        button.setAttribute("hidden", "hidden");
                        return;
                    }

                    button.removeAttribute("hidden");
                    document.getElementById("unit_backups_text").textContent = "STORE";
                }

                if (id == "unit_backups_option5") {
                    console.log("selected unit_backups_option5");
                    if (option5.checked) {
                        console.log("not checked yet");
                    } else {
                        console.log("element already checked ");
                        option5.checked = false;
                        button.setAttribute("hidden", "hidden");
                        return;
                    }
                    button.removeAttribute("hidden");
                    document.getElementById("unit_backups_text").textContent = "SAVE";
                }

                if (id == "unit_backups_option6") {
                    console.log("selected unit_backups_option6");
                    if (option6.checked) {
                        console.log("not checked yet");
                    } else {
                        console.log("element already checked ");
                        option6.checked = false;
                        button.setAttribute("hidden", "hidden");
                        return;
                    }
                    button.removeAttribute("hidden");
                    document.getElementById("unit_backups_text").textContent = "DOWNLOAD";
                }

                var io_selector = document.getElementsByClassName("checkbox-round-unit-backups");
                for (i = 0; i < io_selector.length; i++) {
                    //console.log(io_selector[i]);
                    io_selector[i].checked = false;
                }
                document.getElementById(id).checked = true;
            }

            var download_conf_interval;
            var save_conf_interval;
            function perform_unit_backup_action() {
                console.log("unit backup action ");
                var modbus_register;
                var modbus_value;
                var io_selector = document.getElementsByClassName("checkbox-round-unit-backups");
                for (i = 0; i < io_selector.length; i++) {
                    if (io_selector[i].checked == true) {
                        //factory settings
                        if (io_selector[i].id == "unit_backups_option1") {
                            console.log("Factory settings selected");
                            modbus_register = 30100;
                            modbus_value = 3228;
                            Mb_write(modbus_register, modbus_value);
                        }

                        //clear unit model type
                        if (io_selector[i].id == "unit_backups_option2") {
                            console.log("Clear unit model type selected");
                            modbus_register = [30100, 8950];
                            modbus_value = [3228, 0];
                            Mb_write(modbus_register, modbus_value);
                        }

                        // activate user save confiuration
                        if (io_selector[i].id == "unit_backups_option3") {
                            console.log("Activate user safe configuration");
                            modbus_register = 30103;
                            modbus_value = 1;
                            Mb_write(modbus_register, modbus_value);
                        }

                        // set user safe configuration
                        if (io_selector[i].id == "unit_backups_option4") {
                            console.log("Set user safe configuration");
                            modbus_register = 30102;
                            modbus_value = 1;
                            Mb_write(modbus_register, modbus_value);
                            unhide_div("activate_configuration");
                        }

                        //save current configuration to IAM
                        if (io_selector[i].id == "unit_backups_option5") {
                            console.log("Save current configuration to IAM");
                            modbus_register = 1038;
                            modbus_value = 1;
                            let requestStr = "save_conf";
                            console.log(requestStr);
                            var xhttp = new XMLHttpRequest();
                            xhttp.onreadystatechange = function () {
                                if (this.readyState == 4 && this.status == 200) {
                                    console.log(this.responseText);
                                    if (!save_conf_interval) {
                                        save_conf_interval = setInterval(periodic_conf_save_status_request, 2000); // periodic inteval to request state
                                        showPopup(
                                            "popup_configuration",
                                            "Saving current configuration, please wait..."
                                        );
                                    } else {
                                        console.log("interval already started");
                                    }
                                }
                            };
                            xhttp.open("GET", requestStr, true);
                            xhttp.send();
                        }

                        // download configuration from IAM
                        if (io_selector[i].id == "unit_backups_option6") {
                            console.log("Download configuration from IAM");
                            let requestStr = "download_conf";
                            console.log(requestStr);
                            var xhttp = new XMLHttpRequest();
                            xhttp.onreadystatechange = function () {
                                if (this.readyState == 4 && this.status == 200) {
                                    console.log(this.responseText);
                                    if (this.responseText == "OK") {
                                        console.log("OK response received");
                                        if (!download_conf_interval) {
                                            download_conf_interval = setInterval(
                                                periodic_conf_download_status_request,
                                                2000
                                            ); // periodic inteval to request state
                                            showPopup(
                                                "popup_configuration",
                                                "Configuration is downloading, please wait..."
                                            );
                                        } else {
                                            console.log("interval already started");
                                        }
                                    }
                                }
                            };
                            xhttp.open("GET", requestStr, true);
                            xhttp.send();
                        }
                    }
                }
                //decide what to do based on currently selected option
            }

            //saving configuration periodic request
            function periodic_conf_save_status_request() {
                console.log("Get configuration save status");
                let requestStr = "conf_status";
                console.log(requestStr);
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("CONF STATUS RESPOSNE TEXT = ", this.responseText);
                        const responseJson = JSON.parse(this.responseText);
                        if (typeof responseJson === "object") {
                            var json_value = responseJson["conf"];
                            var progress = responseJson["progress"];

                            if (json_value == 1) {
                                console.log("Configuration save in progress ");
                                console.log("Progress = ", progress);
                                document.getElementById("update_progress").innerHTML = progress + "%";
                            } else if (json_value == 2 || 0) {
                                console.log("Configuration save complete ");
                                clearInterval(save_conf_interval);
                                unhide_div("download_configuration");
                                save_conf_interval = null;
                                const popup = document.getElementById("popup_configuration");
                                popup.style.display = "none";
                            }
                        } else {
                            console.log("unknown commands");
                        }
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            //downloading configuration periodic request
            function periodic_conf_download_status_request() {
                console.log("Get configuration download status");
                let requestStr = "conf_status";
                console.log(requestStr);
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("CONF STATUS RESPOSNE TEXT = ", this.responseText);
                        const responseJson = JSON.parse(this.responseText);
                        if (typeof responseJson === "object") {
                            var json_value = responseJson["conf"];
                            var progress = responseJson["progress"];

                            if (json_value == 1) {
                                console.log("Configuration download in progress ");
                                console.log("Progress = ", progress);
                                document.getElementById("update_progress").innerHTML = progress + "%";
                            } else if (json_value == 2 || 0) {
                                console.log("Configuration download complete ");
                                clearInterval(download_conf_interval);
                                download_conf_interval = null;
                                const popup = document.getElementById("popup_configuration");
                                popup.style.display = "none";
                            }
                        } else {
                            console.log("unknown commands");
                        }
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            function periodic_upd_status_request() {
                console.log("Get update status");
                var requestStr = "status_upd";
                console.log(requestStr);
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("UPDATE STATUS RESPOSNE TEXT = ", this.responseText);
                        const responseJson = JSON.parse(this.responseText);
                        if (typeof responseJson === "object") {
                            var status = responseJson["status"];
                            var file_type = responseJson["file"];
                            var percentage = responseJson["percentage"];
                            var percentage_cheat = parseInt(percentage) + 1;
                            if (percentage_cheat >= 100) {
                                percentage_cheat = 100;
                            }
                            if (file_type == "30301") {
                                console.log("ft_progMainboard download in progress = ", percentage_cheat);
                                document.getElementById("update_progress_MB").innerHTML =
                                    percentage_cheat.toString() + "%";
                            } else if (file_type == "30310") {
                                console.log("ft_progHMI download in progress =", percentage_cheat);
                                document.getElementById("update_progress_HMI").innerHTML =
                                    percentage_cheat.toString() + "%";
                                document.getElementById("update_progress_MB").innerHTML = "100%";
                            } else if (file_type == "30311") {
                                console.log("ft_resourcesHMI download in progress =", percentage_cheat);
                                document.getElementById("update_progress_RES").innerHTML =
                                    percentage_cheat.toString() + "%";
                                document.getElementById("update_progress_HMI").innerHTML = "100%";
                            }
                            if (status == 1) {
                                console.log("Update incomplete");
                            } else if (status == 0) {
                                console.log("Update complete");
                                clearInterval(upd_interval);
                                upd_interval = null;
                                const popup = document.getElementById("popup_update");
                                popup.style.display = "none";
                            }
                        } else {
                            console.log("unknown commands");
                        }
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            function showPopup(div, text) {
                // if (typeof devices_to_update === "object") {
                //     for (let i = 0; i < devices_to_update.length; i++) {
                //         console.log("devices to update = ", devices_to_update[i]);
                //     }
                // }
                var user_mode_popup = document.getElementById(div);
                user_mode_popup.style.display = "flex";
                user_mode_popup.innerHTML = `
                                       <div class="popdiv">
                                         <table class="popup-table">
                                           <tr>
                                               <td colspan="2">${text}</td>
                                           </tr>
                                           <tr>
                                               <td>Progress:</td>
                                               <td id ="update_progress"></td>
                                           </tr>
                                         </table>
                                       </div>
                                   `;
            }

            function showPopup_start_update(div, text) {
                if (typeof list_of_devices === "object") {
                } else {
                }
                var user_mode_popup = document.getElementById(div);
                user_mode_popup.style.display = "flex";
                user_mode_popup.innerHTML = `
                                       <div class="popdiv">
                                         <table class="popup-table">
                                           <tr>
                                               <td colspan="2">${text}</td>
                                           </tr>

                                            <tr>
                                                <td>MB:</td>
                                                <td id ="update_progress_MB"></td>
                                            </tr>

                                            <tr>
                                                <td>HMI:</td>
                                                <td id ="update_progress_HMI"></td>
                                            </tr>

                                            <tr>
                                                <td>RES:</td>
                                                <td id ="update_progress_RES"></td>
                                            </tr>
                                         </table>
                                       </div>
                                   `;
            }

            //TODO: When the same checkbox is clicked twice, do we need to disable it?
            //unselect all other countries except the one that is clicked.
            // HOLDING REGISTER = 8003
            // VALUE RANGE = 0-23

            function unit_country_selector(checkbox) {
                var checkboxes = document.getElementsByName("unit-country");

                checkboxes.forEach(function (item) {
                    if (item !== checkbox) {
                        item.checked = false;
                    }
                });
                console.log("value to number = ", Number(checkbox.value));

                document.getElementById("8003").value = Number(checkbox.value);
            }

            function enable_checkbox_by_value(value) {
                var checkboxes = document.getElementsByName("unit-country");
                checkboxes.forEach(function (checkbox) {
                    if (checkbox.value === value && !checkbox.checked) {
                        checkbox.disabled = false;
                        checkbox.click(); // Simulate a click to enable the checkbox
                    }
                });
            }

            function change_heat_exchanger_type(type) {
                if (type == 0) {
                    console.log("rotating mode selected");
                    hide_div("plate_heat_exchanger");
                    unhide_div("Moisture_transfer_placeholder");
                } else if (type == 1) {
                    console.log("plate mode selected");
                    unhide_div("plate_heat_exchanger");
                    hide_div("Moisture_transfer_placeholder");
                }
                if (passive_house_support == 1) {
                    if (type == 0) {
                        unhide_div("rotating_heat_exchanger");
                    } else {
                        hide_div("rotating_heat_exchanger");
                    }
                }
            }

            function change_heater_type(type) {
                console.log("heater_type = ", type);
                if (type == 3) {
                    unhide_div("heater_changeover_placeholder");
                    hide_div("heater_basic_placeholder");
                    hide_div("heater_water_placeholder");
                } else if (type == 2) {
                    hide_div("heater_changeover_placeholder");
                    unhide_div("heater_basic_placeholder");
                    unhide_div("heater_water_placeholder");
                } else {
                    unhide_div("heater_basic_placeholder");
                    hide_div("heater_changeover_placeholder");
                    hide_div("heater_water_placeholder");
                }
            }

            function change_cooler_type(type) {
                if (type == 2) {
                    unhide_div("cooler_changeover_placeholder");
                    hide_div("cooler_water_placeholder");
                    hide_div("cooler_basic_placeholder");
                } else if (type == 1) {
                    unhide_div("cooler_water_placeholder");
                    unhide_div("cooler_basic_placeholder");
                    hide_div("cooler_changeover_placeholder");
                } else if (type == 0) {
                    unhide_div("cooler_basic_placeholder");
                    hide_div("cooler_changeover_placeholder");
                    hide_div("cooler_water_placeholder");
                }
            }

            function change_extra_controller_type(type) {
                let pi_setpoint = document.getElementById("extra_ctrl_pi_setpoint");
                let pump_start = document.getElementById("extra_ctrl_pump_start");
                let pump_stop = document.getElementById("extra_ctrl_pump_stop");
                let preheat_setting = document.getElementById("extra_ctrl_preheat_setting");
                let geo_exchanger = document.getElementById("geo_exchanger_extra_controller");

                pi_setpoint.removeAttribute("hidden");
                pump_start.setAttribute("hidden", "hidden");
                pump_stop.removeAttribute("hidden");
                preheat_setting.setAttribute("hidden", "hidden");
                geo_exchanger.setAttribute("hidden", "hidden");

                switch (type) {
                    case "0":
                        {
                            pump_stop.setAttribute("hidden", "hidden");
                        }
                        break;
                    case "1":
                        {
                            pump_start.removeAttribute("hidden");
                            preheat_setting.removeAttribute("hidden");
                        }
                        break;
                    case "2":
                        {
                            pump_start.removeAttribute("hidden");
                        }
                        break;
                    case "3":
                        {
                            // nothing to do here. all options covered before switch
                        }
                        break;
                    case "4":
                        {
                            pi_setpoint.setAttribute("hidden", "hidden");
                            geo_exchanger.removeAttribute("hidden");
                        }
                        break;
                    default:
                        {
                            // do nothing here
                            console.log("I'M HERE???");
                        }
                        break;
                }
            }

            function change_fan_airflow_type(sel) {
                console.log("change fan airflow type sel = ", sel);
                let fakeUnitField = document.getElementById("fake_unit");
                let fanUnitField = document.getElementById("fan_unit");
                let pbandItimeFields = document.getElementById("pband_itime_inputs");
                let kFactorFields = document.getElementById("k_factor_inputs");
                let pressureSensors = document.getElementById("pressure_sensors");
                let airflowLvlSettings = document.getElementById("airflow_lvl_settings");

                const unitTxtStr = {
                    0: "%",
                    1: "rpm",
                    2: "Pa",
                    3: "",
                    4: "%",
                };

                fanUnitField.setAttribute("hidden", "hidden");
                kFactorFields.setAttribute("hidden", "hidden");
                pressureSensors.setAttribute("hidden", "hidden");
                fakeUnitField.removeAttribute("hidden");
                pbandItimeFields.removeAttribute("hidden");
                airflowLvlSettings.removeAttribute("hidden");

                fakeUnitField.querySelector("textarea").innerText = unitTxtStr[sel.value];

                switch (sel.value) {
                    case "0":
                        {
                            console.log("case 0");
                            pbandItimeFields.setAttribute("hidden", "hidden");
                            document.getElementById("actual_compensation_placeholder").innerHTML =
                                "Actual compensation (%)";
                        }
                        break;
                    case "1":
                        {
                            console.log("case 1");
                            pbandItimeFields.querySelector(`[id="1270"]`).placeholder = "2500 rpm";
                            document.getElementById("fan_c_pband_placeholder").innerHTML = "P-Band (rpm)";
                            document.getElementById("actual_compensation_placeholder").innerHTML =
                                "Actual compensation (rpm)";

                            document.getElementById("1270").min = 1;
                            document.getElementById("1270").max = 3000;
                        }
                        break;
                    case "2":
                        {
                            console.log("case 2");
                            pressureSensors.removeAttribute("hidden");
                            pbandItimeFields.querySelector(`[id="1270"]`).placeholder = "250 Pa";
                            document.getElementById("fan_c_pband_placeholder").innerHTML = "P-Band (Pa)";
                            unhide_div("pressure_selection_saf");
                            unhide_div("pressure_selection_eaf");
                            hide_div("flow_selection_saf");
                            hide_div("flow_selection_eaf");
                            document.getElementById("1270").min = 1;
                            document.getElementById("1270").max = 500;
                            document.getElementById("12601").max = 50;
                            document.getElementById("12601").min = 0;
                            document.getElementById("12603").max = 50;
                            document.getElementById("12603").min = 0;
                        }
                        break;
                    case "3":
                        {
                            console.log("case 3");
                            fakeUnitField.setAttribute("hidden", "hidden");
                            fanUnitField.removeAttribute("hidden");
                            kFactorFields.removeAttribute("hidden");
                            pressureSensors.removeAttribute("hidden");
                            let unitElem = fanUnitField.querySelector(`[id="9000"]`);
                            let unitTxt = unitElem.options[unitElem.selectedIndex].text;
                            document.getElementById("fan_c_pband_placeholder").innerHTML = "P-Band (" + unitTxt + ")";
                            pbandItimeFields.querySelector(`[id="1270"]`).placeholder = "250 " + unitTxt;
                            document.getElementById("flow_saf_alarm_label").innerHTML = "Alarm (" + unitTxt + ")";
                            document.getElementById("flow_eaf_alarm_label").innerHTML = "Alarm (" + unitTxt + ")";
                            document.getElementById("12601").placeholder = "0 " + unitTxt;
                            document.getElementById("12603").placeholder = "0 " + unitTxt;
                            hide_div("pressure_selection_saf");
                            hide_div("pressure_selection_eaf");
                            unhide_div("flow_selection_saf");
                            unhide_div("flow_selection_eaf");
                            document.getElementById("1270").min = 1;
                            document.getElementById("1270").max = 500;
                            document.getElementById("12601").max = 30;
                            document.getElementById("12601").min = 0;
                            document.getElementById("12603").max = 30;
                            document.getElementById("12603").min = 0;
                        }
                        break;
                    case "4":
                        {
                            console.log("case 4");
                            pbandItimeFields.setAttribute("hidden", "hidden");
                            airflowLvlSettings.setAttribute("hidden", "hidden");
                        }
                        break;
                    default:
                        {
                            // do nothing here
                            console.log("I'M HERE???");
                        }
                        break;
                }
            }

            function update_pband_placeholder(sel) {
                console.log(sel);
                let unitTxt = sel.options[sel.selectedIndex].text;
                document.getElementById("fan_c_pband_placeholder").innerHTML = "P-Band" + " (" + unitTxt + ")";
                document.getElementById("1270").placeholder = "250 " + unitTxt;
                document.getElementById("flow_saf_alarm_label").innerHTML = "Alarm (" + unitTxt + ")";
                document.getElementById("flow_eaf_alarm_label").innerHTML = "Alarm (" + unitTxt + ")";
                document.getElementById("12601").placeholder = "0 " + unitTxt;
                document.getElementById("12603").placeholder = "0 " + unitTxt;
            }

            function change_temperature_control_mode(sel) {
                let extraParams = document.getElementById("temp_ctrl_extension");
                console.log(sel);

                if (sel.value > 0) {
                    extraParams.removeAttribute("hidden");
                } else {
                    extraParams.setAttribute("hidden", "hidden");
                }
            }

            function is_free_cooling_time_valid() {
                var hours_start = Number(document.getElementById("4105").value);
                var minutes_start = Number(document.getElementById("4106").value);
                var hours_end = Number(document.getElementById("4107").value);
                var minutes_end = Number(document.getElementById("4108").value);

                var hours_start_unchanged = Number(document.getElementById("4105").value);
                var minutes_start_unchanged = Number(document.getElementById("4106").value);
                var hours_end_unchanged = Number(document.getElementById("4107").value);
                var minutes_end_unchanged = Number(document.getElementById("4108").value);

                if (document.getElementById("6007").checked) {
                    console.log("24 hour time is selected");
                    if (hours_end > 0 && hours_end <= 8 && hours_start > 12) {
                        console.log("hours end rollover occured");
                        hours_end = hours_end + 24; // add 24 to ensure that end time is always greater than start time
                    }
                } else {
                    console.log("12 hour time is selected");
                    if (document.getElementById("ampm_freecooling_start").value == 1) {
                        console.log("PM start time selected");
                        if (hours_start == 12) {
                            //do nothing
                        } else {
                            hours_start = hours_start + 12;
                        }

                        if (
                            hours_end > 0 &&
                            hours_end < 8 &&
                            document.getElementById("ampm_freecooling_end").value == 0
                        ) {
                            console.log("hours end rollover occured");
                            hours_end = hours_end + 24; // add 24 to ensure that end time is always greater than start time
                        } else if (hours_end == 12 && document.getElementById("ampm_freecooling_end").value == 1) {
                            console.log("hours end rollover occured");
                            hours_end = hours_end + 24;
                        }
                    } else {
                        console.log("AM start time selected");
                        if (hours_start == 12) {
                            hours_start = hours_start - 12;
                        } else {
                            //do nothing
                        }
                    }

                    if (document.getElementById("ampm_freecooling_end").value == 1) {
                        console.log("PM end time selected");
                        if (hours_end == 12) {
                            //do nothing
                        } else {
                            hours_end = hours_end + 12;
                        }
                    } else {
                        console.log("AM end time selected");
                        if (hours_end == 12) {
                            hours_end = hours_end - 12;
                        } else {
                            //do nothing
                        }
                    }
                }

                console.log("hours_start = ", hours_start);
                console.log("minutes_start = ", minutes_start);
                console.log("hours_end = ", hours_end);
                console.log("minutes_end = ", minutes_end);

                var freecooling_start = Number(hours_start) + Number(minutes_start) / 60;
                var freecooling_end = Number(hours_end) + Number(minutes_end) / 60;
                console.log("freecooling_start = ", freecooling_start);
                console.log("freecooling_end = ", freecooling_end);

                if (freecooling_start >= freecooling_end) {
                    console.log("Freecooling end should be higher than freecooling start");
                    document.getElementById("freecooling_button_set").disabled = true;
                } else if (freecooling_start < 21 && freecooling_start > 8) {
                    console.log("Freecooling start time is invalid (start time must be between 21:00 and 8:00)");
                    document.getElementById("freecooling_button_set").disabled = true;
                } else if (freecooling_end < 21 && freecooling_end > 8) {
                    console.log("Freecooling end time must be within 21:00 and 8:00");
                    document.getElementById("freecooling_button_set").disabled = true;
                } else {
                    console.log("Freecooling time is valid");
                    document.getElementById("freecooling_button_set").disabled = false;
                }

                if (document.getElementById("6007").checked) {
                    console.log("6007 is checked ");
                } else {
                    console.log("6007 is unchecked, checking if am/pm is set");
                    if (document.getElementById("ampm_freecooling_start").value == 1 && hours_start_unchanged != 12) {
                        console.log("ampm_freecooling_start is 1 ");
                        hours_start_unchanged = hours_start_unchanged + 12;
                    } else {
                        console.log("ampm_freecooling_start is 0");
                        if (
                            hours_start_unchanged == 12 &&
                            document.getElementById("ampm_freecooling_start").value == 0
                        ) {
                            hours_start_unchanged = hours_start_unchanged - 12;
                        }
                    }

                    if (document.getElementById("ampm_freecooling_end").value == 1 && hours_end_unchanged != 12) {
                        console.log("ampm_freecooling_end is 1 ");
                        hours_end_unchanged = hours_end_unchanged + 12;
                    } else {
                        console.log("ampm_freecooling_end is 0");
                        if (hours_end_unchanged == 12 && document.getElementById("ampm_freecooling_end").value == 0) {
                            hours_end_unchanged = hours_end_unchanged - 12;
                        }
                    }
                }

                var hours_start_padded = padWithZero(hours_start_unchanged);
                var minutes_start_padded = padWithZero(minutes_start_unchanged);
                var hours_end_padded = padWithZero(hours_end_unchanged);
                var minutes_end_padded = padWithZero(minutes_end_unchanged);
                document.getElementById("freecooling_time_placeholder").innerText =
                    "Freecooling time: " +
                    hours_start_padded +
                    ":" +
                    minutes_start_padded +
                    " - " +
                    hours_end_padded +
                    ":" +
                    minutes_end_padded;
            }

            // Function to check if an element is visible or hidden
            function isElementVisible(element) {
                // Use getComputedStyle to get the element's computed styles
                const styles = window.getComputedStyle(element);

                // Check if the element is hidden
                return styles.display !== "none" && styles.visibility !== "hidden";
            }

            // Function to check the visibility of input and select elements within a given div (including nested divs)
            function checkDivElementsVisibility(divElement, hidden_divs = new Set()) {
                // Check if the div is hidden
                const isDivElementVisible = isElementVisible(divElement);

                // If the div is hidden, consider all input and select elements hidden as well
                if (!isDivElementVisible) {
                    const inputAndSelectElements = divElement.querySelectorAll("input, select");
                    for (let i = 0; i < inputAndSelectElements.length; i++) {
                        const element = inputAndSelectElements[i];
                        //console.log(`Element with ID "${element.id}" is visible: false`);
                        hidden_divs.add(element.id);
                    }
                } else {
                    // If the div is visible, proceed to check the visibility of input and select elements
                    const inputAndSelectElements = divElement.querySelectorAll("input, select");
                    for (let i = 0; i < inputAndSelectElements.length; i++) {
                        const element = inputAndSelectElements[i];
                        const isElementVisible_test = isElementVisible(element);
                        // console.log(
                        //   `Element with ID "${element.id}" is visible: ${isElementVisible_test}`
                        // );
                    }
                }

                // Check nested divs and their child elements
                const nestedDivs = divElement.querySelectorAll("div");
                for (let i = 0; i < nestedDivs.length; i++) {
                    checkDivElementsVisibility(nestedDivs[i], hidden_divs);
                }

                // Return the array of hidden elements (this will be accumulated with results from nested divs)
                return Array.from(hidden_divs);
            }

            // this is used for modbus read and modbus write in modbus registers tab
            function Mb_write(mb_reg, mb_value) {
                var requestStr = "mwrite?";
                const strForm = {};
                if (typeof mb_reg === "object" && typeof mb_value === "object") {
                    if (mb_reg.length != mb_value.length) {
                        console.log("Array lengths are different");
                        return;
                    } else {
                        for (let i = 0; i < mb_reg.length; i++) {
                            strForm[mb_reg[i]] = parseInt(mb_value[i]);
                        }
                    }
                } else {
                    strForm[mb_reg] = parseInt(mb_value);
                }

                requestStr += JSON.stringify(strForm);
                console.log(requestStr);

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);
                        // Handle response pop-up window ACK/NACK
                        if (this.responseText === "OK") {
                            alert("Parameters written successfully");
                        } else if (this.responseText === "ERROR") {
                            alert("Undefined error");
                        } else if (this.responseText === "WRITE TMO") {
                            alert("Write timeout");
                        } else if (this.responseText === "RESPONSE TMO") {
                            alert("Response timeout");
                        }
                    }
                };
                xhttp.overrideMimeType("application/json");
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            function Mb_read(mb_reg) {
                console.log("mb_reg = ", mb_reg);
                var requestStr = "mread?";
                const strForm = {};
                strForm[mb_reg] = 1;
                requestStr += JSON.stringify(strForm);
                console.log(requestStr);

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("ACK TEXT: " + this.responseText);

                        const responseJson = JSON.parse(this.responseText);
                        if (typeof responseJson === "object") {
                            document.getElementById("modbus_reg").innerHTML =
                                responseJson[String("modbus_reg")] == "0" ? "RETURNED" : "ACKNOWLEDGED";
                            document.getElementById("modbus_value").value = responseJson[mb_reg];
                        } else {
                            console.log("ACK ERROR: " + this.responseText);
                        }
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            function Mb_read_and_update(mb_reg, div_to_update, units) {
                console.log("mb_reg = ", mb_reg);
                var requestStr = "mread?";
                const strForm = {};
                strForm[mb_reg] = 1;
                requestStr += JSON.stringify(strForm);
                console.log(requestStr);

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("ACK TEXT: " + this.responseText);
                        const responseJson = JSON.parse(this.responseText);
                        if (typeof responseJson === "object") {
                            document.getElementById("modbus_reg").innerHTML =
                                responseJson[String("modbus_reg")] == "0" ? "RETURNED" : "ACKNOWLEDGED";

                            const Analog_in_regs = [
                                12100, 12101, 12102, 12103, 12104, 12105, 12106, 12107, 2100, 12404, 2101,
                            ];
                            const Digital_state_regs = [12020, 12021, 12022, 12023, 12024, 12025];

                            for (const element of Analog_in_regs) {
                                if (element == mb_reg) {
                                    var final_value =
                                        (responseJson[mb_reg] > 32767
                                            ? responseJson[mb_reg] - 65536
                                            : responseJson[mb_reg]) / 10;
                                    console.log(mb_reg + ": final_value  = " + final_value);
                                    document.getElementById(div_to_update).innerHTML = final_value;
                                    break;
                                } else {
                                    document.getElementById(div_to_update).innerHTML =
                                        responseJson[mb_reg] + " " + units;
                                }
                            }

                            for (const element2 of Digital_state_regs) {
                                if (element2 == mb_reg) {
                                    if (responseJson[mb_reg] == 1) {
                                        document.getElementById(div_to_update).innerHTML = "ON";
                                    } else if (responseJson[mb_reg] == 0) {
                                        document.getElementById(div_to_update).innerHTML = "OFF";
                                    }
                                    break;
                                }
                            }
                        } else {
                            console.log("ACK ERROR: " + this.responseText);
                        }
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            function hide_div(div) {
                var document_div = document.getElementById(div);
                document_div.setAttribute("hidden", "hidden");
            }

            function unhide_div(div) {
                var document_div = document.getElementById(div);
                document_div.removeAttribute("hidden");
            }

            function construct_airflow_lvl_settings_tab(evt, airflowType) {
                // start with last reg -> easier to match order of max to min levels
                const argsTbl = {
                    0: {
                        safLastReg: 1408,
                        eafLastReg: 1409,
                        min: 16,
                        max: 100,
                    },
                    1: {
                        safLastReg: 1418,
                        eafLastReg: 1419,
                        min: 500,
                        max: 5000,
                    },
                    2: {
                        safLastReg: 1428,
                        eafLastReg: 1429,
                        min: 100,
                        max: 1000,
                    },
                    3: {
                        safLastReg: 1438,
                        eafLastReg: 1439,
                        min: 100,
                        max: 1000,
                    },
                };

                const lvlNames = {
                    0: "Max.",
                    1: "High",
                    2: "Normal",
                    3: "Low",
                    4: "Min.",
                };

                const unitTxtStr = {
                    0: "%",
                    1: "rpm",
                    2: "Pa",
                    3: "",
                    4: "%",
                };

                const elemArgs = argsTbl[airflowType];
                let units;

                if (airflowType == 3) {
                    let unitElem = document.getElementById("9000");
                    units = unitElem.options[unitElem.selectedIndex].text;
                } else {
                    units = unitTxtStr[airflowType];
                }

                // construct supply airflow levels
                let airflowLvlSettings = `
                               <div class="container-rows">
                                   <div class="columns_2">
                                       <span class="centralized">Supply (<span id="safRangeCaption">${elemArgs.min}-${elemArgs.max}</span> ${units})</span>
                           `;

                let elemReg = argsTbl[airflowType].safLastReg;
                for (let i = 0; i < 5; i++) {
                    airflowLvlSettings += `
                                   <label for="${elemReg}">${lvlNames[i]} level</label>
                                   <span class="popup">
                                       <input
                                           type="number"
                                           placeholder="Enter value..."
                                           id="${elemReg}"
                                           min="${elemArgs.min}"
                                           max="${elemArgs.max}"
                                           onblur="imposeMinMax(this)"
                                       />
                                       <span class="popuptext"></span>
                                   </span>
                               `;
                    // descending order
                    elemReg -= 2;
                }

                // close supply airflow levels div and construct extract airflow levels
                airflowLvlSettings += `
                               </div>

                               <div class="columns_2">
                                   <span class="centralized">Extract (<span id="eafRangeCaption">${elemArgs.min}-${elemArgs.max}</span> ${units})</span>
                           `;

                elemReg = argsTbl[airflowType].eafLastReg;
                for (let i = 0; i < 5; i++) {
                    airflowLvlSettings += `
                                   <label for="${elemReg}">${lvlNames[i]} level</label>
                                   <span class="popup">
                                       <input
                                           type="number"
                                           placeholder="Enter value..."
                                           id="${elemReg}"
                                           min="${elemArgs.min}"
                                           max="${elemArgs.max}"
                                           onblur="imposeMinMax(this)"
                                       />
                                       <span class="popuptext"></span>
                                   </span>
                               `;
                    // descending order
                    elemReg -= 2;
                }

                // close extract airflow levels div and add set btn
                airflowLvlSettings += `
                                   </div>
                               </div>


                               <div style="max-width: 400px">
                                <button class="action_set" onclick="configureParamValues('Airflow Levels Settings')">Set</button>
                                </div>
                           `;

                document.getElementById("airflow_params_by_type").innerHTML = airflowLvlSettings;
                openTab(evt, "Airflow Levels Settings");
            }

            function wifi_setting(param) {
                console.log("wifi setting");

                var class_button_pressed = param.className;
                var text = param.textContent;
                var id = param.id;

                console.log("class button pressed = ", class_button_pressed);
                console.log("text = ", text);
                console.log("id = ", id);

                let wifi_div = document.getElementById("wifi_config_result");
                let wifi_hotspot_div = document.getElementById("wifi_hotspot_config_result");
                let cloud_domain_div = document.getElementById("cloud_domain_config");

                if (id == "wifi1") {
                    console.log("hiding hotspot and cloud domain divs CONFIG");
                    wifi_div.removeAttribute("hidden");
                    wifi_hotspot_div.setAttribute("hidden", "hidden");
                    cloud_domain_div.setAttribute("hidden", "hidden");
                } else if (id == "wifi2") {
                    console.log("hiding wifi and cloud domain divs CONFIG");
                    wifi_hotspot_div.removeAttribute("hidden");
                    wifi_div.setAttribute("hidden", "hidden");
                    cloud_domain_div.setAttribute("hidden", "hidden");
                    //change_wifi_mode(document.getElementById(100).value);
                } else if (id == "wifi3") {
                    console.log("hiding wifi and analog hotspot CONFIG");
                    cloud_domain_div.removeAttribute("hidden");
                    wifi_div.setAttribute("hidden", "hidden");
                    wifi_hotspot_div.setAttribute("hidden", "hidden");
                }

                var io_selector = document.getElementsByClassName(param.className);
                //console.log("io selected = ", io_selector);
                for (i = 0; i < io_selector.length; i++) {
                    io_selector[i].className = io_selector[i].className.replace(" active-button", "");
                }
                document.getElementById(id).className += " active-button";
            }

            function change_wifi_mode(value) {
                console.log("value = ", value);
                if (value == 1) {
                    hide_div("AP_CONFIG");
                    unhide_div("STA_CONFIG");
                } else if (value == 3) {
                    unhide_div("AP_CONFIG");
                    hide_div("STA_CONFIG");
                }
            }

            function onlyOne(checkbox) {
                var checkboxes = document.getElementsByName("wifi");
                checkboxes.forEach((item) => {
                    if (item !== checkbox) item.checked = false;
                });

                var passwordInput = document.getElementById("11");
                var checkboxLabel = checkbox.nextElementSibling; // Get the label

                if (checkbox.checked) {
                    console.log("checkboxLabel = ", checkboxLabel.innerHTML);
                    document.getElementById("10").value = checkboxLabel.innerText;
                    //document.getElementById("10").value = "password_test";
                    unhide_div("hidden_connect_button");
                    // Checkbox is checked
                    if (!passwordInput) {
                        // Create password input if not exists
                        passwordInput = document.createElement("input");
                        passwordInput.type = "password";
                        passwordInput.id = "11";
                        passwordInput.name = "11";
                        passwordInput.placeholder = "Password";
                        passwordInput.minlength = "8";
                        passwordInput.maxlength = "64";
                    }
                    passwordInput.value = "";
                    // Insert password input after label and then insert line break
                    checkboxLabel.insertAdjacentElement("afterend", passwordInput);

                    // Create and insert line break after the label and before the password input
                    var lineBreak = document.createElement("br");
                    checkboxLabel.insertAdjacentElement("afterend", lineBreak);
                } else {
                    hide_div("hidden_connect_button");
                    // Checkbox is unchecked
                    if (passwordInput) {
                        // Remove password input if exists
                        passwordInput.parentNode.removeChild(passwordInput);
                        // Remove line break if exists
                        var lineBreak = checkboxLabel.nextElementSibling;
                        if (lineBreak && lineBreak.tagName === "BR") {
                            lineBreak.parentNode.removeChild(lineBreak);
                        }
                    }
                }
            }

            function updateHiddenInputs() {
                const datetimeInput = document.getElementById("date-input");
                const yearInput = document.getElementById("6000");
                const monthInput = document.getElementById("6001");
                const dayInput = document.getElementById("6002");

                const selectedDatetime = new Date(datetimeInput.value);
                console.log("selectedDatetime = ", selectedDatetime);

                yearInput.value = selectedDatetime.getFullYear();
                monthInput.value = selectedDatetime.getMonth() + 1;
                dayInput.value = selectedDatetime.getDate();

                console.log("yearInput = ", yearInput.value);
                console.log("monthInput = ", monthInput.value);
                console.log("dayInput = ", dayInput.value);
            }

            function add_time_options(id) {
                //options should only be added if size of select list is < 24

                var select = document.getElementById(id);
                if (select.length < 23) {
                    // Loop to add options back from 13 to 23
                    for (var i = 13; i <= 23; i++) {
                        var option = document.createElement("option");
                        option.text = i < 10 ? "0" + i : i.toString();
                        option.value = i;
                        option.style.textAlign = "center";
                        select.appendChild(option);
                    }
                    var option = document.createElement("option");
                    option.text = "00";
                    option.value = 0;
                    option.style.textAlign = "center";
                    select.insertBefore(option, select.firstChild);
                } else {
                    console.log("dont need to add time options");
                }
            }

            function remove_time_options(id) {
                var selectOption = document.getElementById(id);
                if (selectOption.length > 23) {
                    for (var i = 23; i > 12; i--) {
                        var item = selectOption[i];
                        item.remove();
                    }
                    var item_0 = selectOption[0];
                    item_0.remove();
                }
            }
            function padWithZero(number) {
                console.log("padwith zero number = ", number);

                // Convert the number to a string
                var str = number.toString();

                // Pad with a leading zero if the string length is 1
                if (str.length === 1) {
                    return "0" + str;
                }

                // If the string length is already 2 or more, return it as is
                return str;
            }

            document.getElementById("loadOverlay").style.display = "none";

            <!-- END OF SCRIPTS.JS-->
        : "Outdoor Air Temperature sensor (OAT)",
                2: "Supply Air Temperature sensor (SAT)",
                3: "Overheat Temperature Sensor (OHT)",
                4: "Frost Protection Temperature Sensor (FPT)",
                5: "Room Air Temperature sensor (RAT)",
                6: "Extract Air Temperature sensor (EAT)",
                7: "Extra Controller Temperature sensor (ECT)",
                8: "Efficiency temperature sensor (EFT)",
            };

            // Need to convert Label to  MB Register
            const Analog_input_name = {
                11000: "Analogue Input 1",
                11001: "Analogue Input 2",
                11002: "Analogue Input 3",
                11003: "Analogue Input 4",
                11004: "Analogue Input 5",
                11005: "Analogue Input 6",
                11006: "Analogue Input 7",
            };

            // converts the InputATypeStr to MB register
            const Analog_type_to_reg = {
                12100: InputATypeStr[4],
                12101: InputATypeStr[1],
                12102: InputATypeStr[2],
                12103: InputATypeStr[5],
                12104: InputATypeStr[6],
                12105: InputATypeStr[7],
                12106: InputATypeStr[8],
                12107: InputATypeStr[3],
            };

            const Analog_type_to_Value_reg = {
                1: 12101, //Outdoor Air Temperature
                2: 12102, //Supply Air Temperature sensor
                3: 12107, //Heater OverHeat
                4: 12100, //Frost protection Temperature sensor
                5: 12103, //Room Air temperature
                6: 12104, //Extract air temperature sensor
                7: 12105, //Extra controller temperature sensor
                8: 12106, //Efficiency temperature sensor
            };

            function getObjectKey(obj, value) {
                return Object.keys(obj).find((key) => obj[key] === value);
            }

            // Need to convert Label to MB Register
            const Digital_input_name = {
                11400: "Digital Input 1",
                11401: "Digital Input 2",
            };

            // Need to convert Label to MB Register
            const Digital_value = {
                1: "ON",
                0: "OFF",
            };

            const Digital_feedback_label = {
                12400: "SAF feedback",
                12401: "EAF feedback",
            };

            // UNIVERSAL VARS
            const UniversalModeStr = {
                0: "Not Set",
                1: "Analogue Input",
                2: "Digital Input",
            };

            const UAI_Type = {
                0: "Inactive Input",
                1: "RH Sensor (RH)",
                2: "CO2 Sensor (CO2)",
                3: "Supply Air Fan Control (SAFC)",
                4: "Extract Air Fan Control (EAFC)",
                5: "Bypass damper Feedback (BYF)",
            };

            const UDI_Type = {
                0: "Inactive Input",
                1: "Away",
                2: "Bypass Damper (BYS)",
                3: "Vacuum Cleaner",
                4: "Cooker Hood",
                5: "Crowded",
                6: "EMT",
                7: "External Stop",
                8: "Extra Controller Alarm",
                9: "Fireplace",
                10: "Holiday",
                11: "Refresh",
                12: "RGS",
                13: "Change Over Feedback",
                14: "Fire Alarm",
                15: "Configurable digital input 1",
                16: "Configurable digital input 2",
                17: "Configurable digital input 3",
                18: "Pressure Guard",
            };

            const UI_Status = {
                0: "Disabled",
                1: "Enabled",
            };

            function convert_Mode_to_Type_ID(Mode_ID, Mode) {
                if (Mode == 0) {
                    return Mode_ID + 150; // middle point
                } else if (Mode == 1) {
                    return Mode_ID + 100;
                } else if (Mode == 2) {
                    return Mode_ID + 200;
                }
            }

            // Can be either Value (if Analogue) or State (if Digital)
            function convert_Mode_to_Value_ID(Mode_ID, Type, Mode) {
                if (Mode == 0) {
                    // do nothing
                } else if (Mode == 1) {
                    if (Type == 1) {
                        //RH
                        return Mode_ID + 1060;
                    } else if (Type == 2) {
                        // CO2
                        return Mode_ID + 1050;
                    } else if (Type == 3) {
                        // Supply Air Fan control
                        return 2100;
                    } else if (Type == 4) {
                        // Extract Air Fan control
                        return 2101;
                    } else if (Type == 5) {
                        // Bypass Damper Feedback
                        return 12404;
                    }
                } else if (Mode == 2) {
                    return Mode_ID + 920;
                }
            }

            /**
             *
             * @param {*} Mode_ID ID if specific Universal Input
             * @param {*} Mode Can be Analogue or Digital
             * @returns
             */
            function convert_Mode_to_Option_ID(Mode_ID, Mode) {
                if (Mode == 0) {
                    return Mode_ID + 170; // Middle point
                } else if (Mode == 1) {
                    return Mode_ID + 120; // if Analog
                } else if (Mode == 2) {
                    return Mode_ID + 220; // if Digital
                }
            }

            const Contact_function_e = {
                0: "Normally Open (NO)",
                1: "Normally Closed (NC)",
            };

            const Pressure_card_type = {
                0: "None",
                1: "Flow",
                2: "Filter clogging",
            };

            // OUTPUT ANALOG
            const OutputATypeStr = {
                0: "Inactive Output",
                1: "Y1 Heating",
                2: "Y2 Exchanger",
                3: "Y3 Cooler",
                4: "Y4 Extra Controller",
                5: "Y1/Y3 Change-over",
                6: "AO Temperature Setpoint",
            };

            // OUTPUT DIGITAL
            const OutputDTypeStr = {
                0: "Inactive Output",
                1: "Step Controller Y1 Heating",
                2: "Step Controller Y2 Exchanger",
                3: "Step Controller Y3 Cooling",
                4: "Step Controller Y4 Extra Controller",
                5: "Sum Alarm",
                6: "Outdoor-/Exhaust Air Damper",
                7: "Secondary Air (Recirculation Air)",
                8: "Activate Cooling",
                9: "Interlock External fan control",
                10: "Start/Stop Circ. Pump, Y1 Heating",
                11: "Start/Stop Circ. Pump, Y3 Cooling",
                12: "Start/Stop Circ. Pump, Y1/3 Change-over",
                13: "Start/Stop Circ. Pump, Y4 Extra Controller",
                14: "Unit status OK",
                15: "Week schedule - Unscheduled",
                16: "Week schedule - Scheduled",
            };

            const OutputTypeOfValue = {
                0: "Auto",
                1: "Manual",
            };

            const TriacOutputType = {
                0: "Inactive Output",
                1: "Y1 Heating",
            };

            /**
             * Clear Analog inputs div
             */
            function Clear_Analog_Inputs() {
                let generated_analog_input = document.getElementById("idAINStatus-config");
                generated_analog_input.innerHTML = "";
            }

            function Append_Analog_Input_obj(object) {
                let generated_analog_input = document.getElementById("idAINStatus-config");
                let encodedObj = encodeURIComponent(JSON.stringify(object));
                let correction_value = object.Correction.Value + "&deg;C";
                let value_value = object.Value.Value + "&deg;C";
                if (object.Type.Value == 0) {
                    // inactive input
                    correction_value = "-";
                    value_value = "-";
                }
                generated_analog_input.innerHTML += `
                                    <table class="sensor-values-table">
                                        <tr>
                                            <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                                <td style="text-align: right">
                                                    <button style="border:none;background-color:inherit;" onclick="Expand_AIN_selection('${encodedObj}')">
                                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>

                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="td-left-aligned">Type:</td>
                                                <td colspan = "2" class="td-right-aligned">${object.TypeStr}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">Sensor correction:</td>
                                                <td class="td-right-aligned">${correction_value}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">Value:</td>
                                                <td class="td-right-aligned">${value_value}</td>
                                            </tr>
                                        </table>
                                    </table>
                                    <br>
                                `;
            }

            function Expand_AIN_selection(encodedObject) {
                const object = JSON.parse(decodeURIComponent(encodedObject));
                console.log("object = " + object);
                let io_to_modify = document.getElementById("Modify_IO");
                io_to_modify.innerHTML = `
                                    <span class="header" onclick="openTab(event, 'Input')" style="cursor:pointer;">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>${object.LabelStr}
                                    </span>

                                    <div class="container">
                                        <label class="container-label">Input Type</label>
                                        <select id = "${object.Type.ID}" style="text-align-last:left !important;" onchange="change_units(this.id)">
                                            <option value="0" selected style="text-align: center;">${InputATypeStr[0]}</option>
                                            <option value="1" style="text-align: center;">${InputATypeStr[1]}</option>
                                            <option value="2" style="text-align: center;">${InputATypeStr[2]}</option>
                                            <option value="3" style="text-align: center;">${InputATypeStr[3]}</option>
                                            <option value="4" style="text-align: center;">${InputATypeStr[4]}</option>
                                            <option value="5" style="text-align: center;">${InputATypeStr[5]}</option>
                                            <option value="6" style="text-align: center;">${InputATypeStr[6]}</option>
                                            <option value="7" style="text-align: center;">${InputATypeStr[7]}</option>
                                            <option value="8" style="text-align: center;">${InputATypeStr[8]}</option>
                                        </select>

                                        <label class="container-label">Sensor Correction (&deg;C)</label>
                                        <span class="popup">
                                            <input id="${object.Correction.ID}" style="padding-left:20px;" type="number" placeholder="${object.Correction.Value}" min="-10" max="10"
                                                onblur="imposeMinMax(this)" />
                                            <span class="popuptext"></span>
                                        </span>

                                        <table class="sensor-values-table" style ="width:320px; padding-top:12px;";>
                                            <tr>
                                                <td class="td-left-aligned">Value:</td>
                                                <td class="td-right-aligned">
                                                    <span id="ain_value_placeholder">${object.Value.Value}</span>
                                                    <span> &deg;C</span>
                                                </td>
                                            </tr>
                                        </table>

                                        <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                    </div>
                                    `;

                enableOption(object.Type.ID, object.TypeStr);
                openTab(null, "Modify_IO");
            }

            /**
             *  Clear Digital inputs div
             */
            function Clear_Digital_Inputs() {
                let generated_digital_input = document.getElementById("idDINStatus-config");
                generated_digital_input.innerHTML = "";
            }

            function Append_Digital_Input_obj(object) {
                const encodedObj = encodeURIComponent(JSON.stringify(object));
                const obj_length = Object.keys(object).length;
                let generated_digital_input;
                if (obj_length == 6) {
                    let contact_function_value = object.CF.Value;
                    let value_value = object.Value.Value;
                    if (object.Type.Value == 0) {
                        // inactive input
                        contact_function_value = "-";
                        value_value = "-";
                    }
                    generated_digital_input = document.getElementById("idDINStatus-config");
                    generated_digital_input.innerHTML += `
                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                                <td style="text-align: right">
                                                    <button style="border:none;background-color:inherit;" onclick="Expand_DIN_selection('${encodedObj}')">
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>

                                            <table class="sensor-values-table">
                                                <tr>
                                                    <td class="td-left-aligned">Type:</td>
                                                    <td colspan = "2" class="td-right-aligned">${object.TypeStr}</td>
                                                </tr>
                                                <tr>
                                                    <td colspan = "2" class="td-left-aligned">Contact Function:</td>
                                                    <td class="td-right-aligned">${contact_function_value}</td>
                                                </tr>
                                                <tr>
                                                    <td class="td-left-aligned">Value:</td>
                                                    <td colspan = "2" class="td-right-aligned">${value_value}</td>
                                                </tr>
                                            </table>
                                        </table>
                                        <br>
                                    `;
                } else if (obj_length == 2) {
                    // SAF EAF FEEDBACK
                    generated_digital_input = document.getElementById("idDINStatus-config");
                    generated_digital_input.innerHTML += `
                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                            </tr>
                                            <table class="sensor-values-table">
                                                <tr>
                                                    <td class="td-left-aligned">Value:</td>
                                                    <td class="td-right-aligned">${object.Value.Value} rpm</td>
                                                </tr>
                                            </table>
                                        </table>
                                        <br>
                                    `;
                }
            }

            //TODO: How to assign unique ID's based on Modbus parameters excell document?
            function Expand_DIN_selection(encodedObject) {
                const object = JSON.parse(decodeURIComponent(encodedObject));
                console.log("object = ", object);

                let io_to_modify = document.getElementById("Modify_IO");
                io_to_modify.innerHTML = `
                                    <span class="header" onclick="openTab(event, 'Input')" style="cursor:pointer;">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>${object.LabelStr}
                                    </span>

                                    <div class="container">
                                        <label class="container-label">Input Type</label>
                                        <select id="${object.Type.ID}" style="text-align-last:left !important;" onchange="change_units(this.id)">
                                            <option value="0" selected style="text-align: center;">${UDI_Type[0]}</option>
                                            <option value="1" style="text-align: center;">${UDI_Type[1]}</option>
                                            <option value="2" style="text-align: center;">${UDI_Type[2]}</option>
                                            <option value="3" style="text-align: center;">${UDI_Type[3]}</option>
                                            <option value="4" style="text-align: center;">${UDI_Type[4]}</option>
                                            <option value="5" style="text-align: center;">${UDI_Type[5]}</option>
                                            <option value="6" style="text-align: center;">${UDI_Type[6]}</option>
                                            <option value="7" style="text-align: center;">${UDI_Type[7]}</option>
                                            <option value="8" style="text-align: center;">${UDI_Type[8]}</option>
                                            <option value="9" style="text-align: center;">${UDI_Type[9]}</option>
                                            <option value="10" style="text-align: center;">${UDI_Type[10]}</option>
                                            <option value="11" style="text-align: center;">${UDI_Type[11]}</option>
                                            <option value="12" style="text-align: center;">${UDI_Type[12]}</option>
                                            <option value="13" style="text-align: center;">${UDI_Type[13]}</option>
                                            <option value="14" style="text-align: center;">${UDI_Type[14]}</option>
                                            <option value="15" style="text-align: center;">${UDI_Type[15]}</option>
                                            <option value="16" style="text-align: center;">${UDI_Type[16]}</option>
                                            <option value="17" style="text-align: center;">${UDI_Type[17]}</option>
                                            <option value="18" style="text-align: center;">${UDI_Type[18]}</option>
                                        </select>

                                        <label class="container-label">Contact function</label>
                                        <select id="${object.CF.ID}" style="text-align-last:left !important;">
                                            <option value="0" selected style="text-align: center;">${Contact_function_e[0]}</option>
                                            <option value="1" style="text-align: center;">${Contact_function_e[1]}</option>
                                        </select>

                                        <table class="sensor-values-table" style="width:320px; padding-top:12px;">
                                            <tr>
                                                <td class="td-left-aligned">Value:</td>
                                                <td id="din_value_placeholder" class="td-right-aligned">${object.Value.Value}</td>
                                            </tr>
                                        </table>

                                        <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                    </div>
                                `;

                enableOption(object.Type.ID, object.TypeStr);
                enableOption(object.CF.ID, object.CF.Value);
                openTab(null, "Modify_IO");
            }

            /**
             * Clear Universal inputs div
             */
            function Clear_Universal_Inputs() {
                let generated_universal_input = document.getElementById("idUINStatus-config");
                generated_universal_input.innerHTML = "";
            }

            function Append_Universal_Input_obj(object) {
                let encodedObj = encodeURIComponent(JSON.stringify(object));
                let generated_universal_inputs = document.getElementById("idUINStatus-config");
                let obj_length = Object.keys(object).length;
                if (obj_length == 3) {
                    //NOT SET
                    console.log("Display Universal not set");
                    //DISPLAY MODE NOT SET
                    generated_universal_inputs.innerHTML += `
                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                                <td style="text-align: right">
                                                    <button style="border:none;background-color:inherit;" onclick="Expand_UIN_selection('${encodedObj}')">
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        </table>

                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="td-left-aligned">Mode:</td>
                                                <td class="td-right-aligned">${object.Mode.Value}</td>
                                            </tr>
                                            <tr>
                                                <td class = "input-not-set" colspan ="2">
                                                    Set the universal input as analog or digital
                                                </td>
                                            </tr>
                                        </table>
                                    `;
                } else if (obj_length == 7) {
                    //determine mode value
                    //ANALOG/DIGITAL MODE
                    //decide if Label should be Contact function or Sensor correction based on type
                    let option_label;
                    if (object.Mode.Value == "Analogue Input") {
                        option_label = "Sensor correction:";
                    } else if (object.Mode.Value == "Digital Input") {
                        option_label = "Contact function:";
                    }
                    generated_universal_inputs.innerHTML += `
                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                                <td style="text-align: right">
                                                    <button style="border:none;background-color:inherit;" onclick="Expand_UIN_selection('${encodedObj}')">
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        </table>

                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="td-left-aligned">Mode:</td>
                                                <td colspan = "2" class="td-right-aligned">${object.Mode.Value}</td>
                                            </tr>
                                            <tr>
                                                <td class="td-left-aligned">Type:</td>
                                                <td colspan = "2" class="td-right-aligned">${object.Type.Value}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">${option_label}</td>
                                                <td class="td-right-aligned">${object.Option.Value} ${object.Units}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">Value:</td>
                                                <td class="td-right-aligned">${object.Value.Value} ${object.Units}</td>
                                            </tr>
                                        </table>
                                    `;
                } else if (obj_length == 6) {
                    //EAT RH
                    console.log("Display EAT/RH");
                    generated_universal_inputs.innerHTML += `
                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                                <td style="text-align: right">
                                                    <button style="border:none;background-color:inherit;" onclick="Expand_UIN_selection('${encodedObj}')">
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        </table>

                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="td-left-aligned">Status:</td>
                                                <td colspan = "2" class="td-right-aligned">${object.EAT_Conf.Value}</td>
                                            </tr>
                                            <tr>
                                                <td class="td-left-aligned">Type:</td>
                                                <td colspan = "2" class="td-right-aligned">${object.LabelStr}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">Sensor Correction:</td>
                                                <td class="td-right-aligned">${object.EAT_Correction.Value} ${object.Units}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">Value:</td>
                                                <td class="td-right-aligned">${object.EAT_Value.Value} ${object.Units}</td>
                                            </tr>
                                        </table>
                                    `;
                } else if (obj_length == 5) {
                    // PRESSURE CARD
                    generated_universal_inputs.innerHTML += `
                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                                <td style="text-align: right">
                                                    <button style="border:none;background-color:inherit;" onclick="Expand_UIN_selection('${encodedObj}')">
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        </table>

                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="td-left-aligned">Type:</td>
                                                <td colspan = "2" class="td-right-aligned">${object.Type.Value}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">SAF Sensor Correction:</td>
                                                <td class="td-right-aligned">${object.SAF.Correction.Value} ${object.Units}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">SAF Value:</td>
                                                <td class="td-right-aligned">${object.SAF.Value.Value} ${object.Units}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">EAF Sensor Correction:</td>
                                                <td class="td-right-aligned">${object.EAF.Correction.Value} ${object.Units}</td>
                                            </tr>
                                            <tr>
                                                <td colspan = "2" class="td-left-aligned">EAF Value:</td>
                                                <td class="td-right-aligned">${object.EAF.Value.Value} ${object.Units}</td>
                                            </tr>
                                        </table>
                                    `;
                }
            }

            //TODO: How to assign unique ID's based on Modbus parameters excell document?
            function Expand_UIN_selection(encodedObject) {
                const object = JSON.parse(decodeURIComponent(encodedObject));
                let obj_length = Object.keys(object).length;
                let io_to_modify = document.getElementById("Modify_IO");

                if (obj_length == 7) {
                    let analog_add = 0;
                    let digital_add = 0;
                    if (object.Mode.Value == "Analogue Input") {
                        digital_add = +100;
                    } else if (object.Mode.Value == "Digital Input") {
                        analog_add = -100;
                    }
                    io_to_modify.innerHTML = `
                                        <span class="header" onclick="openTab(event, 'Input')" style="cursor:pointer;">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>${object.LabelStr}
                                        </span>

                                        <div class="container">
                                            <label class="container-label">Signal Type</label>
                                            <select id="${
                                                object.Mode.ID
                                            }" style="text-align-last:left !important;" onchange="Enable_Uin_divs(this);">
                                                <option value="0" selected style="text-align: center;">${
                                                    UniversalModeStr[0]
                                                }</option>
                                                <option value="1" style="text-align: center;">${
                                                    UniversalModeStr[1]
                                                }</option>
                                                <option value="2" style="text-align: center;">${
                                                    UniversalModeStr[2]
                                                }</option>
                                            </select>

                                            <div id="Not_Set_Div" style="display: none;"></div>

                                            <div id="A_div" style="display: none;">
                                                <label class="container-label">Input Type</label>
                                                <select id="${
                                                    object.Type.ID + analog_add
                                                }" style="text-align-last:left !important;" onchange="change_units(this.id, 0)">
                                                    <option value="0" selected style="text-align: center;">${
                                                        UAI_Type[0]
                                                    }</option>
                                                    <option value="1" style="text-align: center;">${
                                                        UAI_Type[1]
                                                    }</option>
                                                    <option value="2" style="text-align: center;">${
                                                        UAI_Type[2]
                                                    }</option>
                                                    <option value="3" style="text-align: center;">${
                                                        UAI_Type[3]
                                                    }</option>
                                                    <option value="4" style="text-align: center;">${
                                                        UAI_Type[4]
                                                    }</option>
                                                    <option value="5" style="text-align: center;">${
                                                        UAI_Type[5]
                                                    }</option>
                                                </select>

                                                <div id ="Uin_correction">
                                                    <label id ="uin_units" class="container-label">Sensor Correction</label>
                                                    <span class="popup">
                                                        <input id="${object.Option.ID + analog_add}"
                                                                style="padding-left:20px;"
                                                                type="number"
                                                                value="${object.Option.Value}"
                                                                placeholder="0" min="0" max="10" step="0.1"
                                                                onblur="imposeMinMax(this)" />
                                                        <span class="popuptext"></span>
                                                    </span>
                                                </div>

                                                <table class="sensor-values-table" style="width:320px; padding-top:12px;">
                                                    <tr>
                                                        <td class="td-left-aligned">Value:</td>
                                                        <td id="uin_value_placeholder" class="td-right-aligned">${
                                                            object.Value.Value
                                                        }</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <div id="D_div" style="display: none;">
                                                <label class="container-label">Input Type</label>
                                                <select id="${
                                                    object.Type.ID + digital_add
                                                }" style="text-align-last:left !important;" onchange="change_units(this.id, 0)">
                                                    <option value="0" selected style="text-align: center;">${
                                                        UDI_Type[0]
                                                    }</option>
                                                    <option value="1" style="text-align: center;">${
                                                        UDI_Type[1]
                                                    }</option>
                                                    <option value="2" style="text-align: center;">${
                                                        UDI_Type[2]
                                                    }</option>
                                                    <option value="3" style="text-align: center;">${
                                                        UDI_Type[3]
                                                    }</option>
                                                    <option value="4" style="text-align: center;">${
                                                        UDI_Type[4]
                                                    }</option>
                                                    <option value="5" style="text-align: center;">${
                                                        UDI_Type[5]
                                                    }</option>
                                                    <option value="6" style="text-align: center;">${
                                                        UDI_Type[6]
                                                    }</option>
                                                    <option value="7" style="text-align: center;">${
                                                        UDI_Type[7]
                                                    }</option>
                                                    <option value="8" style="text-align: center;">${
                                                        UDI_Type[8]
                                                    }</option>
                                                    <option value="9" style="text-align: center;">${
                                                        UDI_Type[9]
                                                    }</option>
                                                    <option value="10" style="text-align: center;">${
                                                        UDI_Type[10]
                                                    }</option>
                                                    <option value="11" style="text-align: center;">${
                                                        UDI_Type[11]
                                                    }</option>
                                                    <option value="12" style="text-align: center;">${
                                                        UDI_Type[12]
                                                    }</option>
                                                    <option value="13" style="text-align: center;">${
                                                        UDI_Type[13]
                                                    }</option>
                                                    <option value="14" style="text-align: center;">${
                                                        UDI_Type[14]
                                                    }</option>
                                                    <option value="15" style="text-align: center;">${
                                                        UDI_Type[15]
                                                    }</option>
                                                    <option value="16" style="text-align: center;">${
                                                        UDI_Type[16]
                                                    }</option>
                                                    <option value="17" style="text-align: center;">${
                                                        UDI_Type[17]
                                                    }</option>
                                                    <option value="18" style="text-align: center;">${
                                                        UDI_Type[18]
                                                    }</option>
                                                </select>

                                                <label class="container-label">Contact function</label>
                                                <select id="${
                                                    object.Option.ID + digital_add
                                                }" style="text-align-last:left !important;">
                                                    <option value="0" selected style="text-align: center;">${
                                                        Contact_function_e[0]
                                                    }</option>
                                                    <option value="1" style="text-align: center;">${
                                                        Contact_function_e[1]
                                                    }</option>
                                                </select>

                                                <table class="sensor-values-table" style="width:320px; padding-top:12px;">
                                                    <tr>
                                                        <td class="td-left-aligned">Value:</td>
                                                        <td id="uind_value_placeholder" class="td-right-aligned">${
                                                            object.Value.Value
                                                        }</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <button class="action_set" onclick="configureParamValues('Modify_IO', ${
                                                object.Mode.ID
                                            })">Set</button>
                                        </div>
                                    `;

                    if (object.Mode.Value == "Analogue Input") {
                        document.getElementById("A_div").style.display = "block";
                        document.getElementById("D_div").style.display = "none";
                        enableOption(object.Type.ID + analog_add, object.Type.Value);
                        change_units((object.Type.ID + analog_add).toString(), 0); // required to hide correction if type is not co2 or rh
                    } else if (object.Mode.Value == "Digital Input") {
                        document.getElementById("A_div").style.display = "none";
                        document.getElementById("D_div").style.display = "block";
                        enableOption(object.Type.ID + digital_add, object.Type.Value);
                        enableOption(object.Option.ID + digital_add, object.Option.Value);
                    } else if (object.Mode.Value == "Not Set") {
                        document.getElementById("A_div").style.display = "none";
                        document.getElementById("D_div").style.display = "none";
                    }
                    enableOption(object.Mode.ID, object.Mode.Value);
                } else if (obj_length == 6) {
                    //EAT //RH
                    console.log("object = ", object);
                    io_to_modify.innerHTML = `
                                        <span class="header" onclick="openTab(event, 'Input')" style="cursor:pointer;">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>${object.LabelStr}
                                        </span>

                                        <div class="container">
                                            <label class="container-label">${object.EAT_Conf.Value}</label>
                                            <select id="${object.EAT_Conf.ID}" style="text-align-last:left !important;">
                                                <option value="0" selected style="text-align: center;">${UI_Status[0]}</option>
                                                <option value="1" style="text-align: center;">${UI_Status[1]}</option>
                                            </select>

                                            <label class="container-label">Sensor Correction</label>
                                            <span class="popup">
                                                <input id="${object.EAT_Correction.ID}" style="padding-left:20px;" type="number" value="${object.EAT_Correction.Value}" placeholder="0" min="-100" max="100"
                                                    onblur="imposeMinMax(this)" />
                                                <span class="popuptext"></span>
                                            </span>

                                            <table class="sensor-values-table" style="width:320px; padding-top:12px;">
                                                <tr>
                                                    <td class="td-left-aligned">Value:</td>
                                                    <td id= "${object.EAT_Value.ID}" class="td-right-aligned">${object.EAT_Value.Value}</td>
                                                </tr>
                                            </table>

                                            <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                        </div>
                                    `;
                    enableOption(object.EAT_Conf.ID, object.EAT_Conf.Value);
                } else if (obj_length == 5) {
                    //PRESSURE CARD
                    io_to_modify.innerHTML = `
                                        <span class="header" onclick="openTab(event, 'Input')" style="cursor:pointer;">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>${object.LabelStr}
                                        </span>

                                        <div class="container">
                                            <label class="container-label">Type</label>
                                            <select id="${object.Type.ID}" style="text-align-last:left !important;">
                                                <option value="0" selected style="text-align: center;">None</option>
                                                <option value="1" style="text-align: center;">Flow</option>
                                                <option value="2" style="text-align: center;">Filter clogging</option>
                                            </select>

                                            <label style="color:#002543; font-size:24px; font-family:Inter, Arial, Helvetica, sans-serif; font-weight:400;">Supply Air Fan</label>

                                            <label class="container-label">SAF Sensor correction</label>
                                            <span class="popup">
                                                <input id="${object.SAF.Correction.ID}" style="padding-left:20px;" type="number" value="${object.SAF.Correction.Value}" placeholder="0" min="-99" max="99"
                                                    onblur="imposeMinMax(this)" />
                                                <span class="popuptext"></span>
                                            </span>

                                            <table class="sensor-values-table" style="width:320px; padding-top:12px;">
                                                <tr>
                                                    <td class="td-left-aligned">SAF Value:</td>
                                                    <td id="${object.SAF.Value.ID}" class="td-right-aligned">${object.SAF.Value.Value}</td>
                                                </tr>
                                            </table>

                                            <label style="color:#002543; font-size:24px; font-family:Inter, Arial, Helvetica, sans-serif;">Extract Air Fan</label>

                                            <label class="container-label">EAF Sensor correction</label>
                                            <span class="popup">
                                                <input id="${object.EAF.Correction.ID}" style="padding-left:20px;" type="number" value ="${object.EAF.Correction.Value}" placeholder="0" min="-99" max="99"
                                                    onblur="imposeMinMax(this)" />
                                                <span class="popuptext"></span>
                                            </span>

                                            <table class="sensor-values-table" style="width:320px;padding-top:12px;">
                                                <tr>
                                                    <td class="td-left-aligned">EAF Value:</td>
                                                    <td id="${object.EAF.Value.ID}" class="td-right-aligned">${object.EAF.Value.Value}</td>
                                                </tr>
                                            </table>

                                            <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                        </div>
                                    `;
                    enableOption(object.Type.ID, object.Type.Value);
                } else if (obj_length == 3) {
                    //NOT SET
                    let type_id = convert_Mode_to_Type_ID(
                        object.Mode.ID,
                        getObjectKey(UniversalModeStr, object.Mode.Value)
                    );
                    let option_id = convert_Mode_to_Option_ID(
                        object.Mode.ID,
                        getObjectKey(UniversalModeStr, object.Mode.Value)
                    );

                    io_to_modify.innerHTML = `
                                        <span class="header" onclick="openTab(event, 'Input')" style="cursor:pointer;">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>${object.LabelStr}
                                        </span>

                                        <div class="container">
                                            <label class="container-label">Signal Type</label>
                                            <select id="${
                                                object.Mode.ID
                                            }" style="text-align-last:left !important;" onchange="Enable_Uin_divs(this);">
                                                <option value="0" selected style="text-align: center;">${
                                                    UniversalModeStr[0]
                                                }</option>
                                                <option value="1" style="text-align: center;">${
                                                    UniversalModeStr[1]
                                                }</option>
                                                <option value="2" style="text-align: center;">${
                                                    UniversalModeStr[2]
                                                }</option>
                                            </select>

                                            <div id="Not_Set_Div" style="display: none;"></div>

                                            <div id="A_div" style="display: none;">
                                                <label class="container-label">Input Type</label>
                                                <select id="${
                                                    type_id - 50
                                                }" style="text-align-last:left !important;" onchange="change_units(this.id,0)">
                                                    <option value="0" selected style="text-align: center;">${
                                                        UAI_Type[0]
                                                    }</option>
                                                    <option value="1" style="text-align: center;">${
                                                        UAI_Type[1]
                                                    }</option>
                                                    <option value="2" style="text-align: center;">${
                                                        UAI_Type[2]
                                                    }</option>
                                                    <option value="3" style="text-align: center;">${
                                                        UAI_Type[3]
                                                    }</option>
                                                    <option value="4" style="text-align: center;">${
                                                        UAI_Type[4]
                                                    }</option>
                                                    <option value="5" style="text-align: center;">${
                                                        UAI_Type[5]
                                                    }</option>
                                                </select>

                                                <div id ="Uin_correction">
                                                    <label id ="uin_units" class="container-label">Sensor Correction</label>
                                                    <span class="popup">
                                                        <input id="${
                                                            option_id - 50
                                                        }" style="padding-left:20px;" type="number" value="N/A" placeholder="0" min="-100" max="100" onblur="imposeMinMax(this)" />
                                                        <span class="popuptext"></span>
                                                    </span>
                                                </div>

                                                <table class="sensor-values-table" style="width:320px; padding-top:12px;">
                                                    <tr>
                                                        <td class="td-left-aligned">Value:</td>
                                                        <td id="uin_value_placeholder" class="td-right-aligned">N/A</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <div id="D_div" style="display: none;">
                                                <label class="container-label">Input Type</label>
                                                <select id="${type_id + 50}" style="text-align-last:left !important;">
                                                    <option value="0" selected style="text-align: center;">${
                                                        UDI_Type[0]
                                                    }</option>
                                                    <option value="1" style="text-align: center;">${
                                                        UDI_Type[1]
                                                    }</option>
                                                    <option value="2" style="text-align: center;">${
                                                        UDI_Type[2]
                                                    }</option>
                                                    <option value="3" style="text-align: center;">${
                                                        UDI_Type[3]
                                                    }</option>
                                                    <option value="4" style="text-align: center;">${
                                                        UDI_Type[4]
                                                    }</option>
                                                    <option value="5" style="text-align: center;">${
                                                        UDI_Type[5]
                                                    }</option>
                                                    <option value="6" style="text-align: center;">${
                                                        UDI_Type[6]
                                                    }</option>
                                                    <option value="7" style="text-align: center;">${
                                                        UDI_Type[7]
                                                    }</option>
                                                    <option value="8" style="text-align: center;">${
                                                        UDI_Type[8]
                                                    }</option>
                                                    <option value="9" style="text-align: center;">${
                                                        UDI_Type[9]
                                                    }</option>
                                                    <option value="10" style="text-align: center;">${
                                                        UDI_Type[10]
                                                    }</option>
                                                    <option value="11" style="text-align: center;">${
                                                        UDI_Type[11]
                                                    }</option>
                                                    <option value="12" style="text-align: center;">${
                                                        UDI_Type[12]
                                                    }</option>
                                                    <option value="13" style="text-align: center;">${
                                                        UDI_Type[13]
                                                    }</option>
                                                    <option value="14" style="text-align: center;">${
                                                        UDI_Type[14]
                                                    }</option>
                                                    <option value="15" style="text-align: center;">${
                                                        UDI_Type[15]
                                                    }</option>
                                                    <option value="16" style="text-align: center;">${
                                                        UDI_Type[16]
                                                    }</option>
                                                    <option value="17" style="text-align: center;">${
                                                        UDI_Type[17]
                                                    }</option>
                                                    <option value="18" style="text-align: center;">${
                                                        UDI_Type[18]
                                                    }</option>
                                                </select>

                                                <label class="container-label">Contact function</label>
                                                <select id="${option_id + 50}" style="text-align-last:left !important;">
                                                    <option value="0" selected style="text-align: center;">${
                                                        Contact_function_e[0]
                                                    }</option>
                                                    <option value="1" style="text-align: center;">${
                                                        Contact_function_e[1]
                                                    }</option>
                                                </select>

                                                <table class="sensor-values-table" style="width:320px";>
                                                    <tr>
                                                        <td class="td-left-aligned">Value:</td>
                                                        <td class="td-right-aligned">N/A</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                        </div>
                                    `;

                    if (object.Mode.Value == "Analogue Input") {
                        document.getElementById("A_div").style.display = "block";
                        document.getElementById("D_div").style.display = "none";
                        document.getElementById("Not_Set_Div").style.display = "none";
                        enableOption(object.Type.ID + analog_add, object.Type.Value);
                    } else if (object.Mode.Value == "Digital Input") {
                        document.getElementById("A_div").style.display = "none";
                        document.getElementById("D_div").style.display = "block";
                        document.getElementById("Not_Set_Div").style.display = "none";
                        enableOption(object.Type.ID + digital_add, object.Type.Value);
                        enableOption(object.Option.ID + digital_add, object.Option.Value);
                    } else if (object.Mode.Value == "Not Set") {
                        document.getElementById("Not_Set_Div").style.display = "block";
                        document.getElementById("A_div").style.display = "none";
                        document.getElementById("D_div").style.display = "none";
                    }
                    enableOption(object.Mode.ID, object.Mode.Value);
                }
                openTab(null, "Modify_IO");
            }

            function Enable_Uin_divs(param) {
                console.log("param = ", param);
                var mode_selected = param.options[param.selectedIndex].text;
                if (mode_selected == "Digital Input") {
                    document.getElementById(param.id).value = 2;
                    console.log("DIGITAL MODE SELECTED");
                    document.getElementById("D_div").style.display = "block";
                    document.getElementById("A_div").style.display = "none";
                    document.getElementById("Not_Set_Div").style.display = "none";
                } else if (mode_selected == "Analogue Input") {
                    document.getElementById(param.id).value = 1;
                    console.log("ANALOG MODE SELECTED");
                    document.getElementById("D_div").style.display = "none";
                    document.getElementById("A_div").style.display = "block";
                    document.getElementById("Not_Set_Div").style.display = "none";
                } else if (mode_selected == "Not Set") {
                    document.getElementById(param.id).value = 0;
                    console.log("NOT SET MODE SELECTED");
                    document.getElementById("D_div").style.display = "none";
                    document.getElementById("A_div").style.display = "none";
                    document.getElementById("Not_Set_Div").style.display = "block";
                }
            }

            function Clear_Analog_Output() {
                var generated_analog_output = document.getElementById("idAOUTStatus-config");
                generated_analog_output.innerHTML = "";
            }

            function Append_Analog_Output_obj(object) {
                const encodedObj = encodeURIComponent(JSON.stringify(object));

                let type_of_value_value = object.Type_Value.Value;
                let value_value = object.Value.Value;
                let value_units = object.Units;

                if (object.LabelStr != "SAF Output" && object.LabelStr != "EAF Output") {
                    if (object.Type.Value == "Inactive Output") {
                        // inactive input
                        type_of_value_value = "-";
                        value_value = "-";
                        value_units = "";
                    }
                }

                console.log("append analog output ");
                var obj_length = Object.keys(object).length;
                if (obj_length == 6) {
                    var generated_analog_output = document.getElementById("idAOUTStatus-config");
                    generated_analog_output.innerHTML += `
                                    <table class="sensor-values-table">
                                        <tr>
                                        <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                            <td style="text-align: right">
                                                <button style="border:none;background-color:inherit;" onclick="Expand_AOUT_selection('${encodedObj}')">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                </svg>
                                                </button>
                                            </td>
                                        </tr>

                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="td-left-aligned">Type:</td>
                                                <td class="td-right-aligned">${object.Type.Value}</td>
                                            </tr>

                                            <tr>
                                                <td class="td-left-aligned">Type of value:</td>
                                                <td class="td-right-aligned">${type_of_value_value} </td>
                                            </tr>

                                            <tr>
                                                <td class="td-left-aligned">Value:</td>
                                                <td class="td-right-aligned">${value_value} ${value_units}</td>
                                            </tr>
                                        </table>
                                    </table>
                                    <br>
                                `;
                }

                if (obj_length == 5) {
                    //SAF EAF
                    var generated_analog_output = document.getElementById("idAOUTStatus-config");
                    generated_analog_output.innerHTML += `
                                    <table class="sensor-values-table">
                                        <tr>
                                        <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                            <td style="text-align: right">
                                                <button style="border:none;background-color:inherit;" onclick="Expand_AOUT_selection('${encodedObj}')">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                </svg>
                                                </button>
                                            </td>
                                        </tr>

                                        <table class="sensor-values-table">
                                            <tr>
                                                <td class="td-left-aligned">Type of value:</td>
                                                <td class="td-right-aligned">${object.Type_Value.Value} </td>
                                            </tr>
                                            <tr>
                                                <td class="td-left-aligned">Value:</td>
                                                <td class="td-right-aligned">${object.Value.Value} ${value_units}</td>
                                            </tr>
                                        </table>
                                    </table>
                                    <br>
                                `;
                }
            }

            //TODO: How to assign unique ID's based on Modbus parameters excell document?
            function Expand_AOUT_selection(encodedObject) {
                let value_id_offset_auto = 0;
                let value_id_offset_manual = 0;

                const object = JSON.parse(decodeURIComponent(encodedObject));
                console.log("expanded object.Value.ID = ", object.Value.ID);

                let obj_length = Object.keys(object).length;
                let io_to_modify = document.getElementById("Modify_IO");

                if (obj_length == 6) {
                    if (object.Type_Value.Value == "Auto") {
                        console.log("initial value type is Auto");
                        value_id_offset_manual = 390;
                        if (object.LabelStr === "Triac Output") {
                            value_id_offset_manual = 11561;
                        }
                        //different offset if type is Triac
                    }

                    if (object.Type_Value.Value == "Manual") {
                        console.log("initial value type is Manual");
                        value_id_offset_auto = -390;
                    }

                    io_to_modify.innerHTML = `
                                        <span class="header" onclick="openTab(event, 'Output')" style="cursor:pointer;">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>${object.LabelStr}
                                        </span>
                                        <div class="container">
                                            <label class="container-label">Output Type</label>
                                            <select id = "${
                                                object.Type.ID
                                            }" style="text-align-last:left !important;" onchange="output_type_changed(this);">
                                                <option value="0" selected style="text-align: center;">${
                                                    OutputATypeStr[0]
                                                }</option>
                                                <option value="1" style="text-align: center;">${
                                                    OutputATypeStr[1]
                                                }</option>
                                                <option value="2" style="text-align: center;">${
                                                    OutputATypeStr[2]
                                                }</option>
                                                <option value="3" style="text-align: center;">${
                                                    OutputATypeStr[3]
                                                }</option>
                                                <option value="4" style="text-align: center;">${
                                                    OutputATypeStr[4]
                                                }</option>
                                                <option value="5" style="text-align: center;">${
                                                    OutputATypeStr[5]
                                                }</option>
                                                <option value="6" style="text-align: center;">${
                                                    OutputATypeStr[6]
                                                }</option>
                                            </select>

                                            <div id ="AO_type">
                                                <label class="container-label">Output voltage range</label>
                                                <select id = "13025" style="text-align-last:left !important;">
                                                    <option value="0" selected style="text-align: center;">0-10V</option>
                                                    <option value="1" style="text-align: center;">2-10V</option>
                                                    <option value="2" style="text-align: center;">10-0V</option>
                                                    <option value="3" style="text-align: center;">10-2V</option>
                                                </select>

                                                <label class="container-label">Low value (&deg;C)</label>
                                                <span class="popup">
                                                    <input id = "13030" style="padding-left:20px;" type="number" placeholder="12&deg;C" min="12" max="30"
                                                        onblur="imposeMinMax(this)" />
                                                    <span class="popuptext"></span>
                                                </span>

                                                <label class="container-label">High value (&deg;C)</label>
                                                <span class="popup">
                                                    <input id = "13031" style="padding-left:20px;" type="number" placeholder="40&deg;C" min="12" max="40"
                                                        onblur="imposeMinMax(this)" />
                                                    <span class="popuptext"></span>
                                                </span>

                                                <label class="container-label">Setpoint Type</label>
                                                <select id = "13032" style="text-align-last:left !important;">
                                                    <option value="0" selected style="text-align: center;">SATC</option>
                                                    <option value="1" style="text-align: center;">EATC/RATC</option>
                                                </select>
                                            </div>

                                            <label class="container-label">Value Type</label>
                                            <select id = "${
                                                object.Type_Value.ID
                                            }" style="text-align-last:left !important;" onchange="a_out_value_type_changed(this);">
                                                <option value="0" selected style="text-align: center;">Auto</option>
                                                <option value="1" style="text-align: center;">Manual</option>
                                            </select>

                                            <div id = "a_out_manual">
                                                <label class="container-label">Value (${object.Units})</label>
                                                <span class="popup">
                                                    <input id = ${
                                                        object.Value.ID + value_id_offset_manual
                                                    } style="padding-left:20px;" type="number" value ="${
                        object.Value.Value
                    }" placeholder="0" min="0" max="10" step = "0.1"
                                                        onblur="imposeMinMax(this)" />
                                                    <span class="popuptext"></span>
                                                </span>
                                            </div>

                                            <div id = "a_out_auto">
                                                <table class="sensor-values-table" style ="width:320px; padding-top:12px;">
                                                    <tr>
                                                        <td class="td-left-aligned">Value:</td>
                                                        <td id = ${
                                                            object.Value.ID + value_id_offset_auto
                                                        } class="td-right-aligned">${object.Value.Value} ${
                        object.Units
                    }</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                        </div>
                                    `;
                    console.log(" type id =", object.Type.ID);
                    console.log(" type value =", object.Type.Value);

                    enableOption(object.Type.ID, object.Type.Value);
                    enableOption(object.Type_Value.ID, object.Type_Value.Value);

                    if (object.Type_Value.Value == "Auto") {
                        document.getElementById("a_out_manual").style.display = "none";
                        document.getElementById("a_out_auto").style.display = "block";
                    } else if (object.Type_Value.Value == "Manual") {
                        document.getElementById("a_out_manual").style.display = "block";
                        document.getElementById("a_out_auto").style.display = "none";
                    }

                    if (object.LabelStr == "Triac Output") {
                        console.log("triac output expanded");
                        const mySelect = document.getElementById(object.Type.ID);
                        //set the disabled property for myselect options
                        mySelect.options[2].disabled = true;
                        mySelect.options[3].disabled = true;
                        mySelect.options[4].disabled = true;
                        mySelect.options[5].disabled = true;
                        mySelect.options[6].disabled = true;

                        //change min max of Value
                        object.Value.ID + value_id_offset_manual;
                        var triac_value_element = document.getElementById(object.Value.ID + value_id_offset_manual);
                        triac_value_element.setAttribute("max", 100);
                        triac_value_element.setAttribute("min", 0);
                        triac_value_element.setAttribute("step", 1);
                    } else {
                        var triac_value_element = document.getElementById(object.Value.ID + value_id_offset_manual);
                        triac_value_element.setAttribute("max", 10);
                        triac_value_element.setAttribute("min", 0);
                        triac_value_element.setAttribute("step", 0.1);
                    }

                    if (object.Type.Value == "AO Temperature Setpoint") {
                        document.getElementById("AO_type").style.display = "block";
                    } else {
                        document.getElementById("AO_type").style.display = "none";
                    }
                }
                if (obj_length == 5) {
                    //SAF EAF

                    if (object.Type_Value.Value == "Auto") {
                        console.log("initial value type is Auto");
                        value_id_offset_manual = -200;
                    }

                    if (object.Type_Value.Value == "Manual") {
                        console.log("initial value type is Manual");
                        value_id_offset_auto = +200;
                    }
                    console.log("value id if manual is selected = ", object.Value.ID + value_id_offset_manual);
                    console.log("value id if auto is selected = ", object.Value.ID + value_id_offset_auto);

                    io_to_modify.innerHTML = `
                                        <span class="header" onclick="openTab(event, 'Output')" style="cursor:pointer;">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>${object.LabelStr}
                                        </span>

                                        <div class="container">
                                            <label class="container-label">Value Type</label>
                                            <select id = "${
                                                object.Type_Value.ID
                                            }" style="text-align-last:left !important;" onchange="saf_eaf_out_value_type_changed(this);">
                                                <option value="0" selected style="text-align: center;">Auto</option>
                                                <option value="1" style="text-align: center;">Manual</option>
                                            </select>

                                            <div id = "saf_eaf_out_manual">
                                                <label class="container-label">Value (%)</label>
                                                <span class="popup">
                                                    <input id = ${
                                                        object.Value.ID + value_id_offset_manual
                                                    } style="padding-left:20px;" type="number" value ="${
                        object.Value.Value
                    }" placeholder="0" min="0" max="100" step ="1"
                                                        onblur="imposeMinMax(this)" />
                                                    <span class="popuptext"></span>
                                                </span>
                                            </div>

                                            <div id = "saf_eaf_out_auto">
                                                <table class="sensor-values-table" style ="width:320px; padding-top:12px;">
                                                    <tr>
                                                        <td class="td-left-aligned">Value:</td>
                                                        <td id = "${
                                                            object.Value.ID + value_id_offset_auto
                                                        }" class="td-right-aligned">${object.Value.Value} ${
                        object.Units
                    }</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                        </div>
                                    `;
                    enableOption(object.Type_Value.ID, object.Type_Value.Value);
                    if (object.Type_Value.Value == "Auto") {
                        document.getElementById("saf_eaf_out_manual").style.display = "none";
                        document.getElementById("saf_eaf_out_auto").style.display = "block";
                    } else if (object.Type_Value.Value == "Manual") {
                        document.getElementById("saf_eaf_out_manual").style.display = "block";
                        document.getElementById("saf_eaf_out_auto").style.display = "none";
                    }
                }
                openTab(null, "Modify_IO");
            }

            function saf_eaf_out_value_type_changed(sel) {
                var type = sel.options[sel.selectedIndex].text;
                if (type == "Auto") {
                    document.getElementById("saf_eaf_out_manual").style.display = "none";
                    document.getElementById("saf_eaf_out_auto").style.display = "block";
                } else if (type == "Manual") {
                    document.getElementById("saf_eaf_out_manual").style.display = "block";
                    document.getElementById("saf_eaf_out_auto").style.display = "none";
                }
            }

            function d_out_value_type_changed(sel) {
                var type = sel.options[sel.selectedIndex].text;
                if (type == "Auto") {
                    document.getElementById("d_out_manual").style.display = "none";
                    document.getElementById("d_out_auto").style.display = "block";
                } else if (type == "Manual") {
                    document.getElementById("d_out_manual").style.display = "block";
                    document.getElementById("d_out_auto").style.display = "none";
                }
            }

            function a_out_value_type_changed(sel) {
                var type = sel.options[sel.selectedIndex].text;
                if (type == "Auto") {
                    document.getElementById("a_out_manual").style.display = "none";
                    document.getElementById("a_out_auto").style.display = "block";
                } else if (type == "Manual") {
                    document.getElementById("a_out_manual").style.display = "block";
                    document.getElementById("a_out_auto").style.display = "none";
                }
            }

            function output_type_changed(sel) {
                var type = sel.options[sel.selectedIndex].text;
                console.log("output type changed");
                if (type == "AO Temperature Setpoint") {
                    document.getElementById("AO_type").style.display = "block";
                } else {
                    document.getElementById("AO_type").style.display = "none";
                }
            }

            function Clear_Digital_Output() {
                var generated_digital_output = document.getElementById("idDOUTStatus-config");
                generated_digital_output.innerHTML = "";
            }

            /**
             *
             * @param {*} Label
             * @param {*} Type
             * @param {*} Type_of_value
             * @param {*} Value
             */
            function Append_Digital_Output_obj(object) {
                var encodedObj = encodeURIComponent(JSON.stringify(object));
                var type_of_value_value = object.Type_Value.Value;
                var value_value = object.Value.Value;
                if (object.Type.Value == "Inactive Output") {
                    // inactive input
                    type_of_value_value = "-";
                    value_value = "-";
                }
                var generated_digital_output = document.getElementById("idDOUTStatus-config");
                generated_digital_output.innerHTML += `
                                <table class="sensor-values-table">
                                    <tr>
                                    <td class="top-item" style="width:90%;">${object.LabelStr}</td>
                                        <td style="text-align: right">
                                            <button style="border:none;background-color:inherit;"  onclick="Expand_DOUT_selection('${encodedObj}')">
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.0938 2.07812C19.2656 0.90625 21.1875 0.90625 22.3594 2.07812L22.9219 2.64062C24.0938 3.8125 24.0938 5.73438 22.9219 6.90625L12.6094 17.2188C12.1875 17.6406 11.6719 17.875 11.1562 18.0156L6.89062 19C6.65625 19.0469 6.375 19 6.1875 18.8125C6 18.625 5.95312 18.3438 6 18.1094L6.98438 13.8438C7.125 13.3281 7.35938 12.8125 7.78125 12.3906L18.0938 2.07812ZM21.2812 3.15625C20.7188 2.54688 19.7344 2.54688 19.1719 3.15625L17.9062 4.375L20.625 7.09375L21.8438 5.82812C22.4531 5.26562 22.4531 4.28125 21.8438 3.71875L21.2812 3.15625ZM8.4375 14.1719L7.73438 17.2656L10.7812 16.5625C11.0625 16.5156 11.3438 16.375 11.5312 16.1406L19.5469 8.125L16.875 5.45312L8.85938 13.4688C8.625 13.6562 8.48438 13.9375 8.4375 14.1719ZM9.75 4C10.125 4 10.5 4.375 10.5 4.75C10.5 5.17188 10.125 5.5 9.75 5.5H3.75C2.48438 5.5 1.5 6.53125 1.5 7.75V21.25C1.5 22.5156 2.48438 23.5 3.75 23.5H17.25C18.4688 23.5 19.5 22.5156 19.5 21.25V15.25C19.5 14.875 19.8281 14.5 20.25 14.5C20.625 14.5 21 14.875 21 15.25V21.25C21 23.3594 19.3125 25 17.25 25H3.75C1.64062 25 0 23.3594 0 21.25V7.75C0 5.6875 1.64062 4 3.75 4H9.75Z" fill="#004985"/>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>

                                    <table class="sensor-values-table">
                                        <tr>
                                            <td class="td-left-aligned">Type:</td>
                                            <td class="td-right-aligned">${object.Type.Value}</td>
                                        </tr>
                                        <tr>
                                            <td class="td-left-aligned">Type of value:</td>
                                            <td class="td-right-aligned">${type_of_value_value} </td>
                                        </tr>
                                        <tr>
                                            <td class="td-left-aligned">Value:</td>
                                            <td class="td-right-aligned">${value_value}</td>
                                        </tr>
                                    </table>
                                </table>
                                <br>
                            `;
            }

            //TODO: How to assign unique ID's based on Modbus parameters excell document?
            function Expand_DOUT_selection(encodedObject) {
                let object = JSON.parse(decodeURIComponent(encodedObject));
                let io_to_modify = document.getElementById("Modify_IO");

                //if type is manual, add +405 offset to value ID
                let value_id_offset_auto = 0;
                let value_id_offset_manual = 0;

                if (object.Type_Value.Value == "Auto") {
                    console.log("initial value type is Auto");
                    value_id_offset_manual = 405;
                }

                if (object.Type_Value.Value == "Manual") {
                    console.log("initial value type is Manual");
                    value_id_offset_auto = -405;
                }

                io_to_modify.innerHTML = `
                                    <span class="header" onclick="openTab(event, 'Output')" style="cursor:pointer;">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>${object.LabelStr}
                                    </span>
                                    <div class="container">
                                        <label class="container-label">Output Type</label>
                                        <select id = "${object.Type.ID}" style="text-align-last:left !important;">
                                            <option value="0" selected style="text-align: center;">${
                                                OutputDTypeStr[0]
                                            }</option>
                                            <option value="1" style="text-align: center;">${OutputDTypeStr[1]}</option>
                                            <option value="2" style="text-align: center;">${OutputDTypeStr[2]}</option>
                                            <option value="3" style="text-align: center;">${OutputDTypeStr[3]}</option>
                                            <option value="4" style="text-align: center;">${OutputDTypeStr[4]}</option>
                                            <option value="5" style="text-align: center;">${OutputDTypeStr[5]}</option>
                                            <option value="6" style="text-align: center;">${OutputDTypeStr[6]}</option>
                                            <option value="7" style="text-align: center;">${OutputDTypeStr[7]}</option>
                                            <option value="8" style="text-align: center;">${OutputDTypeStr[8]}</option>
                                            <option value="9" style="text-align: center;">${OutputDTypeStr[9]}</option>
                                            <option value="10" style="text-align: center;">${
                                                OutputDTypeStr[10]
                                            }</option>
                                            <option value="11" style="text-align: center;">${
                                                OutputDTypeStr[11]
                                            }</option>
                                            <option value="12" style="text-align: center;">${
                                                OutputDTypeStr[12]
                                            }</option>
                                            <option value="13" style="text-align: center;">${
                                                OutputDTypeStr[13]
                                            }</option>
                                            <option value="14" style="text-align: center;">${
                                                OutputDTypeStr[14]
                                            }</option>
                                            <option value="15" style="text-align: center;">${
                                                OutputDTypeStr[15]
                                            }</option>
                                            <option value="16" style="text-align: center;">${
                                                OutputDTypeStr[16]
                                            }</option>
                                        </select>

                                        <label class="container-label">Value Type</label>
                                        <select id = "${
                                            object.Type_Value.ID
                                        }" style="text-align-last:left !important;" onchange="d_out_value_type_changed(this)">
                                            <option value="0" selected style="text-align: center;">Auto</option>
                                            <option value="1" style="text-align: center;">Manual</option>
                                        </select>

                                        <div id = "d_out_manual">
                                            <label class="container-label">Value</label>
                                            <select id = "${
                                                object.Value.ID + value_id_offset_manual
                                            }" style="text-align-last:left !important;">
                                                <option value="0" selected style="text-align: center;">Off</option>
                                                <option value="1" style="text-align: center;">On</option>
                                            </select>
                                        </div>

                                        <div id = "d_out_auto">
                                            <table class="sensor-values-table" style ="width:320px; padding-top:12px;";>
                                                <tr>
                                                    <td class="td-left-aligned">Value:</td>
                                                    <td id="${
                                                        object.Value.ID + value_id_offset_auto
                                                    }" class="td-right-aligned">${object.Value.Value} ${
                    object.Units
                }</td>
                                                </tr>
                                            </table>
                                        </div>

                                        <button class="action_set" onclick="configureParamValues('Modify_IO')">Set</button>
                                    </div>
                                `;
                enableOption(object.Type.ID, object.Type.Value);
                enableOption(object.Type_Value.ID, object.Type_Value.Value);

                if (object.Type_Value.Value == "Auto") {
                    document.getElementById("d_out_manual").style.display = "none";
                    document.getElementById("d_out_auto").style.display = "block";
                } else if (object.Type_Value.Value == "Manual") {
                    document.getElementById("d_out_manual").style.display = "block";
                    document.getElementById("d_out_auto").style.display = "none";
                }
                openTab(null, "Modify_IO");
            }

            // this should recalculate ID's

            function Enable_div(i, option) {
                console.log("option = ", option);
                console.log("this = ", this);
                if (i == 0) {
                    // Not Set
                    console.log("Not Set selected");
                    document.getElementById("A_div").style.display = "none";
                    document.getElementById("D_div").style.display = "none";
                    document.getElementById("Not_set_div").style.display = "block";
                } else if (i == 1) {
                    //enable Analogue input div
                    console.log("Analog type selected");
                    document.getElementById("A_div").style.display = "block";
                    document.getElementById("D_div").style.display = "none";
                    document.getElementById("Not_set_div").style.display = "none";
                } else if (i == 2) {
                    //enable Digital input div
                    console.log("Digital type selected");
                    //change input type
                    document.getElementById("D_div").style.display = "block";
                    document.getElementById("A_div").style.display = "none";
                    document.getElementById("Not_set_div").style.display = "none";
                }
            }

            function enableOption(selectId, stringVariable) {
                var selectElement = document.getElementById(selectId);
                var options = selectElement.options;
                for (var i = 0; i < options.length; i++) {
                    var option = options[i];
                    if (option.innerHTML === stringVariable) {
                        console.log("Select string matched = ", option.innerHTML);
                        option.selected = true;
                        break;
                    }
                }
            }

            function enableOptionInDiv(tabName, selectId, stringVariable) {
                const tabWindow = document.getElementById(tabName);
                let selector_id = `[id="${selectId}"]`;
                let selectElem = tabWindow.querySelector(selector_id);
                console.log("enableOptionInDiv selectElem = ", selectElem);
                if (selectElem == null) {
                    console.log("Not a select");
                } else {
                    var options = selectElem.options;
                    for (var i = 0; i < options.length; i++) {
                        var option = options[i];
                        if (option.innerHTML === stringVariable) {
                            option.selected = true;
                            break;
                        }
                    }
                }
            }

            function enableOptionByValue(tabName, selectId, value) {
                console.log("enable option by value = ", value);

                const tabWindow = document.getElementById(tabName);
                let selector_id = `[id="${selectId}"]`;
                let selectElem = tabWindow.querySelector(selector_id);
                console.log("enableOptionInDiv selectElem = ", selectElem);
                if (selectElem == null) {
                    console.log("Not a select");
                } else {
                    var options = selectElem.options;
                    console.log("options = ", options);
                    for (var i = 0; i < options.length; i++) {
                        var option = options[i];
                        if (i == value) {
                            option.selected = true;
                            break;
                        }
                    }
                }
            }

            /*
                        function hideOptionsByValue(selectElement, valuesToHide) {
                            console.log("hide options by value");
                            const options = selectElement.options;
                            console.log("options = ", options);
                            for (let i = 0; i < options.length; i++) {
                                const option = options[i];
                                if (valuesToHide.includes(option.value)) {
                                    console.log("hide option = ", option.value);
                                    option.style.display = "none";
                                    option.style.hidden = true;
                                }
                            }
                        }
                        */

            /*
                         function unhideOptionsByValue(selectElement, valuesToHide) {
                            const options = selectElement.options;
                            for (let i = 0; i < options.length; i++) {
                                const option = options[i];
                                if (valuesToHide.includes(option.value)) {
                                    option.style.display = "block";
                                    option.style.hidden = true;
                                }
                            }
                        }
                        */

            function Clear_Sensor_values() {
                var sensor_values_temperature = document.getElementById("Sensor_values_temperatures");
                var Sensor_values_fan_control = document.getElementById("Sensor_values_fan_control");
                var Sensor_values_air_quality_control = document.getElementById("Sensor_values_air_quality_control");
                sensor_values_temperature.innerHTML = "";
                Sensor_values_fan_control.innerHTML = "";
                Sensor_values_air_quality_control.innerHTML = "";
            }

            function Append_Sensor_values_obj(object) {
                var generated_sensor_values = document.getElementById(object.Div_to_append);
                generated_sensor_values.innerHTML += `
                                    <table class="sensor-values-reworked">
                                        <tr>
                                            <td>${object.LabelStr}</td>
                                        </tr>
                                        <tr>
                                            <td class="item">${object.Value} ${object.Units}</td>
                                        </tr>
                                    </table>
                                `;
            }

            /**
             *
             * @param {*} id id of select input element
             * @param {*} type_id type_id used for parsing (cant match id but not in all cases)
             */
            function change_units(id, offset) {
                console.log("change units id = ", id);
                switch (id) {
                    //UNIVERSAL ANALOG
                    case "11200":
                    case "11201":
                    case "11202":
                    case "11203":
                    case "11204":
                    case "11205":
                        {
                            var type = document.getElementById(id).value;
                            console.log("Analog input type = ", type);
                            if (type == 1) {
                                document.getElementById("uin_units").innerHTML = "Sensor Correction (%)";
                                unhide_div("Uin_correction");
                                document.getElementById((Number(id) + 20).toString()).min = -9;
                                document.getElementById((Number(id) + 20).toString()).max = 9;
                                var rh_value_id = Number(id) + Number(offset) + 960;
                                Mb_read_and_update(rh_value_id, "uin_value_placeholder", "%");
                                document.getElementById((Number(id) + 20).toString()).value = 0;
                            } else if (type == 2) {
                                document.getElementById("uin_units").innerHTML = "Sensor Correction (ppm)";
                                unhide_div("Uin_correction");
                                document.getElementById((Number(id) + 20).toString()).min = -99;
                                document.getElementById((Number(id) + 20).toString()).max = 99;
                                var co2_value_id = Number(id) + Number(offset) + 950;
                                Mb_read_and_update(co2_value_id, "uin_value_placeholder", "ppm");
                                document.getElementById((Number(id) + 20).toString()).value = 0;
                                //change min max to -99 to 99
                            } else if (type == 3) {
                                hide_div("Uin_correction");
                                console.log("update 2101");
                                Mb_read_and_update(2100, "uin_value_placeholder", "V");
                            } else if (type == 4) {
                                hide_div("Uin_correction");
                                console.log("update 2101");
                                Mb_read_and_update(2101, "uin_value_placeholder", "V");
                            } else if (type == 5) {
                                hide_div("Uin_correction");
                                Mb_read_and_update(12404, "uin_value_placeholder", "V");
                            } else {
                                // inactive
                                hide_div("Uin_correction");
                                document.getElementById("uin_units").innerHTML = "Sensor Correction";
                            }
                        }
                        break;

                    //UNIVERSAL DIGITAL
                    case "11300":
                    case "11301":
                    case "11302":
                    case "11303":
                    case "11304":
                    case "11305":
                        {
                            var type = document.getElementById(id).value;
                            console.log("type = ", type);
                            if (type == 0) {
                                document.getElementById("uind_value_placeholder").innerHTML = "-";
                            }
                        }
                        break;

                    case "11000":
                    case "11001":
                    case "11002":
                    case "11003":
                    case "11004":
                    case "11005":
                    case "11006":
                        {
                            // find value based on type
                            var type = document.getElementById(id).value;
                            console.log("type = ", type);
                            if (type == 0) {
                                //OAT
                                document.getElementById("ain_value_placeholder").innerHTML = "-";
                            }
                            if (type == 1) {
                                //OAT
                                Mb_read_and_update(12101, "ain_value_placeholder");
                            } else if (type == 2) {
                                //SAT
                                Mb_read_and_update(12102, "ain_value_placeholder");
                            } else if (type == 3) {
                                //OHT
                                Mb_read_and_update(12107, "ain_value_placeholder");
                            } else if (type == 4) {
                                // FPT
                                Mb_read_and_update(12100, "ain_value_placeholder");
                            } else if (type == 5) {
                                // RAT
                                Mb_read_and_update(12103, "ain_value_placeholder");
                            } else if (type == 6) {
                                // EAT
                                Mb_read_and_update(12104, "ain_value_placeholder");
                            } else if (type == 7) {
                                // ECT
                                Mb_read_and_update(12105, "ain_value_placeholder");
                            } else if (type == 8) {
                                // EFT
                                Mb_read_and_update(12106, "ain_value_placeholder");
                            }
                        }
                        break;
                }
            }
            <!-- END OF IO.JS-->

            <!-- START OF SCHEDULE.JS-->

            var schedule_index = 0;
            var schedule_arr = [];

            //JS implementation of C struct
            function schedules(index, days, p1_time, p2_time) {
                this.index = index;
                this.days = days;
                this.p1_time = p1_time;
                this.p2_time = p2_time;
            }

            is_schedule_valid("new_schedule");

            //ADDING Schedule

            /*
                        var register_5100 = 1;
                        var register_5101 = 1;
                        var day1_period1_time = "&nbsp";
                        var day1_period2_time = "&nbsp";

                        if (register_5100 == 1) {
                            var REG_WS_DAY1_PRD1_START_H = 13; //read 5002
                            var REG_WS_DAY1_PRD1_START_M = 50; //read 5003
                            var REG_WS_DAY1_PRD1_END_H = 14; //read 5004
                            var REG_WS_DAY1_PRD1_END_M = 32; //read 5005
                            day1_period1_time =
                                REG_WS_DAY1_PRD1_START_H +
                                ":" +
                                REG_WS_DAY1_PRD1_START_M +
                                "-" +
                                REG_WS_DAY1_PRD1_END_H +
                                ":" +
                                REG_WS_DAY1_PRD1_END_M;
                        }
                        if (register_5101 == 1) {
                            var REG_WS_DAY1_PRD2_START_H = 15; //read 5006
                            var REG_WS_DAY1_PRD2_START_M = 50; //read 5007
                            var REG_WS_DAY1_PRD2_END_H = 16; //read 5008
                            var REG_WS_DAY1_PRD2_END_M = 32; //read 5009
                            day1_period2_time =
                                REG_WS_DAY1_PRD2_START_H +
                                ":" +
                                REG_WS_DAY1_PRD2_START_M +
                                "-" +
                                REG_WS_DAY1_PRD2_END_H +
                                ":" +
                                REG_WS_DAY1_PRD2_END_M;
                        }
                        //day1_period1_time and day1_period2_time are strings in the following format : 'HH:MM-HH:MM'
                        var schedule1 = new schedules(schedule_index, ["Mon", "Fri"], day1_period1_time, day1_period2_time);
                        schedule_arr.push(schedule1);
                        generate_new_schedule(schedule1.index, schedule1.days, schedule1.p1_time, schedule1.p2_time);

                        var schedule2 = new schedules(schedule_index, ["Mon", "Fri"], day1_period1_time, day1_period2_time);
                        schedule_arr.push(schedule2);
                        generate_new_schedule(schedule2.index, schedule2.days, schedule2.p1_time, schedule2.p2_time);

                        var schedule3 = new schedules(schedule_index, ["Mon", "Tue"], day1_period1_time, day1_period2_time);
                        schedule_arr.push(schedule3);
                        generate_new_schedule(schedule3.index, schedule3.days, schedule3.p1_time, schedule3.p2_time);
                        */

            //remove_all_schedules();

            /**
             * period_enabled function is used to enable/disable the Period 1 and Period 2 using switches. It is very important to note that
             * When the period is enabled, the schedule validity check must be performed straight away to ensure it is not possible to save schedule with default
             * start and end times ( 12:00 - 12:00)
             * In order to determine if period1 or period2 is enabled, we check if period1_start or period2_start elements are hidden or not
             * @param {*} param
             */
            function period_enabled(param) {
                var id = param.id;
                console.log("param id = ", id);
                if (param.checked == true) {
                    unhide_div(id + "_div");
                } else if (param.checked == false) {
                    hide_div(id + "_div");
                }
                if (param.id == "p1" || param.id == "p2") {
                    is_schedule_valid("new_schedule");
                } else if (param.id == "p1_modify" || param.id == "p2_modify") {
                    is_schedule_valid("custom_schedule");
                }
            }

            function is_schedule_valid(param) {
                if (param == "new_schedule") {
                    var period1_start = document.getElementById("p1_start").value;
                    var period1_end = document.getElementById("p1_end").value;
                    var period2_start = document.getElementById("p2_start").value;
                    var period2_end = document.getElementById("p2_end").value;
                    if (document.getElementById("p1").checked == true) {
                        if (period1_start >= period1_end) {
                            document.getElementById("save_schedule_btn").disabled = true;
                        } else {
                            document.getElementById("save_schedule_btn").disabled = false;
                        }
                    }

                    if (document.getElementById("p2").checked == true) {
                        if (period2_start >= period2_end) {
                            document.getElementById("save_schedule_btn").disabled = true;
                        } else if (period2_start <= period1_end) {
                            document.getElementById("save_schedule_btn").disabled = true;
                        } else {
                            document.getElementById("save_schedule_btn").disabled = false;
                        }
                    }
                } else if (param == "custom_schedule") {
                    var period1_start_modify = document.getElementById("p1_modify_start").value;
                    var period1_end_modify = document.getElementById("p1_modify_end").value;
                    var period2_start_modify = document.getElementById("p2_modify_start").value;
                    var period2_end_modify = document.getElementById("p2_modify_end").value;
                    if (document.getElementById("p1_modify").checked == true) {
                        if (period1_start_modify >= period1_end_modify) {
                            document.getElementById("save_schedule_btn_modify").disabled = true;
                        } else {
                            document.getElementById("save_schedule_btn_modify").disabled = false;
                        }
                    }

                    if (document.getElementById("p2_modify").checked == true) {
                        //period 2 should also not overlap period 1

                        if (period2_start_modify >= period2_end_modify) {
                            document.getElementById("save_schedule_btn_modify").disabled = true;
                        } else if (period2_start_modify <= period1_end_modify) {
                            document.getElementById("save_schedule_btn_modify").disabled = true;
                        } else {
                            document.getElementById("save_schedule_btn_modify").disabled = false;
                        }
                    }
                }
            }

            /**
             * add_new_schedule() function needs to know what days and period has been selected to add a new schedule
             * Adding a new schedule is only allowed if valid period1 AND/OR period2 schedules are selected.
             *
             */
            function add_new_schedule() {
                // check if atleast 1 day is selected
                if (Count_selected_days() == 0) {
                    window.alert("Select atleast one day");
                    return;
                }
                var period1_schedule_time = "&nbsp";
                var period2_schedule_time = "&nbsp";

                if (document.getElementById("p1").checked == true) {
                    period1_schedule_time =
                        document.getElementById("p1_start").value + "-" + document.getElementById("p1_end").value;
                    console.log("period1 schedule time = ", period1_schedule_time);
                }

                if (document.getElementById("p2").checked == true) {
                    period2_schedule_time =
                        document.getElementById("p2_start").value + "-" + document.getElementById("p2_end").value;
                    console.log("period2 schedule time = ", period2_schedule_time);
                }
                var schedule = new schedules(
                    schedule_index,
                    SelectActiveDays(),
                    period1_schedule_time,
                    period2_schedule_time
                );
                schedule_arr.push(schedule);
                generate_new_schedule(schedule.index, schedule.days, schedule.p1_time, schedule.p2_time);

                openTab(null, "Week Schedule");
            }

            /**
             * If REG_WS_DAY1_PRD1_ENABLED, that means Monday is enabled, read the following registers:
             * REG_WS_DAY1_PRD1_START_H (Hours start)
             * REG_WS_DAY1_PRD1_START_M (Minute start)
             * REG_WS_DAY1_PRD1_END_H (Hour end)
             * REG_WS_DAY1_PRD1_END_M (Minute end)

             * @param {*} schedule_ID ID to identify the schedule
             * @param {*} days days list
             * @param {*} period1_time period1 time that has been formatted by concatenating start and end times
             * @param {*} period2_time period2 time that has been formatted by concatenating start and end times
             */
            //TODO: How to generate a new schedule depending on MODBUS registers (excell table)
            function generate_new_schedule(schedule_ID, days, period1_time, period2_time) {
                if (schedule_index == 0) {
                    document.getElementById("new_schedule_added").innerHTML = "";
                }
                days_array = days.join(", "); // Update the content with the selected days
                new_schedule_added = document.getElementById("new_schedule_added");
                new_schedule_added.innerHTML += `
                <table style = "margin-bottom:20px;"class="schedule" id ="schedule_num${schedule_ID}">
                    <tr>
                        <td colspan="2" style = "font-size:24px;">Schedule ${schedule_ID + 1}</td>
                        <td style = "text-align:right; align-content:right;">
                            <button style="border:none;background:inherit; color:#004985;"onclick="remove_schedule(${schedule_ID})">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 6H5H21" stroke="#004985" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#004985" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <td colspan="3" id = "schedule${schedule_ID}_days">${days}</td>
                    </tr>

                    <tr>
                        <td style = "font-size:18px;" id = "period1_${schedule_ID}_time">${period1_time}</td>
                        <td style = "font-size:18px;" id = "period2_${schedule_ID}_time">${period2_time}</td>
                        <td style = "text-align:right; align-content:right;">
                            <button style="border:none;background: inherit; color: #004985;"
                                onclick="modify_schedule(${schedule_ID})">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#004985" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="#004985" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                        </button>
                        </td>
                    </tr>
                </table>
                `;
                schedule_index++;
                if (schedule_index < 1) {
                    document.getElementById("new_schedule_added").innerHTML = "";
                }
            }

            function set_schedule() {
                console.log("set schedule clicked");
            }

            function remove_all_schedules() {
                for (var i = 0; i < schedule_arr.length; i++) {
                    var table_to_remove = document.getElementById("schedule_num" + i);
                    table_to_remove.remove();
                    schedule_index = 0;
                }
            }

            //index starts from 0, but schedule number starts from 1
            function remove_schedule(index_to_remove) {
                console.log("remove schedule index =", index_to_remove);
                //delete all schedules because we need to reorganize them
                for (var i = 0; i < schedule_arr.length; i++) {
                    var table_to_remove = document.getElementById("schedule_num" + i);
                    table_to_remove.remove();
                    schedule_index = 0;
                }

                const x = schedule_arr.splice(index_to_remove, 1);
                var num_to_reorganize = schedule_arr.length - index_to_remove;
                var start_index = index_to_remove;

                for (var i = 0; i < num_to_reorganize; i++) {
                    schedule_arr[start_index + i].index = start_index + i;
                }

                for (var i = 0; i < schedule_arr.length; i++) {
                    generate_new_schedule(
                        schedule_arr[i].index,
                        schedule_arr[i].days,
                        schedule_arr[i].p1_time,
                        schedule_arr[i].p2_time
                    );
                }
                if (schedule_index == 0) {
                    document.getElementById("new_schedule_added").innerHTML = "This week schedule is empty";
                }
            }

            function modify_schedule(param) {
                //e
                console.log("modify schedule ID =", param);
                console.log("test id = ", "period1" + "_" + param + "_time");
                var selected_period1_time = document.getElementById("period1" + "_" + param + "_time").innerHTML;
                var selected_period2_time = document.getElementById("period2" + "_" + param + "_time").innerHTML;
                var selected_schedule_days = document.getElementById("schedule" + param + "_days").innerHTML;

                var period1_start;
                var period1_end;
                var period2_start;
                var period2_end;

                console.log("selected_period1_time = ", selected_period1_time);
                console.log("selected_period2_time = ", selected_period2_time);
                console.log("selected_schedule_days = ", selected_schedule_days);
                days_array = textToList(selected_schedule_days);
                console.log("days_array = ", days_array);
                //deactivate all days except selected schedule days

                if (selected_period1_time != "&nbsp;") {
                    var time_1 = selected_period1_time.split("-");
                    period1_start = time_1[0].replace(/(\r\n|\n|\r)/gm, "");
                    period1_end = time_1[1].replace(/(\r\n|\n|\r)/gm, "");
                }

                if (selected_period2_time != "&nbsp;") {
                    var time_2 = selected_period2_time.split("-");
                    period2_start = time_2[0].replace(/(\r\n|\n|\r)/gm, "");
                    period2_end = time_2[1].replace(/(\r\n|\n|\r)/gm, "");
                }

                console.log("period1 start time = ", period1_start);
                console.log("period1 end time = ", period1_end);

                console.log("period2 start time = ", period2_start);
                console.log("period2 end time = ", period2_end);

                document.getElementById("schedule_number").innerHTML = `
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M25.3327 16H6.66602"
                    stroke="#004985"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M15.9993 25.3334L6.66602 16L15.9993 6.66669"
                    stroke="#004985"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            Schedule ${param + 1}`;

                var schedule_to_modify = document.getElementById("schedule_to_modify");
                schedule_to_modify.innerHTML = `
                <h style="font-size: 24px; color: #002543; font-family: Inter, Arial, Helvetica, sans-serif"
                >Days</h
            >

                <div class="weekDays-selector">
                    <input type="checkbox" id="weekday_modify-Mon" class="weekday_modify" />
                    <label for="weekday_modify-Mon">Mon</label>
                    <input type="checkbox" id="weekday_modify-Tue" class="weekday_modify" />
                    <label for="weekday_modify-Tue">Tue</label>
                    <input type="checkbox" id="weekday_modify-Wed" class="weekday_modify" />
                    <label for="weekday_modify-Wed">Wed</label>
                    <input type="checkbox" id="weekday_modify-Thu" class="weekday_modify" />
                    <label for="weekday_modify-Thu">Thu</label>
                    <input type="checkbox" id="weekday_modify-Fri" class="weekday_modify" />
                    <label for="weekday_modify-Fri">Fri</label>
                    <input type="checkbox" id="weekday_modify-Sat" class="weekday_modify" />
                    <label for="weekday_modify-Sat">Sat</label>
                    <input type="checkbox" id="weekday_modify-Sun" class="weekday_modify" />
                    <label for="weekday_modify-Sun">Sun</label>
                </div>

                <table class="schedule_periods_table">
                    <tr>
                    <td> Schedule ${param}</td>
                    </tr>
                </table>

                    <table class="schedule_periods_table">
                        <tr>
                            <td style="min-width: 100px;">Period1</td>
                            <td>
                                <label style="margin-top: 15px;" class="switch">
                                    <input type="checkbox" id="p1_modify" onchange="period_enabled(this)">
                                    <span class="slider round"></span>
                                </label>
                            </td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>

                    <div id = "p1_modify_div">
                    <table class="schedule_periods_table">
                        <tr>
                            <td>
                                <label for="p1_modify_start" id="p1_modify_start_label">Start time </label>
                                <input id="p1_modify_start" type="time" name="p1_modify_start" value="${period1_start}"
                                    onchange="is_schedule_valid('custom_schedule')" />
                            </td>
                            <td>
                                <label for="p1_modify_end" id="p1_modify_end_label">End time </label>
                                <input id="p1_modify_end" type="time" name="p1_modify_end" value="${period1_end}"
                                    onchange="is_schedule_valid('custom_schedule')" />
                            </td>
                        </tr>
                    </table>
                    </div>

                    <table class="schedule_periods_table">
                        <tr>
                            <td style="min-width: 100px;">Period2</td>
                            <td>
                                <label style="margin-top: 15px;" class="switch">
                                <input type="checkbox" id="p2_modify" onchange="period_enabled(this)">
                                    <span class="slider round"></span>
                                </label>
                            </td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>

                    <div id = "p2_modify_div">
                    <table class="schedule_periods_table">
                        <tr>
                            <td>
                                <label for="p2_modify_start" id="p2_modify_start_label">Start time </label>
                                <input id="p2_modify_start" type="time" name="p2_modify_start" value="${period2_start}"
                                    onchange="is_schedule_valid('custom_schedule')" />
                            </td>
                            <td>
                                <label for="p2_modify_end" id="p2_modify_end_label">End time </label>
                                <input id="p2_modify_end" type="time" name="p2_modify_end" value="${period2_end}"
                                    onchange="is_schedule_valid('custom_schedule')" />
                            </td>
                        </tr>
                    </table>
                    </div>



                <div style="width:500px; height:52px; text-align:left; display:flex; flex-direction:row; padding-top:20px;">
                <button
                    style="width:72px; height:52px; display:inline-flex; align-items: center; justify-content: center;"
                    class="systemair-button-inactive" onclick="openTab(event, 'Week Schedule')">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.3327 16H6.66602" stroke="#004985" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M15.9993 25.3334L6.66602 16L15.9993 6.66669" stroke="#004985" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>


                <button id="save_schedule_btn_modify"
                    style="margin-left:20px;width:232px; height:52px; display:inline-flex; align-items: center; justify-content: center;"
                    class="systemair-button-active" onclick="modify_existing_schedule(${param})">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    Save
                </button>
                </div>
                <br>
                `;

                if (selected_period1_time != "&nbsp;") {
                    document.getElementById("p1_modify").click();
                } else {
                    hide_div("p1_modify_div");
                }
                if (selected_period2_time != "&nbsp;") {
                    document.getElementById("p2_modify").click();
                } else {
                    hide_div("p2_modify_div");
                }

                enableCheckboxesByList(days_array);

                openTab(null, "Custom Schedule");
            }

            function modify_existing_schedule(schedule_id) {
                console.log("modify schedule = ", schedule_id);

                var period1_schedule_time = "&nbsp";
                var period2_schedule_time = "&nbsp";

                if (document.getElementById("p1_modify").checked == true) {
                    period1_schedule_time =
                        document.getElementById("p1_modify_start").value +
                        "-" +
                        document.getElementById("p1_modify_end").value;
                    console.log("period1_modify schedule time = ", period1_schedule_time);
                }

                if (document.getElementById("p2_modify").checked == true) {
                    period2_schedule_time =
                        document.getElementById("p2_modify_start").value +
                        "-" +
                        document.getElementById("p2_modify_end").value;
                    console.log("period2_modify schedule time = ", period2_schedule_time);
                }
                console.log("selected modify days = ", SelectActiveDays_modify());

                remove_schedule(schedule_id); //remove the schedule id and recraete the new one

                var schedule = new schedules(
                    schedule_index,
                    SelectActiveDays_modify(),
                    period1_schedule_time,
                    period2_schedule_time
                );
                schedule_arr.push(schedule);
                generate_new_schedule(schedule.index, schedule.days, schedule.p1_time, schedule.p2_time);
                openTab(null, "Week Schedule");
            }

            function Count_selected_days(param) {
                console.log("update weekday checkbox param = ", param);
                const checkboxes = document.querySelectorAll(".weekday_main:checked");
                if (checkboxes.length > 0) {
                    console.log("Day selected");
                    return checkboxes.length;
                } else {
                    console.log("None selected");
                    return 0;
                }
            }

            function SelectActiveDays(param) {
                const checkboxes = document.querySelectorAll(".weekday_main:checked");
                const selectedDays = Array.from(checkboxes).map((checkbox) => checkbox.id.replace("weekday_main-", ""));
                return selectedDays;
            }

            function SelectActiveDays_modify(param) {
                const checkboxes = document.querySelectorAll(".weekday_modify:checked");
                const selectedDays = Array.from(checkboxes).map((checkbox) =>
                    checkbox.id.replace("weekday_modify-", "")
                );
                return selectedDays;
            }

            function uncheckAllDaysCheckboxes() {
                var checkboxes = document.querySelectorAll(".weekday_main");
                checkboxes.forEach(function (checkbox) {
                    checkbox.checked = false;
                });
            }

            //this is used for custom schedule so we use .weekday_modify
            function enableCheckboxesByList(daysToEnable) {
                var checkboxes = document.querySelectorAll(".weekday_modify");

                checkboxes.forEach(function (checkbox) {
                    var day = checkbox.id.replace("weekday_modify-", "");

                    if (daysToEnable.includes(day)) {
                        checkbox.checked = true;
                    } else {
                        checkbox.checked = false;
                    }
                });
            }

            function textToList(text) {
                return text.split(",").map((day) => day.trim());
            }

            <!-- END OF SCHEDULE.JS-->

            <!-- START OF SCRIPTS.JS-->

            /*********************
             * Menu items update *
             *********************/
            var modeWiFi;

            var active_item_id = 0;
            var co2_counter = 0; // variable to keep track of co2 in demand control
            var rh_counter = 0; // variable to keep track of co2 in demand control
            var freecooling_start_hr = 0;
            var freecooling_start_min = 0;
            var freecooling_end_hr = 0;
            var freecooling_end_min = 0;

            function setDate(year, month, day) {
                // Zero-pad month and day if they are single digits
                const monthStr = month < 10 ? `0${month}` : month.toString();
                const dayStr = day < 10 ? `0${day}` : day.toString();

                // Set the formatted date as the value of the input element
                document.getElementById("date-input").value = `${year}-${monthStr}-${dayStr}`;
            }

            function init() {
                unhide_div("p1_div");
                hide_div("p2_div");

                document.getElementById("analog_out_config").click();
                document.getElementById("analog_in_config").click();
                document.getElementById("wifi1").click();

                var unit_backups_visibility = document.getElementById("unit_backups_btn");
                unit_backups_visibility.setAttribute("hidden", "hidden");
            }

            setTimeout(menuUpdate, 5000);

            function menuUpdate() {
                let requestStr = "menu";
                let xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);

                        const responseJson = JSON.parse(this.responseText);
                        if (typeof responseJson === "object") {
                            let cfg_status = responseJson["cfg_status"];
                            console.log("cfg status = ", cfg_status);
                            if (cfg_status == 2) {
                                unhide_div("download_configuration");
                            }
                            if (cfg_status == 0 || cfg_status == 1) {
                                hide_div("download_configuration");
                            }
                            let mac_stat = document.getElementById("idMac");
                            // var mb_stat = document.getElementById("idMbStat");
                            // var cloud_stat = document.getElementById("idCloudStat");
                            // console.log(responseJson);
                            // console.log(responseJson.mac);
                            // console.log(responseJson.mb);
                            // console.log(responseJson.cloud);
                            mac_stat.innerHTML = "MAC: " + responseJson.mac;
                            // if (responseJson.mb == "1") {
                            //   mb_stat.innerHTML =
                            //     'Connected <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                            //   mb_stat.className = "green";
                            // } else {
                            //   mb_stat.innerHTML =
                            //     'Disconnected <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
                            //   mb_stat.className = "red";
                            // }
                            // if (responseJson.cloud == "1") {
                            //   cloud_stat.innerHTML =
                            //     'Online <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                            //   cloud_stat.className = "green";
                            // } else {
                            //   cloud_stat.innerHTML =
                            //     'Offline <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
                            //   cloud_stat.className = "red";
                            // }
                            modeWiFi = responseJson.mode;
                        } else {
                            // Add check if response is not JSON format
                            alert("Error: " + this.responseText);
                        }
                    }
                };
                console.log("REQ STR: " + requestStr);
                xhttp.open("GET", requestStr, true);
                xhttp.send();
                // setTimeout(menuUpdate, 5000);
            }

            /******************************
             * Mobile menu visibility control *
             ******************************/
            const mobileViewWidthPx = 768;
            let showMenu = false;
            const headerMenuClose = document.getElementById("header-menu-close");
            const headerMenuHamburger = document.getElementById("header-menu-hamburger");
            const menu = document.getElementById("menu");

            window.addEventListener("resize", checkIfMobileView);
            checkIfMobileView();
            function checkIfMobileView() {
                if (document.body.clientWidth > mobileViewWidthPx && showMenu) {
                    menu.classList.add("menu-mobile-opened");
                }
            }

            function openMobileMenu() {
                if (!showMenu) {
                    menu.classList.add("menu-mobile-opened");
                    showMenu = true;
                    headerMenuHamburger.style.display = "none";
                    headerMenuClose.style.display = "block";
                } else {
                    menu.classList.remove("menu-mobile-opened");
                    showMenu = false;
                    headerMenuClose.style.display = "none";
                    headerMenuHamburger.style.display = "block";
                }
            }

            /***************
                        * Tab selector *
                        // Should work differently based on whether it is mobile or desktop web
                        ****************/
            function openTab(evt, tabName, closeMenu = false) {
                if (tabName === "New Schedule") {
                    uncheckAllDaysCheckboxes();
                    // set start time and end time to 1:30PM as default everytime the tab is menu-mobile-opened
                    document.getElementById("p1_start").value = "13:30";
                    document.getElementById("p1_end").value = "13:30";
                    // everytime the new schedule is opened, only Period1 should be enabled
                    if (document.getElementById("p1").checked == true) {
                        console.log("p1 is already checked");
                        is_schedule_valid("new_schedule");
                    } else {
                        console.log("p1 is disabled, enabling it by default");
                        document.getElementById("p1").click();
                    }

                    if (document.getElementById("p2").checked == true) {
                        console.log("p2 is checked, disabling it");
                        document.getElementById("p2").click();
                    } else {
                        console.log("no need to do anything, p2 is disabled");
                        // do nothing
                    }
                }

                if (closeMenu && document.body.clientWidth <= mobileViewWidthPx) {
                    menu.classList.remove("menu-mobile-opened");
                    headerMenuHamburger.style.display = "block";
                    headerMenuClose.style.display = "none";
                    showMenu = false;
                }

                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                updateTabValues(tabName);
                /* Check what can be done here to make tab look pretty */
                document.getElementById(tabName).style.display = "block";
                //add 'active' class if element doesn't have it, otherwhise do nothing
                if (!evt.currentTarget.classList.contains("active")) evt.currentTarget.className += " active";
            }

            // Get the element with id="defaultOpen" and click on it
            document.getElementById("idDefaultOpen").click();

            /************************
             * Button color control *
             ************************/
            // collect common elements
            var regInput = document.getElementById("regId");
            var valInput = document.getElementById("regVal");

            function btnColor() {
                var actRead = document.getElementById("idRead");
                var actWrite = document.getElementById("idWrite");

                if (!regInput.validity.valid || regInput.value == "") {
                    actRead.disabled = true;
                    actWrite.disabled = true;
                    if (!regInput.validity.valid) {
                        var rangeMin = regInput.getAttribute("min");
                        var rangeMax = regInput.getAttribute("max");
                        var popUp = regInput.parentNode.querySelector(".popuptext");
                        if (!popUp.classList.contains("show")) {
                            popUp.innerHTML = `Select value in range [${rangeMin} : ${rangeMax}]`;
                            popUp.classList.add("show");
                            setTimeout(() => {
                                popUp.classList.remove("show");
                            }, 4000);
                        }
                    }
                } else {
                    actRead.disabled = false;
                    if (valInput.value == "") {
                        actWrite.disabled = true;
                    } else {
                        actWrite.disabled = false;
                    }
                }
            }

            function imposeMinMax(elemToValidate) {
                console.log("imposeMinMax");
                var popUp = elemToValidate.parentNode.querySelector(".popuptext");

                var rangeMin = parseFloat(elemToValidate.getAttribute("min"));
                var rangeMax = parseFloat(elemToValidate.getAttribute("max"));
                var step = parseFloat(elemToValidate.getAttribute("step")); // Get the step attribute
                var value = parseFloat(elemToValidate.value);

                if (!popUp) {
                    // If the value is higher than max, set it to the highest value

                    // Check min and max attributes
                    if (elemToValidate.value !== "") {
                        if (parseInt(elemToValidate.value) < parseInt(elemToValidate.min)) {
                            elemToValidate.value = elemToValidate.min;
                        }
                        if (parseInt(elemToValidate.value) > parseInt(elemToValidate.max)) {
                            elemToValidate.value = elemToValidate.max;
                        }
                    } else {
                        elemToValidate.value = elemToValidate.min;
                    }
                } else {
                    if (!isNaN(value) && (value < rangeMin || value > rangeMax)) {
                        if (!popUp.classList.contains("show")) {
                            popUp.innerHTML = `Enter value in range [${rangeMin} : ${rangeMax}]`;
                            popUp.classList.add("show");
                            setTimeout(() => {
                                popUp.classList.remove("show");
                            }, 4000);
                        }
                    }
                    if (elemToValidate.value != "") {
                        if (parseInt(elemToValidate.value) < parseInt(elemToValidate.min)) {
                            elemToValidate.value = elemToValidate.min;
                        }
                        if (parseInt(elemToValidate.value) > parseInt(elemToValidate.max)) {
                            elemToValidate.value = elemToValidate.max;
                        }
                    }
                    if (step) {
                        elemToValidate.value = roundToStep(elemToValidate.value, step);
                    }
                }
            }

            function isStepValid(value, step) {
                return Math.abs(Math.round(value / step) * step - value) < Number.EPSILON;
            }

            function roundToStep(value, step) {
                const roundedValue = Math.round(value / step) * step;
                const decimals = step.toString().split(".")[1]?.length || 0; // Get the number of decimal places in the step
                return parseFloat(roundedValue.toFixed(decimals));
            }
            /******************************
             * Content visibility control *
             ******************************/
            function toggleView() {
                var groupset = document.getElementById("idHiddenContent");
                var dropdown = document.getElementById("1273");
                var cfg_percent = document.getElementsByClassName("percentage");
                var cfg_rpm = document.getElementsByClassName("rpm");
                var i, show_percent, show_rpm;
                if (dropdown.value == "0") {
                    groupset.style.visibility = "hidden";
                    show_percent = "flex";
                    show_rpm = "none";
                } else {
                    groupset.style.visibility = "visible";
                    show_percent = "none";
                    show_rpm = "flex";
                }

                for (i = 0; i < cfg_percent.length; i++) {
                    cfg_percent[i].style.display = show_percent;
                }
                for (i = 0; i < cfg_rpm.length; i++) {
                    cfg_rpm[i].style.display = show_rpm;
                }
            }

            /******************************
             * Single register read/write *
             ******************************/
            function singleReadWrite(actName) {
                if (!regInput.validity.valid) {
                    alert(regInput.validationMessage);
                } else {
                    var requestStr = actName + "?" + regInput.id + "=" + regInput.value;

                    if (actName == "write") {
                        if (valInput.value == "") {
                            alert("Please provide value to write");
                            return;
                        } else {
                            requestStr += "&" + valInput.id + "=" + valInput.value;
                        }
                    }

                    console.log(requestStr);
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            if (this.responseText == "MB DISCONNECTED") {
                                //   var mb_stat = document.getElementById("idMbStat");
                                //   mb_stat.innerHTML =
                                //     'Disconnected <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
                                //   mb_stat.className = "red";
                                alert(this.responseText);
                            } else {
                                valInput.value = this.responseText;
                            }
                        }
                    };
                    xhttp.open("GET", requestStr, true);
                    xhttp.send();
                }
            }

            /**************
             * ACK button *
             **************/
            function sendAck(ackButton) {
                //   var requestStr = "write?regId=" + ackButton.id + "&regVal=1";
                const strForm = {};
                var requestStr = "mwrite?";
                strForm[ackButton.id] = 1;
                requestStr += JSON.stringify(strForm);

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("ACK TEXT: " + this.responseText);
                        setTimeout(ackUpdate(ackButton.id - 2), 1000);
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
                // If Filter alarm is acknowledge, open the Filter tab

                console.log("ackbutton id = ", ackButton.id);
                if (ackButton.id === "15142") {
                    openTab(null, "Filter");
                }
            }

            function ackUpdate(ackResID) {
                //   var requestStr = "read?regId=" + ackResID;
                const strForm = {};
                var requestStr = "mread?";
                strForm[ackResID] = 1;
                requestStr += JSON.stringify(strForm);

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("ACK TEXT: " + this.responseText);
                        const responseJson = JSON.parse(this.responseText);
                        if (typeof responseJson === "object") {
                            document.getElementById(ackResID).innerHTML =
                                responseJson[String(ackResID)] == "0" ? "RETURNED" : "ACKNOWLEDGED";
                        } else {
                            console.log("ACK ERROR: " + this.responseText);
                        }
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            /************************
             * Tab elements updater *
             ************************/
            const senseTypeStr = {
                0: "None",
                1: "Outdoor Air Temperature sensor (OAT)",
                2: "Supply Air Temperature sensor (SAT)",
                3: "Overheat Temperature Sensor (OHT)",
                4: "Frost Protection Temperature Sensor (FPT)",
                5: "Room Air Temperature sensor (RAT)",
                6: "Extract Air Temperature sensor (EAT)",
                7: "Extra Controller Temperature sensor (ECT)",
                8: "Efficiency temperature sensor (EFT)",
            };

            const senseTypeFanStr = {
                0: "Supply air fan level",
                1: "Extract air fan level",
            };

            const dinTypeStr = {
                0: "None",
                1: "Away",
                2: "Bypass Damper (BYS)",
                3: "Vacuum Cleaner",
                4: "Cooker Hood",
                5: "Crowded",
                6: "EMT",
                7: "External Stop",
                8: "Extra Controller Alarm",
                9: "Fireplace",
                10: "Holiday",
                11: "Refresh",
                12: "RGS",
                13: "Change Over Feedback",
                14: "Fire Alarm",
                15: "Configurable DIN 1",
                16: "Configurable DIN 2",
                17: "Configurable DIN 3",
                18: "Pressure Guard",
                19: "RMF",
            };

            const ComponentTypeStrTbl = {
                // NOTE: replace magic numbers with defines
                2132: ["Rotating", "Plate"],
                3001: ["None", "Electrical", "Water", "Change-over"],
                3013: ["None", "Water", "Change-Over"],
                3014: ["None", "Preheater", "Heating", "Cooling", "GEO exchanger"],
            };

            var cfgStaSSID = "";
            var remaining_time_interval;
            let remaining_time;
            let passive_house_support;

            function updateTabValues(tabName) {
                /* Home tab */
                // Counters
                var REG_USERMODE_MANUAL_AIRFLOW_LEVEL_SAF_COUNT = 1;
                var REG_FAN_MANUAL_STOP_ALLOWED_COUNT = 1;
                var REG_FAN_REGULATION_UNIT_COUNT = 1;
                var REG_FAN_REGULATION_COUNT = 2;
                var REG_FAN_LEVEL_COUNT = 20;
                // Registers
                var REG_USERMODE_REMAIN_TIME = 1110;
                var REG_USERMODE_MANUAL_AIRFLOW_LEVEL_SAF = 1130;
                var REG_USERMODE_CURRENT = 1160;
                var REG_FAN_MANUAL_STOP_ALLOWED = 1352;
                var REG_FAN_REGULATION_UNIT = 1273;
                var REG_FAN_REGULATION_PBAND = 1270;
                var REG_FAN_LEVEL_SAF_MIN_PERCENTAGE = 1400;

                /* Airflow settings tab */
                // Counters
                var REG_TC_SP_COUNT = 1;
                var REG_UNIT_CONFIG_REHEATER_TYPE_COUNT = 1;
                var REG_ECO_COUNT = 2;
                // Registers
                var REG_TC_SP = 2000;
                var REG_UNIT_CONFIG_REHEATER_TYPE = 3001;
                var REG_CFG_HEATER_ACTUATOR_TYPE = 13020;

                var REG_ECO_T_Y1_OFFSET = 2503;

                /* Sensor reading tab temperature data regs */
                // Counters
                var REG_AI_CFG_CONNECTION_COUNT = 7;
                var REG_SENSOR_VAL_COUNT = 8;
                var REG_AI_CFG_CORRECTION_COUNT = 7;
                const REG_COUNT_1 = 1;
                const REG_COUNT_2 = 2;
                const REG_COUNT_4 = 4;
                const REG_COUNT_5 = 5;
                const REG_COUNT_6 = 6;
                const REG_COUNT_7 = 7;
                const REG_COUNT_8 = 8;
                const REG_COUNT_10 = 10;
                // Registers
                var REG_AI_CFG_CONNECTION_NTC = 11000;
                var REG_SENSOR_VAL = 12100;
                var REG_AI_CFG_CORRECTION_NTC = 11020;
                // Temperature PDM sensor
                const REG_SENSOR_PDM_EAT_CONFIGURED = 12542;
                const REG_SENSOR_PDM_EAT_VALUE = 12543;
                const REG_PDM_CORRECTION_T = 11503;

                /* Sensor reading tab air quality data regs */
                // Counters
                const REG_SENSOR_CO2S_COUNT = 6;
                const REG_SENSOR_RHS_COUNT = 6;
                const REG_SENSOR_CO2S_VAL = 12150;
                const REG_SENSOR_RHS_VAL = 12160;
                const REG_UI_CFG_CORRECTION_ANALOG = 11220;
                // AirQ PDM Sensor
                const REG_UNIT_CONFIG_RHS_PDM = 3021;
                const REG_SENSOR_RHS_PDM = 12135;
                const REG_PDM_CORRECTION_RH = 11502;

                /* Modbus registers */
                var REG_COMM_MODBUS_ADDRESS = 17000;
                var REG_COMM_MODBUS_BAUD_RATE = 17001;
                var REG_COMM_MODBUS_PARITY = 17002;
                var REG_COMM_MODBUS_STOP_BITS = 17003;

                /* Communication registers */
                var REG_SYSTEM_TERMINATION_R = 9020;

                /* Unit Backup registers */
                var REG_USER_SAFE_CONFIG_VALID = 30104;

                /* Input status tab AIN registers */
                // same as above for temperature connection type, value and correction without pdm

                /* Input status DIN registers */
                // Counters
                var REG_DI_CONNECTION_COUNT = 2;
                var REG_DI_CFG_POLARITY_COUNT = 2;
                var REG_INPUT_DIGITAL_DI_COUNT = 2;
                // Registers
                var REG_DI_CONNECTION = 11400;
                var REG_DI_CFG_POLARITY = 11420;
                var REG_INPUT_DIGITAL_DI = 12030;
                var REG_SENSOR_RPM = 12400;

                /* Input status tab UIN registers */
                // Counters
                var REG_UI_CFG_TYPE_COUNT = 6;
                var REG_UI_CONNECTION_ANALOG_COUNT = 6;
                var REG_UI_CONNECTION_DIGITAL_COUNT = 6;
                var REG_UI_CFG_POLARITY_DIGITAL_COUNT = 6;
                var REG_INPUT_DIGITAL_UI_COUNT = 6;
                // Registers
                var REG_UI_CFG_TYPE = 11100;
                var REG_UI_CONNECTION_ANALOG = 11200;
                var REG_UI_CONNECTION_DIGITAL = 11300;
                var REG_UI_CFG_POLARITY_DIGITAL = 11320;
                var REG_INPUT_DIGITAL_UI = 12020;

                /* Output status tab AOUT registers */
                // Counters
                var REG_AO_CFG_CONNECTION_COUNT = 5;
                var REG_AO_AFTER_MUX_COUNT = 5;
                var REG_DO_CFG_CONNECTION_COUNT = 5;
                var REG_DO_AFTER_MUX_COUNT = 5;
                // Registers
                const REG_AO_CFG_CONNECTION = 13000;
                const REG_AO_AFTER_MUX = 13310;
                const REG_DO_CFG_CONNECTION = 13100;
                const REG_DO_AFTER_MUX = 13300;

                /* Filter period tab registers */
                // Counters
                var REG_FILTER_PERIOD_COUNT = 1;
                var REG_FILTER_REMAINING_TIME_COUNT = 2;
                // Registers
                var REG_FILTER_PERIOD = 7000;
                var REG_FILTER_REMAINING_TIME = 7004;

                /* Alarms tab registers */
                // Active alarms counters
                var REG_OUTPUT_ALARM_COUNT = 1;
                var REG_ALARM_COUNT = 3;
                var REG_ALARM_TOTAL_COUNT = 33;
                var REG_ALARM_TS_1ST_COUNT = 12;
                var REG_ALARM_TS_2ND_COUNT = 40;
                var REG_ALARM_TS_3RD_COUNT = 12;
                var REG_ALARM_TS_4TH_COUNT = 2;
                // Active alarms registers
                var REG_OUTPUT_ALARM = 14002;
                var REG_ALARM_SAF = 15000;
                var REG_ALARM_EAF = 15007;
                var REG_ALARM_FROST_PROT = 15014;
                var REG_ALARM_DEFROSTING = 15021;
                var REG_ALARM_SAF_RPM = 15028;
                var REG_ALARM_EAF_RPM = 15035;
                var REG_ALARM_FPT = 15056;
                var REG_ALARM_OAT = 15063;
                var REG_ALARM_SAT = 15070;
                var REG_ALARM_RAT = 15077;
                var REG_ALARM_EAT = 15084;
                var REG_ALARM_ECT = 15091;
                var REG_ALARM_EFT = 15098;
                var REG_ALARM_OHT = 15105;
                var REG_ALARM_EMT = 15112;
                var REG_ALARM_RGS = 15119;
                var REG_ALARM_BYS = 15126;
                var REG_ALARM_SECONDARY_AIR = 15133;
                var REG_ALARM_FILTER = 15140;
                var REG_ALARM_EXTRA_CONTROLLER = 15147;
                var REG_ALARM_EXTERNAL_STOP = 15154;
                var REG_ALARM_RH = 15161;
                var REG_ALARM_CO2 = 15168;
                var REG_ALARM_LOW_SAT = 15175;
                var REG_ALARM_BYF = 15182;
                var REG_ALARM_MANUAL_OVERRIDE_OUTPUTS = 15500;
                var REG_ALARM_PDM_RHS = 15507;
                var REG_ALARM_PDM_EAT = 15514;
                var REG_ALARM_MANUAL_FAN_STOP = 15521;
                var REG_ALARM_OVERHEAT_TEMPERATURE = 15528;
                var REG_ALARM_FIRE_ALARM = 15535;
                var REG_ALARM_FILTER_WARNING = 15542;
                var REG_ALARM_ROTOR_MOTOR_FEEDBACK = 15563;
                // Active alarms TS parts
                let REG_ALARM_TS_1ST = 15300;
                let REG_ALARM_TS_2ND = 15316;
                let REG_ALARM_TS_3RD = 15600;
                let REG_ALARM_TS_4TH = 15616;

                // Alarms logs counters
                var REG_ALARM_LOG_COUNT = 200;
                var REG_ALARM_LOG_STATE_POS = 1;
                var REG_ALARM_TS_YEAR_POS = 3;
                var REG_ALARM_TS_MONTH_POS = 4;
                var REG_ALARM_TS_DAY_POS = 5;
                var REG_ALARM_TS_HOUR_POS = 6;
                var REG_ALARM_TS_MIN_POS = 7;
                var REG_ALARM_TS_SEC_POS = 8;
                // Alarms logs registers
                var REG_ALARM_LOG_START = 15700;

                var i;
                const strForm = {};
                let requestStr = "mread?";
                let no_payload_flag = false;

                const tabWindow = document.getElementById(tabName);

                switch (tabName) {
                    // ----------------------------------------------------------------------------------------------------------------------
                    case "Unit information":
                    case "Configuration":
                    case "Cooling Control":
                    case "User Modes":
                        {
                            // skip
                        }
                        return;
                    case "Control regulation":
                        {
                            strForm[2132] = REG_COUNT_1;
                        }
                        break;
                    case "Unit version":
                        {
                            requestStr = "unit_version";
                            no_payload_flag = true;
                        }
                        break;
                    case "Date and Time":
                        {
                            strForm[6000] = REG_COUNT_1;
                            strForm[6001] = REG_COUNT_1;
                            strForm[6002] = REG_COUNT_1;
                            strForm[6003] = REG_COUNT_1;
                            strForm[6004] = REG_COUNT_1;
                            strForm[6007] = REG_COUNT_1;
                        }
                        break;
                    case "Unit Date and Time":
                        {
                            strForm[6000] = REG_COUNT_1;
                            strForm[6001] = REG_COUNT_1;
                            strForm[6002] = REG_COUNT_1;
                            strForm[6003] = REG_COUNT_1;
                            strForm[6004] = REG_COUNT_1;
                            strForm[6006] = REG_COUNT_1;
                            strForm[6007] = REG_COUNT_1;
                        }
                        break;
                    case "System Preferences":
                        {
                            strForm[6000] = REG_COUNT_1;
                            strForm[6001] = REG_COUNT_1;
                            strForm[6002] = REG_COUNT_1;
                            strForm[6003] = REG_COUNT_1;
                            strForm[6004] = REG_COUNT_1;
                            strForm[6006] = REG_COUNT_1;
                            strForm[6007] = REG_COUNT_1;

                            strForm[8003] = REG_COUNT_1;
                        }
                        break;
                    case "Home":
                    case "backdrop":
                    case "Network settings":
                    case "Unit Country":
                    case "Filter":
                    case "Components":
                    case "Components-config":
                    case "Heat Exchanger":
                    case "Outdoor Compensation":
                    case "Outdoor Compensation Winter":
                    case "Outdoor Compensation Summer":
                    case "Pressure Sensors":
                    case "Heater":
                    case "Cooler":
                    case "Extra Controller":
                    case "Preheater setting":
                    case "Precooler setting":
                    case "Temperature Control":
                    case "SATC Split":
                    case "Cascade settings":
                    case "ECO Mode":
                    case "Moisture Transfer Control":
                    case "Cooling Recovery":
                    case "Demand Control":
                    case "CO2 Sensor":
                    case "RH Sensor":
                    case "Fan Control":
                    case "Away_mode":
                    case "Vacuum_cleaner_mode":
                    case "Cooker_hood_mode":
                    case "Crowded_mode":
                    case "Fireplace_mode":
                    case "Holiday_mode":
                    case "Refresh_mode":
                    case "Pressure_guard_mode":
                    case "Config_digital_input1_mode":
                    case "Config_digital_input2_mode":
                    case "Config_digital_input3_mode":
                    case "Modify_IO":
                    case "Airflow Levels Settings":
                        {
                            let inputs;
                            if (tabName == "Network settings") {
                                requestStr = "cfgget?";
                                document.getElementById("scanned_ssids").innerHTML = ``;
                                hide_div("hidden_connect_button");
                            }
                            if (tabName == "backdrop" || tabName == "Components") {
                                inputs = tabWindow.querySelectorAll("input, td[id]");
                            } else if (tabName == "Airflow Levels Settings") {
                                inputs = tabWindow.querySelectorAll("input");
                            } else {
                                const elemArea = tabWindow.querySelector(".container");
                                inputs = elemArea.querySelectorAll(
                                    "input, select, [id='1110'], [id='7004'], td[id], span[id]"
                                );
                            }
                            inputs.forEach((element) => {
                                if (element.id == "1110" || element.id == "7004") {
                                    strForm[element.id] = REG_COUNT_2;
                                } else if (tabName == "Network settings") {
                                    strForm[element.id] = "";
                                } else {
                                    strForm[element.id] = REG_COUNT_1;
                                }
                            });
                            switch (tabName) {
                                case "Home":
                                    {
                                        // request current header mode to Hide ECO mode if needed
                                        strForm[REG_UNIT_CONFIG_REHEATER_TYPE] = REG_COUNT_1;
                                        // request current mode reg 1160
                                        strForm[REG_USERMODE_CURRENT] = REG_COUNT_1;
                                        // request manual fan stop reg 1352
                                        strForm[REG_FAN_MANUAL_STOP_ALLOWED] = REG_COUNT_1;
                                    }
                                    break;
                                case "Demand Control":
                                    {
                                        co2_counter = 0; //reset counter
                                        rh_counter = 0; //reset counter
                                        strForm[REG_UI_CONNECTION_ANALOG] = REG_COUNT_6;
                                        strForm[11500] = REG_COUNT_1;
                                    }
                                    break;
                                case "Away_mode":
                                case "Holiday_mode":
                                case "Pressure_guard_mode":
                                case "Config_digital_input1_mode":
                                case "Config_digital_input2_mode":
                                case "Config_digital_input3_mode":
                                    {
                                        // request manual fan stop reg 1352
                                        strForm[REG_FAN_MANUAL_STOP_ALLOWED] = REG_COUNT_1;
                                    }
                                    break;
                                case "Heat Exchanger":
                                    {
                                        strForm[2260] = REG_COUNT_1;
                                    }
                                    break;
                                case "Airflow Levels Settings":
                                    {
                                        // request additional data for low/high limits calculation
                                        strForm[9001] = 1;
                                        strForm[12700] = 2;
                                        strForm[12705] = 2;
                                        strForm[12800] = 2;
                                        strForm[12805] = 2;
                                        strForm[14400] = 2;
                                        strForm[23035] = 1;
                                        strForm[23135] = 1;
                                    }
                                    break;
                                default:
                                    {
                                        // nothing to do
                                    }
                                    break;
                            }
                        }
                        break;
                    case "Free Cooling":
                        {
                            strForm[4111] = REG_COUNT_1;
                            strForm[4112] = REG_COUNT_1;
                            strForm[4100] = REG_COUNT_1;
                            strForm[4105] = REG_COUNT_1;
                            strForm[4106] = REG_COUNT_1;
                            strForm[4107] = REG_COUNT_1;
                            strForm[4108] = REG_COUNT_1;
                            strForm[4104] = REG_COUNT_1;
                            strForm[4102] = REG_COUNT_1;
                            strForm[4103] = REG_COUNT_1;
                            strForm[6007] = REG_COUNT_1;
                        }
                        break;
                    case "Sensor values":
                        {
                            strForm[REG_AI_CFG_CONNECTION_NTC] = REG_AI_CFG_CONNECTION_COUNT;
                            strForm[REG_SENSOR_PDM_EAT_CONFIGURED] = REG_COUNT_1;
                            strForm[REG_SENSOR_VAL] = REG_SENSOR_VAL_COUNT;
                            strForm[REG_SENSOR_PDM_EAT_VALUE] = REG_COUNT_1;

                            strForm[REG_UI_CFG_TYPE] = REG_UI_CFG_TYPE_COUNT;
                            strForm[REG_UI_CONNECTION_ANALOG] = REG_UI_CONNECTION_ANALOG_COUNT;
                            strForm[REG_SENSOR_RHS_PDM] = REG_COUNT_1;
                            strForm[REG_SENSOR_CO2S_VAL] = REG_SENSOR_CO2S_COUNT;
                            strForm[REG_SENSOR_RHS_VAL] = REG_SENSOR_RHS_COUNT;
                            strForm[REG_SENSOR_RPM] = REG_COUNT_2;

                            strForm[REG_UNIT_CONFIG_RHS_PDM] = REG_COUNT_1;
                        }
                        break;
                    case "Alarms":
                        {
                            console.log("updateTabValues: " + tabName);
                            strForm[REG_OUTPUT_ALARM] = REG_OUTPUT_ALARM_COUNT;
                            strForm[REG_ALARM_SAF] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_EAF] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_FROST_PROT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_DEFROSTING] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_SAF_RPM] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_EAF_RPM] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_FPT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_OAT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_SAT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_RAT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_EAT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_ECT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_EFT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_OHT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_EMT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_RGS] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_BYS] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_SECONDARY_AIR] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_FILTER] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_EXTRA_CONTROLLER] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_EXTERNAL_STOP] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_RH] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_CO2] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_LOW_SAT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_BYF] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_MANUAL_OVERRIDE_OUTPUTS] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_PDM_RHS] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_PDM_EAT] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_MANUAL_FAN_STOP] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_OVERHEAT_TEMPERATURE] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_FIRE_ALARM] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_FILTER_WARNING] = REG_ALARM_COUNT;
                            strForm[REG_ALARM_ROTOR_MOTOR_FEEDBACK] = REG_ALARM_COUNT;
                            // request TS regs
                            strForm[REG_ALARM_TS_1ST] = REG_ALARM_TS_1ST_COUNT;
                            strForm[REG_ALARM_TS_2ND] = REG_ALARM_TS_2ND_COUNT;
                            strForm[REG_ALARM_TS_3RD] = REG_ALARM_TS_3RD_COUNT;
                            strForm[REG_ALARM_TS_4TH] = REG_ALARM_TS_4TH_COUNT;
                            // request log regs
                            strForm[REG_ALARM_LOG_START] = REG_ALARM_LOG_COUNT;
                        }
                        break;
                    /* CONFIGURATION TAB */
                    case "Input":
                        {
                            console.log("updateTabValues: " + tabName);
                            /* INPUT ANALOG */
                            strForm[REG_AI_CFG_CONNECTION_NTC] = REG_COUNT_7;
                            strForm[REG_SENSOR_VAL] = REG_COUNT_8;
                            strForm[REG_AI_CFG_CORRECTION_NTC] = REG_COUNT_7;

                            /* INPUT DIGITAL */
                            strForm[REG_DI_CONNECTION] = REG_COUNT_2;
                            strForm[REG_DI_CFG_POLARITY] = REG_COUNT_2;
                            strForm[REG_INPUT_DIGITAL_DI] = REG_COUNT_2;
                            strForm[REG_SENSOR_RPM] = REG_COUNT_2;

                            /* INPUT UNIVERSAL */
                            // UDI
                            strForm[REG_UI_CFG_TYPE] = REG_COUNT_6;
                            strForm[REG_UI_CONNECTION_ANALOG] = REG_COUNT_6;
                            strForm[REG_UI_CONNECTION_DIGITAL] = REG_COUNT_6;
                            strForm[REG_UI_CFG_POLARITY_DIGITAL] = REG_COUNT_6;
                            strForm[REG_INPUT_DIGITAL_UI] = REG_COUNT_6;

                            // UAI
                            strForm[12404] = REG_COUNT_1;
                            strForm[2100] = REG_COUNT_2;
                            strForm[REG_SENSOR_RHS_PDM] = REG_COUNT_1;
                            strForm[REG_SENSOR_CO2S_VAL] = REG_COUNT_6;
                            strForm[REG_SENSOR_RHS_VAL] = REG_COUNT_6;
                            strForm[REG_UI_CFG_CORRECTION_ANALOG] = REG_COUNT_6;

                            /* PDM/I2C */
                            strForm[11501] = REG_COUNT_1;
                            strForm[REG_SENSOR_PDM_EAT_CONFIGURED] = REG_COUNT_2;
                            strForm[REG_PDM_CORRECTION_T] = REG_COUNT_1;
                            strForm[11500] = REG_COUNT_1;
                            strForm[REG_PDM_CORRECTION_RH] = REG_COUNT_1;

                            /* PRESSURE CARDS */
                            strForm[23035] = REG_COUNT_1;
                            strForm[23135] = REG_COUNT_1;
                            strForm[23038] = REG_COUNT_2;
                            strForm[23138] = REG_COUNT_2;
                            strForm[23000] = REG_COUNT_2;
                            strForm[23100] = REG_COUNT_2;
                        }
                        break;
                    case "Output":
                        {
                            console.log("updateTabValues: " + tabName);
                            /* OUTPUT CONFIG */
                            strForm[2148] = REG_COUNT_1;
                            strForm[REG_AO_CFG_CONNECTION] = REG_COUNT_5;
                            strForm[13025] = REG_COUNT_1;
                            strForm[13030] = REG_COUNT_4;
                            strForm[REG_DO_CFG_CONNECTION] = REG_COUNT_4;
                            strForm[13200] = REG_COUNT_1;
                            strForm[REG_DO_AFTER_MUX] = REG_COUNT_4;
                            strForm[REG_AO_AFTER_MUX] = REG_COUNT_5;
                            strForm[14000] = REG_COUNT_2;
                            strForm[13500] = REG_COUNT_10;
                            strForm[13600] = REG_COUNT_2;
                            strForm[13700] = REG_COUNT_10;
                            strForm[13800] = REG_COUNT_2;
                        }
                        break;
                    case "Modbus":
                        {
                            strForm[REG_COMM_MODBUS_ADDRESS] = REG_COUNT_1;
                            strForm[REG_COMM_MODBUS_BAUD_RATE] = REG_COUNT_1;
                            strForm[REG_COMM_MODBUS_PARITY] = REG_COUNT_1;
                            strForm[REG_COMM_MODBUS_STOP_BITS] = REG_COUNT_1;
                        }
                        break;
                    case "Communication":
                        {
                            strForm[REG_SYSTEM_TERMINATION_R] = REG_COUNT_1;
                        }
                        break;
                    case "Unit Backups":
                        {
                            strForm[REG_USER_SAFE_CONFIG_VALID] = REG_COUNT_1;
                            //requestStr = "iam_cfg_status?";
                        }
                        break;
                    case "Software Update":
                        {
                            requestStr = "file_ver";
                            no_payload_flag = true;
                        }
                        break;
                    case "FWs update":
                        {
                            requestStr = "fw_list";
                            no_payload_flag = true;
                        }
                        break;
                    // ----------------------------------------------------------------------------------------------------------------------
                }

                if (no_payload_flag === false) {
                    console.log(tabName + " strForm: " + JSON.stringify(strForm));
                    requestStr += JSON.stringify(strForm);
                }
                console.log(requestStr);

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);
                        if (this.responseText === "ERROR") {
                            alert("Undefined error");
                        } else if (this.responseText === "WRITE TMO") {
                            alert("Write timeout");
                        } else if (this.responseText === "READ TMO") {
                            // add READ TMO to web_m3b request handlers
                            alert("Write timeout");
                        } else if (this.responseText === "RESPONSE TMO") {
                            alert("Response timeout");
                        } else if (this.responseText === "EMPTY") {
                            alert("FS empty");
                        } else if (this.responseText == "MB DISCONNECTED") {
                            // var mb_stat = document.getElementById("idMbStat");
                            // mb_stat.innerHTML =
                            //   'Disconnected <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
                            // mb_stat.className = "red";
                            alert(this.responseText);
                        } else {
                            var sensorType, sensorTypeStr, sensorCorrection, sensorValue, tabTable;
                            var innerHTML = "";
                            var j = 0;

                            const responseJson = JSON.parse(this.responseText);

                            console.log(responseJson);

                            if (typeof responseJson === "object") {
                                switch (tabName) {
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Home":
                                    case "backdrop":
                                    case "Filter":
                                    case "Unit Country":
                                    case "Modbus":
                                    case "Communication":
                                    case "Network settings":
                                    case "Heat Exchanger":
                                    case "Heater":
                                    case "Cooler":
                                    case "Extra Controller":
                                    case "Outdoor Compensation":
                                    case "Outdoor Compensation Winter":
                                    case "Outdoor Compensation Summer":
                                    case "Pressure Sensors":
                                    case "Preheater setting":
                                    case "Precooler setting":
                                    case "Temperature Control":
                                    case "SATC Split":
                                    case "Cascade settings":
                                    case "ECO Mode":
                                    case "Moisture Transfer Control":
                                    case "Cooling Recovery":

                                    case "Demand Control":
                                    case "CO2 Sensor":
                                    case "RH Sensor":
                                    case "Fan Control":
                                    case "Away_mode":
                                    case "Vacuum_cleaner_mode":
                                    case "Cooker_hood_mode":
                                    case "Crowded_mode":
                                    case "Fireplace_mode":
                                    case "Holiday_mode":
                                    case "Refresh_mode":
                                    case "Pressure_guard_mode":
                                    case "Config_digital_input1_mode":
                                    case "Config_digital_input2_mode":
                                    case "Config_digital_input3_mode":
                                    case "Modify_IO":
                                        {
                                            for (let key in responseJson) {
                                                let int_key = parseInt(key);
                                                switch (int_key) {
                                                    case 10:
                                                        {
                                                            cfgStaSSID = responseJson[key];
                                                            if (cfgStaSSID != "") {
                                                                document.getElementById(
                                                                    "scanned_ssids"
                                                                ).innerHTML = `<div style="padding-bottom: 5px">
                                                                                            <input type="checkbox" class ="checkbox-round-unit-backups" style="cursor: default" value="${cfgStaSSID}" name="wifi" checked disabled>
                                                                                            <label>${cfgStaSSID}</label>
                                                                                           </div>
                                                                                        `;
                                                            }
                                                        }
                                                        break;
                                                    case 1111:
                                                    case 1161:
                                                    case 2260:
                                                    case 7005:
                                                    case 9000:
                                                        {
                                                            // skip
                                                        }
                                                        break;

                                                    case 8003:
                                                        {
                                                            let value = responseJson[key];
                                                            console.log("8003 value = ", value);
                                                            enable_checkbox_by_value(value.toString());
                                                        }
                                                        break;

                                                    case 3001:
                                                        {
                                                            let heater_mode = responseJson[key];
                                                            console.log("heater_mode = ", heater_mode);
                                                            change_heater_type(heater_mode);

                                                            enableOptionByValue(tabName, key, heater_mode);

                                                            if (heater_mode == 0) {
                                                                console.log("hiding eco mode placehodler");
                                                                hide_div("eco_mode_placeholder");
                                                            } else {
                                                                console.log("unhiding eco mode placehodler");
                                                                unhide_div("eco_mode_placeholder");
                                                            }
                                                        }
                                                        break;
                                                    case 2132:
                                                        {
                                                            let heater_exchanger_type = responseJson[key];
                                                            passive_house_support = responseJson[String(2260)];
                                                            console.log(
                                                                "Current heat exchanger type = ",
                                                                heater_exchanger_type
                                                            );
                                                            change_heat_exchanger_type(heater_exchanger_type);
                                                            enableOptionInDiv(
                                                                tabName,
                                                                key,
                                                                ComponentTypeStrTbl[key][heater_exchanger_type]
                                                            );
                                                        }
                                                        break;
                                                    case 3013:
                                                        {
                                                            let cooler_type = responseJson[key];
                                                            console.log("Current cooler type = ", cooler_type);
                                                            change_cooler_type(cooler_type);
                                                            enableOptionByValue(tabName, key, cooler_type);
                                                        }
                                                        break;
                                                    case 100:
                                                        {
                                                            let wifi_mode = responseJson[key];
                                                            tabWindow.querySelector(`[id="${key}"]`).value = wifi_mode;
                                                        }
                                                        break;
                                                    case 11500:
                                                        {
                                                            let Inbuilt_RH = responseJson[key];
                                                            if (Inbuilt_RH == 1) {
                                                                rh_counter++;
                                                            }
                                                        }
                                                        break;
                                                    case 11200:
                                                        {
                                                            let UAI1_type = responseJson[key];
                                                            if (UAI1_type == 2) {
                                                                co2_counter++;
                                                            } else if (UAI1_type == 1) {
                                                                rh_counter++;
                                                            }
                                                        }
                                                        break;
                                                    case 11201:
                                                        {
                                                            let UAI2_type = responseJson[key];
                                                            if (UAI2_type == 2) {
                                                                co2_counter++;
                                                            } else if (UAI2_type == 1) {
                                                                rh_counter++;
                                                            }
                                                        }
                                                        break;
                                                    case 11202:
                                                        {
                                                            let UAI3_type = responseJson[key];
                                                            if (UAI3_type == 2) {
                                                                co2_counter++;
                                                            } else if (UAI3_type == 1) {
                                                                rh_counter++;
                                                            }
                                                        }
                                                        break;
                                                    case 11203:
                                                        {
                                                            let UAI4_type = responseJson[key];
                                                            if (UAI4_type == 2) {
                                                                co2_counter++;
                                                            } else if (UAI4_type == 1) {
                                                                rh_counter++;
                                                            }
                                                        }
                                                        break;
                                                    case 11204:
                                                        {
                                                            let UAI5_type = responseJson[key];
                                                            if (UAI5_type == 2) {
                                                                co2_counter++;
                                                            } else if (UAI5_type == 1) {
                                                                rh_counter++;
                                                            }
                                                        }
                                                        break;
                                                    case 11205:
                                                        {
                                                            let UAI6_type = responseJson[key];
                                                            if (UAI6_type == 2) {
                                                                co2_counter++;
                                                            } else if (UAI6_type == 1) {
                                                                rh_counter++;
                                                            }
                                                            if (co2_counter > 0) {
                                                                document.getElementById("co2_status").innerHTML =
                                                                    "Configure sensor settings";
                                                            } else {
                                                                document.getElementById("co2_status").innerHTML =
                                                                    "Not connected";
                                                            }
                                                            if (rh_counter > 0) {
                                                                document.getElementById("rh_status").innerHTML =
                                                                    "Configure sensor settings";
                                                            } else {
                                                                document.getElementById("rh_status").innerHTML =
                                                                    "Not connected";
                                                            }
                                                        }
                                                        break;
                                                    case 1250:
                                                        {
                                                            enableOptionByValue(
                                                                "Outdoor Compensation",
                                                                key,
                                                                responseJson[key]
                                                            );
                                                        }
                                                        break;
                                                    case 1254:
                                                        {
                                                            document.getElementById(key).value = responseJson[key];
                                                        }
                                                        break;
                                                    case 12700:
                                                    case 12701:
                                                    case 12601:
                                                    case 12602:
                                                    case 12800:
                                                    case 12801:
                                                    case 12604:
                                                    case 12603:
                                                        {
                                                            document.getElementById(key).value = responseJson[key];
                                                        }
                                                        break;
                                                    case 1258:
                                                    case 1251:
                                                        {
                                                            document.getElementById(key).value = responseJson[key];
                                                        }
                                                        break;
                                                    case 4105:
                                                        {
                                                            console.log("4105: " + responseJson[key]);
                                                            freecooling_start_hr = responseJson[key];
                                                        }
                                                        break;
                                                    case 4106:
                                                        {
                                                            console.log("4106: " + responseJson[key]);
                                                            freecooling_start_min = responseJson[key];
                                                            var hours = freecooling_start_hr;
                                                            var minutes = freecooling_start_min;
                                                            // Format the time as HH:mm
                                                            var formattedTime =
                                                                (hours < 10 ? "0" : "") +
                                                                hours +
                                                                ":" +
                                                                (minutes < 10 ? "0" : "") +
                                                                minutes;
                                                            document.getElementById("freecooling_start").value =
                                                                formattedTime;
                                                        }
                                                        break;
                                                    case 4107:
                                                        {
                                                            console.log("4107: " + responseJson[key]);
                                                            freecooling_end_hr = responseJson[key];
                                                        }
                                                        break;
                                                    case 4108:
                                                        {
                                                            console.log("4108: " + responseJson[key]);
                                                            freecooling_end_min = responseJson[key];
                                                            var hours = freecooling_end_hr;
                                                            var minutes = freecooling_end_min;
                                                            // Format the time as HH:mm
                                                            var formattedTime =
                                                                (hours < 10 ? "0" : "") +
                                                                hours +
                                                                ":" +
                                                                (minutes < 10 ? "0" : "") +
                                                                minutes;
                                                            document.getElementById("freecooling_end").value =
                                                                formattedTime;
                                                        }
                                                        break;

                                                    case 15:
                                                    case 1034:
                                                    case 1043:
                                                    case 1352:
                                                    case 2133:
                                                    case 2203:
                                                    case 2262:
                                                    case 9020:
                                                        {
                                                            let selectElem = tabWindow.querySelector(`[id="${key}"]`);
                                                            if (selectElem != null) {
                                                                selectElem.value = responseJson[key];
                                                                selectElem.checked =
                                                                    selectElem.value == "1" ? true : false;
                                                            }
                                                            if (key == 1352) {
                                                                const optionsToDisable = tabWindow.querySelectorAll(
                                                                    `[data-option="optionToDisable"]`
                                                                );
                                                                optionsToDisable.forEach((option) => {
                                                                    option.disabled =
                                                                        responseJson[key] == "0" ? true : false;
                                                                });
                                                            }
                                                        }
                                                        break;
                                                    // MULTIPLIED VALUES
                                                    case 4102:
                                                    case 4103:
                                                    case 4104:
                                                    case 2000:
                                                    case 2010:
                                                    case 2020:
                                                    case 2021:
                                                    case 2040:
                                                    case 2053:
                                                    case 2112:
                                                    case 2450:
                                                    case 2200:
                                                    case 2314:
                                                    case 2315:
                                                    case 2400:
                                                    case 2403:
                                                    case 2421:
                                                    case 2422:
                                                    case 2503:
                                                    case 12100:
                                                    case 12101:
                                                    case 12102:
                                                    case 12103:
                                                    case 12104:
                                                    case 12105:
                                                    case 12106:
                                                    case 12107:
                                                    case 13030:
                                                    case 13031:
                                                    case 13700:
                                                    case 13701:
                                                    case 13702:
                                                    case 13703:
                                                    case 13704:
                                                        {
                                                            if (int_key >= 12100 && int_key <= 12107) {
                                                                tabWindow.querySelector(`[id="${key}"]`).innerText =
                                                                    responseJson[key] / 10;
                                                            } else {
                                                                tabWindow.querySelector(`[id="${key}"]`).value =
                                                                    responseJson[key] / 10;
                                                            }
                                                        }
                                                        break;
                                                    // SIGNED VALUES
                                                    case 11220: //UIN 1
                                                    case 11221: //UIN 2
                                                    case 11222: //UIN 3
                                                    case 11223: //UIN 4
                                                    case 11224: //UIN 5
                                                    case 11225: //UIN 6
                                                    case 11502: //Inbuilt RH
                                                    case 23000:
                                                    case 23001:
                                                    case 23100:
                                                    case 23101:
                                                    case 23038:
                                                    case 23039:
                                                    case 23138:
                                                    case 23139:
                                                        {
                                                            console.log("handle signed values");
                                                            let regValue = responseJson[key];
                                                            regValue = regValue > 32767 ? regValue - 65536 : regValue;
                                                            tabWindow.querySelector(`[id="${key}"]`).value = regValue;
                                                        }
                                                        break;
                                                    // MULTIPLIED SIGNED VALUES
                                                    case 2402:
                                                    case 1253:
                                                    case 1255:
                                                    case 1256:
                                                    case 1257:
                                                    case 1150:
                                                    case 2419:
                                                    case 2420:
                                                    case 11020:
                                                    case 11021:
                                                    case 11022:
                                                    case 11023:
                                                    case 11024:
                                                    case 11025:
                                                    case 11026:
                                                    case 11503:
                                                        {
                                                            let regValue = responseJson[key];
                                                            regValue = regValue > 32767 ? regValue - 65536 : regValue;
                                                            tabWindow.querySelector(`[id="${key}"]`).value =
                                                                regValue / 10;
                                                        }
                                                        break;
                                                    case 1110:
                                                        {
                                                            remaining_time =
                                                                (responseJson[String(int_key + 1)] << 16) +
                                                                responseJson[key];
                                                        }
                                                        break;
                                                    case 1160:
                                                        {
                                                            console.log(
                                                                "1110: " +
                                                                    responseJson[String(int_key + 1)] +
                                                                    " | 1111: " +
                                                                    responseJson[key + 1]
                                                            );
                                                            tabWindow.querySelector(`[id="1161"]`).value =
                                                                responseJson[key] + 1;
                                                            if (responseJson[key] >= 2 && responseJson[key] <= 6) {
                                                                if (typeof remaining_time_interval === "undefined") {
                                                                    remaining_time_interval = setInterval(
                                                                        updateRemainingTime,
                                                                        1000
                                                                    );
                                                                }
                                                            } else {
                                                                clearRemainingTime();
                                                            }
                                                        }
                                                        break;
                                                    case 1273:
                                                    case 2030:
                                                    case 3014:
                                                        {
                                                            let paramField = tabWindow.querySelector(`[id="${key}"]`);
                                                            paramField.value = responseJson[key];
                                                            if (key == 3014) {
                                                                change_extra_controller_type(paramField.value);
                                                                enableOptionInDiv(
                                                                    tabName,
                                                                    key,
                                                                    ComponentTypeStrTbl[key][paramField.value]
                                                                );
                                                            } else if (key == 2030) {
                                                                change_temperature_control_mode(paramField);
                                                            } else if (key == 1273) {
                                                                document.getElementById("9000").value =
                                                                    responseJson["9000"];
                                                                change_fan_airflow_type(paramField);
                                                            }
                                                        }
                                                        break;
                                                    case 7004:
                                                        {
                                                            console.log(
                                                                "7004: " +
                                                                    responseJson[key] +
                                                                    " | 7005: " +
                                                                    responseJson[String(int_key + 1)]
                                                            );
                                                            let remainingMonths =
                                                                (responseJson[String(int_key + 1)] << 16) +
                                                                responseJson[key];
                                                            console.log("REMAINING MON: " + remainingMonths);
                                                            remainingMonths = Math.floor(
                                                                remainingMonths / 60 / 60 / 24 / 30
                                                            );
                                                            console.log("REMAINING MONTHS: " + remainingMonths);
                                                            tabWindow.querySelector(`[id="${key}"]`).innerText =
                                                                remainingMonths;
                                                        }
                                                        break;
                                                    case 12020:
                                                    case 12021:
                                                    case 12022:
                                                    case 12023:
                                                    case 12024:
                                                    case 12025:
                                                    case 12030:
                                                    case 12031:
                                                        {
                                                            let dinPolarity;
                                                            if (int_key >= 12020 && int_key <= 12025) {
                                                                dinPolarity = responseJson[String(int_key - 700)];
                                                            } else {
                                                                dinPolarity = responseJson[String(int_key - 610)];
                                                            }
                                                            sensorValue = responseJson[key];
                                                            // invert sensor value if polarity value is 1 (normally closed)
                                                            sensorValue =
                                                                dinPolarity == 1 ? ~sensorValue & 1 : sensorValue;

                                                            let params = tabWindow.querySelectorAll(`[id="${key}"]`);
                                                            params.forEach((element) => {
                                                                element.innerText = Digital_value[sensorValue];
                                                            });
                                                        }
                                                        break;
                                                    // case 17001:
                                                    //     {
                                                    //         console.log("received 17001 response");
                                                    //         console.log(
                                                    //             "document.getElementById(key).value = responseJson[key]  = ",
                                                    //             (document.getElementById(key).value = responseJson[key])
                                                    //         );
                                                    //         document.getElementById(key).selectedIndex = responseJson[key];
                                                    //     }
                                                    //     break;
                                                    default:
                                                        {
                                                            console.log("DEF CASE KEY: " + key);
                                                            tabWindow.querySelector(`[id="${key}"]`).value =
                                                                responseJson[key];
                                                        }
                                                        break;
                                                }
                                            }
                                        }
                                        break;
                                    case "Free Cooling":
                                        {
                                            let status_checkbox = responseJson["4100"];
                                            if (status_checkbox == 1) {
                                                document.getElementById("4100").checked = true;
                                            } else {
                                                document.getElementById("4100").checked = false;
                                            }

                                            let supply_air_fan_value = responseJson["4111"];
                                            let extract_air_fan_value = responseJson["4112"];
                                            document.getElementById("4111").value = supply_air_fan_value;
                                            document.getElementById("4112").value = extract_air_fan_value;

                                            //update extract/room cancel temeprature
                                            document.getElementById("4104").value = responseJson["4104"] / 10;
                                            // update outdoor nighttime activation high limit
                                            document.getElementById("4102").value = responseJson["4102"] / 10;
                                            //update outdoor nighttime activation low limit
                                            document.getElementById("4103").value = responseJson["4103"] / 10;

                                            document.getElementById("4106").value = responseJson["4106"];
                                            document.getElementById("4108").value = responseJson["4108"];

                                            let hour_format = responseJson["6007"];
                                            let hour_start = responseJson["4105"];
                                            let minute_start = responseJson["4106"];
                                            let hour_end = responseJson["4107"];
                                            let minute_end = responseJson["4108"];

                                            let hours_start_unchanged = responseJson["4105"];
                                            let minutes_start_unchanged = responseJson["4106"];
                                            let hours_end_unchanged = responseJson["4107"];
                                            let minutes_end_unchanged = responseJson["4108"];

                                            console.log("hour format = ", hour_format);
                                            if (hour_format == 0) {
                                                document.getElementById("6007").checked = false;
                                                unhide_div("ampm-div_freecoling_start");
                                                unhide_div("ampm-div_freecoling_end");
                                                remove_time_options("4105");
                                                remove_time_options("4107");

                                                //HANDLE START TIME
                                                if (hour_start >= 12) {
                                                    document.getElementById("ampm_freecooling_start").value = 1;
                                                    //if hour is 12, we do not need to substract( 12:00 in 24 hour format is dispalyed in 12PM)
                                                    if (hour_start != 12) {
                                                        document.getElementById("4105").value = hour_start - 12;
                                                    } else {
                                                        document.getElementById("4105").value = hour_start;
                                                    }
                                                } else {
                                                    document.getElementById("ampm_freecooling_start").value = 0;
                                                    document.getElementById("4105").value = hour_start;
                                                }

                                                //HANDLE END TIME
                                                if (hour_end >= 12) {
                                                    document.getElementById("ampm_freecooling_end").value = 1;
                                                    //if hour is 12, we do not need to substract( 12:00 in 24 hour format is dispalyed in 12PM)
                                                    if (hour_end != 12) {
                                                        document.getElementById("4107").value = hour_end - 12;
                                                    } else {
                                                        document.getElementById("4107").value = hour_end;
                                                    }
                                                } else {
                                                    document.getElementById("ampm_freecooling_end").value = 0;
                                                    document.getElementById("4107").value = hour_end;
                                                }
                                            } else {
                                                document.getElementById("6007").checked = true;

                                                hide_div("ampm-div_freecoling_start");
                                                hide_div("ampm-div_freecoling_end");
                                                add_time_options("4105");
                                                add_time_options("4107");

                                                document.getElementById("4105").value = hour_start;
                                                document.getElementById("4107").value = hour_end;
                                            }

                                            var hours_start_padded = padWithZero(hours_start_unchanged);
                                            var minutes_start_padded = padWithZero(minutes_start_unchanged);
                                            var hours_end_padded = padWithZero(hours_end_unchanged);
                                            var minutes_end_padded = padWithZero(minutes_end_unchanged);

                                            document.getElementById("freecooling_time_placeholder").innerText =
                                                "Freecooling time: " +
                                                hours_start_padded +
                                                ":" +
                                                minutes_start_padded +
                                                " - " +
                                                hours_end_padded +
                                                ":" +
                                                minutes_end_padded;
                                        }
                                        break;
                                    case "Date and Time":
                                        {
                                            let year = responseJson["6000"].toString();
                                            let month = responseJson["6001"].toString();
                                            let day = responseJson["6002"].toString();
                                            let hour = responseJson["6003"];
                                            let minute = responseJson["6004"];
                                            let hour_format = responseJson["6007"];
                                            let real_hour = hour;

                                            document.getElementById("6000").value = year;
                                            document.getElementById("6001").value = month;
                                            document.getElementById("6002").value = day;
                                            document.getElementById("6004").value = minute;

                                            console.log("year = ", year);
                                            console.log("month = ", month);
                                            console.log("day = ", day);
                                            console.log("hour = ", hour);
                                            console.log("real_hour = ", real_hour);
                                            console.log("minute = ", minute);

                                            setDate(year, month, day);
                                            //workarround because HMI displays incorrect date
                                            if (hour == 0) {
                                                console.log("hour set to 12 \n");
                                                real_hour = 12;
                                            }

                                            // if 12 hour format is selected
                                            if (hour_format == 0) {
                                                unhide_div("ampm-div");
                                                remove_time_options("6003");
                                                if (real_hour >= 12) {
                                                    document.getElementById("ampm").value = 1;
                                                    //if hour is 12, we do not need to substract( 12:00 in 24 hour format is dispalyed in 12PM)
                                                    if (real_hour != 12) {
                                                        document.getElementById("6003").value = real_hour - 12;
                                                    } else {
                                                        document.getElementById("6003").value = real_hour;
                                                    }
                                                } else {
                                                    document.getElementById("ampm").value = 0;
                                                    document.getElementById("6003").value = real_hour;
                                                }
                                            } else {
                                                hide_div("ampm-div");
                                                add_time_options("6003");
                                                document.getElementById("6003").value = real_hour;
                                                //change width of 6003 and 6004
                                            }
                                        }
                                        break;
                                    case "Unit Date and Time":
                                        {
                                            let DST = responseJson["6006"];
                                            let hour_format = responseJson["6007"]; // 1 for 12-hour format, 0 for 24-hour format
                                            console.log("DST = ", DST);
                                            if (DST == 1) document.getElementById("6006").checked = true;
                                            else document.getElementById("6006").checked = false;

                                            let year = responseJson["6000"];
                                            let month = responseJson["6001"];
                                            let day = responseJson["6002"];
                                            let hour = responseJson["6003"];
                                            let minute = responseJson["6004"];

                                            if (hour == 0) {
                                                hour = 12;
                                            }

                                            var newDate = new Date(year, month - 1, day, hour, minute);

                                            var options = {
                                                day: "2-digit",
                                                month: "2-digit",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                second: "2-digit",
                                            };

                                            console.log("newDate = ", newDate);
                                            var formattedDate;

                                            if (hour_format == 1) {
                                                document.getElementById("6007").checked = true;
                                                formattedDate = newDate.toLocaleString("en-UK", options);
                                                console.log("selecting 24 Hour time format \n");
                                                options.hour12 = false;
                                                hide_div("ampm-div");
                                                add_time_options("6003");
                                            } else {
                                                document.getElementById("6007").checked = false;
                                                formattedDate = newDate.toLocaleString("en-US", options);
                                                console.log("selecting 12 Hour time format\n");
                                                options.hour12 = true;
                                                unhide_div("ampm-div");
                                                remove_time_options("6003");
                                            }

                                            console.log("formattedDate = ", formattedDate);
                                            document.getElementById("date-time-placeholder").innerHTML = formattedDate;
                                        }
                                        break;
                                    case "System Preferences":
                                        {
                                            let selected_country = responseJson["8003"];
                                            var unitCountryInputs =
                                                document.querySelectorAll('input[name="unit-country"]');
                                            unitCountryInputs.forEach(function (input) {
                                                if (parseInt(input.value) === selected_country) {
                                                    // Get the parent <td> element and then its innerHTML
                                                    var tdElement = input.parentNode.nextElementSibling;
                                                    var innerHTMLValue = tdElement.innerHTML.trim(); // Use trim() to remove any leading/trailing whitespace

                                                    // Print the innerHTML value
                                                    document.getElementById("unit-country-placeholder-pref").innerHTML =
                                                        innerHTMLValue;
                                                }
                                            });

                                            let hour_format = responseJson["6007"]; // 1 for 12-hour format, 0 for 24-hour format

                                            let year = responseJson["6000"];
                                            let month = responseJson["6001"];
                                            let day = responseJson["6002"];
                                            let hour = responseJson["6003"];
                                            let minute = responseJson["6004"];

                                            if (hour == 0) {
                                                hour = 12;
                                            }

                                            var newDate = new Date(year, month - 1, day, hour, minute);

                                            var options = {
                                                day: "2-digit",
                                                month: "2-digit",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                second: "2-digit",
                                            };

                                            console.log("newDate = ", newDate);
                                            var formattedDate;
                                            if (hour_format == 1) {
                                                document.getElementById("6007").checked = true;
                                                formattedDate = newDate.toLocaleString("en-UK", options);
                                                console.log("selecting 24 Hour time format \n");
                                                options.hour12 = false;
                                            } else {
                                                document.getElementById("6007").checked = false;
                                                formattedDate = newDate.toLocaleString("en-US", options);
                                                console.log("selecting 12 Hour time format\n");
                                                options.hour12 = true;
                                            }

                                            console.log("formattedDate = ", formattedDate);
                                            document.getElementById("unit-date-time-placeholder-pref").innerHTML =
                                                formattedDate;
                                        }
                                        break;

                                    case "Unit version":
                                        {
                                            let MB_SW_Version = responseJson["MB SW version"];
                                            let MB_HW_Version = responseJson["MB HW version"];
                                            let MB_Model = responseJson["MB Model"];
                                            let System_item_number = responseJson["System Item Number"];
                                            let System_serial_number = responseJson["System Serial Number"];
                                            let IAM_SW_Version = responseJson["IAM SW version"];
                                            console.log("MB_SW_Version = ", MB_SW_Version);
                                            console.log("MB_HW_Version = ", MB_HW_Version);
                                            console.log("MB_Model = ", MB_Model);
                                            console.log("System_item_number = ", System_item_number);
                                            console.log("System_serial_number = ", System_serial_number);
                                            console.log("IAM_SW_Version = ", IAM_SW_Version);
                                            document.getElementById("model_placeholder").innerHTML = MB_Model;
                                            document.getElementById("serial_placeholder").innerHTML =
                                                System_serial_number;
                                            document.getElementById("mb_sw_placeholder").innerHTML = MB_SW_Version;
                                            document.getElementById("iam_sw_placeholder").innerHTML = IAM_SW_Version;
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Components":
                                    case "Components-config":
                                        {
                                            for (let key in responseJson) {
                                                let idx = responseJson[key];
                                                tabWindow.querySelector(`[id="${key}"]`).innerText =
                                                    ComponentTypeStrTbl[key][idx];
                                                console.log("typeStrTbl[key][idx] = ", ComponentTypeStrTbl[key][idx]);
                                                console.log(
                                                    key +
                                                        ".innerHTML = " +
                                                        tabWindow.querySelector(`[id="${key}"]`).innerHTML
                                                );
                                            }
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Sensor values":
                                        {
                                            Clear_Sensor_values();
                                            for (i = 0; i < REG_AI_CFG_CONNECTION_COUNT; i++) {
                                                sensorType = responseJson[REG_AI_CFG_CONNECTION_NTC + i];
                                                if (sensorType != 0) {
                                                    sensorTypeStr = senseTypeStr[sensorType];
                                                    const mapTypeValueTbl = {
                                                        1: 1,
                                                        2: 2,
                                                        3: 7,
                                                        4: 0,
                                                        5: 3,
                                                        6: 4,
                                                        7: 5,
                                                        8: 6,
                                                    };

                                                    sensorValue =
                                                        responseJson[REG_SENSOR_VAL + mapTypeValueTbl[sensorType]];
                                                    sensorValue =
                                                        (sensorValue > 32767 ? sensorValue - 65536 : sensorValue) / 10;

                                                    var sensor_value = {
                                                        Value: sensorValue,
                                                        LabelStr: sensorTypeStr,
                                                        Units: "&deg;C",
                                                        Div_to_append: "Sensor_values_temperatures",
                                                    };
                                                    Append_Sensor_values_obj(sensor_value);
                                                }
                                            }

                                            sensorType = responseJson[REG_UNIT_CONFIG_RHS_PDM];
                                            if (sensorType != 0) {
                                                sensorValue = responseJson[REG_SENSOR_RHS_PDM];
                                                var sensor_value = {
                                                    Value: sensorValue,
                                                    LabelStr: "Inbuilt RH",
                                                    Units: "%",
                                                    Div_to_append: "Sensor_values_air_quality_control",
                                                };
                                                Append_Sensor_values_obj(sensor_value);
                                            }

                                            for (i = 0; i < 2; i++) {
                                                sensorValue = responseJson[REG_SENSOR_RPM + i];
                                                console.log("sensor value = ", sensorValue);
                                                var sensor_value = {
                                                    Value: sensorValue,
                                                    LabelStr: senseTypeFanStr[i],
                                                    Units: "rpm",
                                                    Div_to_append: "Sensor_values_fan_control",
                                                };
                                                Append_Sensor_values_obj(sensor_value);
                                            }

                                            if (responseJson[REG_SENSOR_PDM_EAT_CONFIGURED] != 0) {
                                                sensorTypeStr = "Inbuilt Extract Air Temperature sensor";
                                                sensorValue = responseJson[REG_SENSOR_PDM_EAT_VALUE] / 10;

                                                var sensor_value = {
                                                    Value: sensorValue,
                                                    LabelStr: sensorTypeStr,
                                                    Units: "&deg;C",
                                                    Div_to_append: "Sensor_values_temperatures",
                                                };
                                                Append_Sensor_values_obj(sensor_value);
                                            }

                                            for (i = 0; i < REG_UI_CFG_TYPE_COUNT; i++) {
                                                // Universal input type 1 (Analog input) only
                                                if (responseJson[REG_UI_CFG_TYPE + i] == 1) {
                                                    sensorType = responseJson[REG_UI_CONNECTION_ANALOG + i];
                                                    // sensorMode RH or CO2 only, bc there is no reg description for other modes
                                                    // TODO: ask sysair for explanation!!!
                                                    if (sensorType > 0 && sensorType < 3) {
                                                        const uainConStr = {
                                                            0: "None",
                                                            1: "RH sensor (RH)",
                                                            2: "CO2 sensor (CO2)",
                                                            3: "Supply Air Fan Control (SAFC)",
                                                            4: "Extract Air Fan Control (EAFC)",
                                                            5: "Bypass damper Feedback (BYF)",
                                                        };
                                                        sensorTypeStr = uainConStr[sensorType];
                                                        var startRegister =
                                                            sensorType == 1 ? REG_SENSOR_RHS_VAL : REG_SENSOR_CO2S_VAL;
                                                        sensorValue = responseJson[startRegister + i];
                                                        var units;
                                                        if (sensorTypeStr === "CO2 sensor (CO2)") {
                                                            units = "ppm";
                                                        } else {
                                                            units = "%";
                                                        }
                                                        var sensor_value_air_quality = {
                                                            Value: sensorValue,
                                                            LabelStr: sensorTypeStr,
                                                            Units: units,
                                                            Div_to_append: "Sensor_values_air_quality_control",
                                                        };
                                                        console.log(
                                                            "appending sensor_value_air_quality = ",
                                                            sensor_value_air_quality
                                                        );
                                                        Append_Sensor_values_obj(sensor_value_air_quality);
                                                    }
                                                }
                                            }
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Input status":
                                        {
                                            tabTable = document.getElementById("idAINStatus");

                                            /* Analogue input status table */
                                            for (i = 0; i < REG_AI_CFG_CONNECTION_COUNT; i++) {
                                                // console.log(REG_AI_CFG_CONNECTION_COUNT + " " + (REG_AI_CFG_CONNECTION_NTC + i) + " " + responseJson[REG_AI_CFG_CONNECTION_NTC + i]);
                                                sensorType = responseJson[REG_AI_CFG_CONNECTION_NTC + i];
                                                if (sensorType != 0) {
                                                    j++;
                                                    // console.log(responseJson[REG_AI_CFG_CORRECTION_NTC + i]);
                                                    sensorTypeStr = senseTempStr[sensorType];
                                                    sensorCorrection = responseJson[REG_AI_CFG_CORRECTION_NTC + i];
                                                    sensorValue = responseJson[REG_SENSOR_VAL + (sensorType - 1)] / 10;

                                                    innerHTML += `<th style="padding-top: 12px;">Analogue Input ${j}</th>
                                                                                       <tr>
                                                                                           <td>Type:</td>
                                                                                           <td style="text-align: right;"><b>${sensorTypeStr}</b></td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td>Sensor correction:</td>
                                                                                           <td style="text-align: right;"><b>${sensorCorrection} &deg;C</b></td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td>Value:</td>
                                                                                           <td style="text-align: right;"><b>${sensorValue} &deg;C</b></td>
                                                                                       </tr>`;
                                                }
                                            }
                                            tabTable.innerHTML = innerHTML;

                                            /* Digital input status table */
                                            tabTable = document.getElementById("idDINStatus");
                                            innerHTML = "";
                                            j = 0;

                                            for (i = 0; i < REG_DI_CONNECTION_COUNT; i++) {
                                                // console.log(REG_DI_CONNECTION_COUNT + " " + (REG_DI_CONNECTION + i) + " " + responseJson[REG_DI_CONNECTION + i]);
                                                sensorType = responseJson[REG_DI_CONNECTION + i];
                                                if (sensorType != 0) {
                                                    j++;
                                                    sensorTypeStr = dinTypeStr[sensorType];
                                                    var dinPolarity =
                                                        responseJson[REG_DI_CFG_POLARITY + i] == 0
                                                            ? "Normally Open (NO)"
                                                            : "Normally Closed (NC)";
                                                    sensorValue =
                                                        responseJson[REG_INPUT_DIGITAL_DI + i] == 1 ? "ON" : "OFF";

                                                    innerHTML += `<th style="padding-top: 12px;">Digital Input ${j}</th>
                                                                                       <tr>
                                                                                           <td>Type:</td>
                                                                                           <td style="text-align: right;"><b>${sensorTypeStr}</b></td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td>Contact function:</td>
                                                                                           <td style="text-align: right;"><b>${dinPolarity}</b></td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td>Value:</td>
                                                                                           <td style="text-align: right;"><b>${sensorValue}</b></td>
                                                                                       </tr>`;
                                                }
                                            }
                                            tabTable.innerHTML = innerHTML;

                                            /* Universal input status table */
                                            tabTable = document.getElementById("idUINStatus");
                                            innerHTML = "";
                                            j = 0;

                                            for (i = 0; i < REG_UI_CFG_TYPE_COUNT; i++) {
                                                // console.log(REG_SENSOR_CO2S_COUNT + " " + (REG_SENSOR_CO2S_VAL + i) + " " + responseJson[REG_SENSOR_CO2S_VAL + i]);
                                                var modeType = responseJson[REG_UI_CFG_TYPE + i];
                                                if (modeType != 0) {
                                                    const uinModeStr = {
                                                        0: "None",
                                                        1: "Analogue Input",
                                                        2: "Digital Input",
                                                    };
                                                    modeTypeStr = uinModeStr[modeType];
                                                    switch (modeTypeStr) {
                                                        case "None": {
                                                            console.log(
                                                                "Shouldn't get here. Mode type: " + modeTypeStr
                                                            );
                                                            return;
                                                        }
                                                        case "Analogue Input":
                                                            {
                                                                sensorType = responseJson[REG_UI_CONNECTION_ANALOG + i];
                                                                const uainConStr = {
                                                                    0: "None",
                                                                    1: "RH",
                                                                    2: "CO2",
                                                                    3: "SAFC",
                                                                    4: "EAFC",
                                                                    5: "BYF",
                                                                };
                                                                if (sensorType != 0) {
                                                                    // j++;
                                                                    sensorTypeStr = uainConStr[sensorType];
                                                                }
                                                                console.log(
                                                                    "Not sure about dependencies to show values"
                                                                );
                                                            }
                                                            break;
                                                        case "Digital Input":
                                                            {
                                                                sensorType =
                                                                    responseJson[REG_UI_CONNECTION_DIGITAL + i];
                                                                sensorTypeStr = dinTypeStr[sensorType];
                                                                if (sensorType != 0) {
                                                                    j++;
                                                                    let dinPolarity =
                                                                        responseJson[REG_UI_CFG_POLARITY_DIGITAL + i] ==
                                                                        0
                                                                            ? "Normally Open (NO)"
                                                                            : "Normally Closed (NC)";
                                                                    sensorValue =
                                                                        responseJson[REG_INPUT_DIGITAL_UI + i] == 1
                                                                            ? "ON"
                                                                            : "OFF";

                                                                    innerHTML += `<th style="padding-top: 12px;">Universal Input ${j}</th>
                                                                                                       <tr>
                                                                                                           <td>Mode:</td>
                                                                                                           <td style="text-align: right;"><b>${modeTypeStr}</b></td>
                                                                                                       </tr>
                                                                                                       <tr>
                                                                                                           <td>Type:</td>
                                                                                                           <td style="text-align: right;"><b>${sensorTypeStr}</b></td>
                                                                                                       </tr>
                                                                                                       <tr>
                                                                                                           <td>Polarity:</td>
                                                                                                           <td style="text-align: right;"><b>${dinPolarity}</b></td>
                                                                                                       </tr>
                                                                                                       <tr>
                                                                                                           <td>Value:</td>
                                                                                                           <td style="text-align: right;"><b>${sensorValue}</b></td>
                                                                                                       </tr>`;
                                                                }
                                                            }
                                                            break;
                                                        default:
                                                            {
                                                                console.log("Unknown mode type: " + modeType);
                                                            }
                                                            break;
                                                    }
                                                }
                                            }
                                            tabTable.innerHTML = innerHTML;
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Output status":
                                        {
                                            /* Analogue output status table */
                                            tabTable = document.getElementById("idAOUTStatus");

                                            for (i = 0; i < REG_AO_CFG_CONNECTION_COUNT; i++) {
                                                sensorType = responseJson[REG_AO_CFG_CONNECTION + i];
                                                if (sensorType != 0) {
                                                    const aoutTypeStr = {
                                                        0: "None",
                                                        1: "Heater",
                                                        2: "Heat Exchanger",
                                                        3: "Cooler",
                                                        4: "Extra Controller",
                                                        5: "Change Over",
                                                        6: "Temperature Setpoint",
                                                    };
                                                    j++;
                                                    sensorTypeStr = aoutTypeStr[sensorType];
                                                    sensorValue = responseJson[REG_AO_AFTER_MUX + i] / 10;
                                                    innerHTML += `<th style="padding-top: 12px;">Analogue Output ${j}</th>
                                                                                       <tr>
                                                                                           <td>Type:</td>
                                                                                           <td style="text-align: right;"><b>${sensorTypeStr}</b></td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td>Value:</td>
                                                                                           <td style="text-align: right;"><b>${sensorValue} V</b></td>
                                                                                       </tr>`;
                                                }
                                            }
                                            tabTable.innerHTML = innerHTML;

                                            /* Digital output status table */
                                            tabTable = document.getElementById("idDOUTStatus");
                                            innerHTML = "";
                                            j = 0;

                                            for (i = 0; i < REG_DO_CFG_CONNECTION_COUNT; i++) {
                                                sensorType = responseJson[REG_DO_CFG_CONNECTION + i];
                                                if (sensorType != 0) {
                                                    const doutTypeStr = {
                                                        0: "None",
                                                        1: "Step Y1 Heating",
                                                        2: "Step Y2 Exchanger",
                                                        3: "Step Y3 Cooling",
                                                        4: "Step Y4 ExtraController Alarm",
                                                        5: "Outdoor Exhaust Air Damper",
                                                        6: "Secondary Air",
                                                        7: "Activate Cooling",
                                                        8: "Interlock External Fan Control",
                                                        9: "Circulation Pump Y1 Heating",
                                                        10: "Circulation Pump Y3 Cooling",
                                                        11: "Circulation Pump Y1 Y3 Change Over",
                                                        12: "Circulation Pump Y4 Extra Controller",
                                                        13: "Unit status OK",
                                                        14: "WS unscheduled",
                                                        15: "WS scheduled",
                                                    };
                                                    j++;
                                                    sensorTypeStr = doutTypeStr[sensorType];
                                                    sensorValue =
                                                        responseJson[REG_DO_AFTER_MUX + i] == 1 ? "ON" : "OFF";
                                                    innerHTML += `<th style="padding-top: 12px;">Digital Output ${j}</th>
                                                                                       <tr>
                                                                                           <td>Type:</td>
                                                                                           <td style="text-align: right;"><b>${sensorTypeStr}</b></td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td>Value:</td>
                                                                                           <td style="text-align: right;"><b>${sensorValue}</b></td>
                                                                                       </tr>`;
                                                }
                                                tabTable.innerHTML = innerHTML;
                                            }
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Alarms":
                                        {
                                            /* Active alarms table */
                                            tabTable = document.getElementById("idAlarmActive");
                                            const alarmTypeStr = {
                                                0: "Supply air fan control",
                                                1: "Extract air fan control",
                                                2: "Frost Protection",
                                                3: "Defrosting",
                                                4: "Supply air fan RPM",
                                                5: "Extract air fan RPM",
                                                6: "Frost protection temperature sensor",
                                                7: "Outside air temperature sensor",
                                                8: "Supply air temperature sensor",
                                                9: "Room air temperature sensor",
                                                10: "Extract air temperature sensor",
                                                11: "Extra controller temperature sensor",
                                                12: "Efficiency temperature sensor",
                                                13: "Overheat temperature sensor",
                                                14: "Emergency thermostat",
                                                15: "Rotor Guard",
                                                16: "Bypass damper",
                                                17: "Secondary Air",
                                                18: "Filter",
                                                19: "Extra Controller",
                                                20: "External Stop",
                                                21: "RH sensor",
                                                22: "CO2 sensor",
                                                23: "Low supply air temperature",
                                                24: "Bypass damper feedback",
                                                25: "Manual Mode",
                                                26: "Inbuilt relative humidity sensor",
                                                27: "Inbuilt extract air temperature",
                                                28: "Manual Fan Stop",
                                                29: "Overheating",
                                                30: "Fire",
                                                31: "Filter Warning",
                                                32: "Rotor motor feedback",
                                            };
                                            let timestampReg = REG_ALARM_TS_1ST;
                                            let alarmBaseReg = REG_ALARM_SAF;
                                            let ALARM_STATUS_POS = 1;
                                            let ALARM_BTN_POS = 2;
                                            let ALARM_REG_GAP = 7;
                                            let ALARM_TS_GAP = 2;

                                            innerHTML += `<table class="sensor-values-table" style="min-width: 25%; width: 350px">`;
                                            for (i = 0; i < REG_ALARM_TOTAL_COUNT; i++) {
                                                if (
                                                    responseJson[String(alarmBaseReg + ALARM_STATUS_POS)] != 0 &&
                                                    responseJson[String(alarmBaseReg + ALARM_STATUS_POS)] != 2
                                                ) {
                                                    sensorTypeStr = alarmTypeStr[i];
                                                    let ackStatus = "UNKNOWN";
                                                    if (responseJson[String(alarmBaseReg + ALARM_STATUS_POS)] == 3) {
                                                        ackStatus = "ACKNOWLEDGED";
                                                    } else {
                                                        ackStatus =
                                                            responseJson[String(alarmBaseReg)] == 1
                                                                ? "ACTIVE"
                                                                : "RETURNED";
                                                    }
                                                    let ackBtn = alarmBaseReg + ALARM_BTN_POS;
                                                    let timestamp =
                                                        responseJson[String(timestampReg + 1)] * 65536 +
                                                        responseJson[String(timestampReg)] -
                                                        760516096;
                                                    let date = new Date(timestamp * 1000);
                                                    let alarmDate =
                                                        date.getUTCFullYear() +
                                                        "-" +
                                                        ("0" + (date.getUTCMonth() + 1)).slice(-2) +
                                                        "-" +
                                                        ("0" + date.getUTCDate()).slice(-2);

                                                    let alarmTime =
                                                        ("0" + date.getUTCHours()).slice(-2) +
                                                        ":" +
                                                        ("0" + date.getUTCMinutes()).slice(-2) +
                                                        ":" +
                                                        ("0" + date.getUTCSeconds()).slice(-2);
                                                    innerHTML += `<th colspan="2" class="top-item">${sensorTypeStr} alarm</th>
                                                                                       <tr>
                                                                                           <td class="td-left-aligned">Date:</td>
                                                                                           <td class="td-right-aligned">${alarmDate}</td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td class="td-left-aligned">Time:</td>
                                                                                           <td class="td-right-aligned">${alarmTime}</td>
                                                                                       </tr>
                                                                                       <tr>
                                                                                           <td class="alarm_result" style="width: 100%" id="${alarmBaseReg}">${ackStatus}</td>
                                                                                           <td><button class="systemair-button-active" id="${ackBtn}" onClick="sendAck(this)">Acknowledge</button></td>
                                                                                       </tr>`;
                                                }

                                                alarmBaseReg += ALARM_REG_GAP;
                                                if (alarmBaseReg == 15042) {
                                                    alarmBaseReg = REG_ALARM_FPT;
                                                } else if (alarmBaseReg == 15189) {
                                                    alarmBaseReg = REG_ALARM_MANUAL_OVERRIDE_OUTPUTS;
                                                } else if (alarmBaseReg == 15549) {
                                                    alarmBaseReg = REG_ALARM_ROTOR_MOTOR_FEEDBACK;
                                                }

                                                timestampReg += ALARM_TS_GAP;
                                                if (timestampReg == 15312) {
                                                    timestampReg = REG_ALARM_TS_2ND;
                                                } else if (timestampReg == 15612) {
                                                    timestampReg = REG_ALARM_TS_4TH;
                                                } else if (alarmBaseReg == 15183) {
                                                    timestampReg = 15354;
                                                } else if (alarmBaseReg == REG_ALARM_MANUAL_OVERRIDE_OUTPUTS) {
                                                    timestampReg = REG_ALARM_TS_3RD;
                                                } else if (alarmBaseReg == 15535) {
                                                    timestampReg = 15352;
                                                } else if (alarmBaseReg == 15542) {
                                                    timestampReg = 15610;
                                                }
                                            }
                                            innerHTML += `</table><br />`;
                                            tabTable.innerHTML = innerHTML;
                                            innerHTML = "";

                                            /* Alarms log table */
                                            tabTable = document.getElementById("idAlarmLog");
                                            // different order than in alarmTypeStr, but same names
                                            const logWrnTypeStr = {
                                                0: "Frost Protection",
                                                1: "Frost protection temperature sensor",
                                                2: "Defrosting",
                                                3: "Supply air fan RPM",
                                                4: "Extract air fan RPM",
                                                5: "Supply air fan control",
                                                6: "Extract air fan control",
                                                7: "Emergency thermostat",
                                                8: "Bypass damper",
                                                9: "Rotor Guard",
                                                10: "Secondary Air",
                                                11: "Outside air temperature sensor",
                                                12: "Overheat temperature",
                                                13: "Supply air temperature sensor",
                                                14: "Room air temperature sensor",
                                                15: "Extract air temperature sensor",
                                                16: "Extra controller temperature sensor",
                                                17: "Efficiency temperature sensor",
                                                18: "Inbuilt relative humidity sensor",
                                                19: "Inbuilt extract air temperature",
                                                20: "Filter",
                                                21: "Extra Controller",
                                                22: "External Stop",
                                                23: "Manual Fan Stop",
                                                24: "Overheating",
                                                25: "Low supply air temperature",
                                                26: "CO2 sensor",
                                                27: "RH sensor",
                                                28: "Manual Mode",
                                                29: "Fire",
                                                30: "Filter Warning",
                                                31: "Rotor motor feedback",
                                                32: "Bypass damper feedback",
                                            };
                                            innerHTML += `<table class="sensor-values-table" style="min-width: 25%; width: 350px">`;
                                            for (i = 0; i < REG_ALARM_LOG_COUNT / 10; i++) {
                                                alarmBaseReg = REG_ALARM_LOG_START + i * 10;
                                                sensorType = responseJson[String(alarmBaseReg)];
                                                sensorTypeStr = logWrnTypeStr[sensorType];
                                                let logDate =
                                                    "20" +
                                                    responseJson[String(alarmBaseReg + REG_ALARM_TS_YEAR_POS)] +
                                                    "-" +
                                                    (
                                                        "0" +
                                                        responseJson[String(alarmBaseReg + REG_ALARM_TS_MONTH_POS)]
                                                    ).slice(-2) +
                                                    "-" +
                                                    (
                                                        "0" + responseJson[String(alarmBaseReg + REG_ALARM_TS_DAY_POS)]
                                                    ).slice(-2);

                                                let logTime =
                                                    (
                                                        "0" + responseJson[String(alarmBaseReg + REG_ALARM_TS_HOUR_POS)]
                                                    ).slice(-2) +
                                                    ":" +
                                                    (
                                                        "0" + responseJson[String(alarmBaseReg + REG_ALARM_TS_MIN_POS)]
                                                    ).slice(-2) +
                                                    ":" +
                                                    (
                                                        "0" + responseJson[String(alarmBaseReg + REG_ALARM_TS_SEC_POS)]
                                                    ).slice(-2);

                                                const alarmLogStateStr = {
                                                    0: "Inactive",
                                                    1: "Active",
                                                    2: "Waiting",
                                                    3: "Acknowledged",
                                                };

                                                let logStatus =
                                                    alarmLogStateStr[
                                                        responseJson[String(alarmBaseReg + REG_ALARM_LOG_STATE_POS)]
                                                    ];

                                                /*
                                                let logStatus = responseJson[
                                                    String(alarmBaseReg + REG_ALARM_LOG_STATE_POS)
                                                ]
                                                    ? "Acknowledged"
                                                    : "Returned";
                                                */

                                                innerHTML += `<th colspan="2" class="top-item">${sensorTypeStr} alarm</th>
                                                                       <tr>
                                                                           <td class="td-left-aligned">Date:</td>
                                                                           <td  class="td-right-aligned">${logDate}</td>
                                                                       </tr>
                                                                       <tr>
                                                                           <td class="td-left-aligned">Time:</td>
                                                                           <td  class="td-right-aligned">${logTime}</td>
                                                                       </tr>
                                                                       <tr>
                                                                           <td class="td-left-aligned">Status:</td>
                                                                           <td  class="td-right-aligned">${logStatus}</td>
                                                                       </tr>`;
                                            }
                                            innerHTML += `</table><br />`;
                                            tabTable.innerHTML = innerHTML;
                                            document.getElementById("active_alarms").click();
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    /* CONFIGURATION TAB */
                                    case "Input":
                                        {
                                            // Clear all inputs 1st
                                            Clear_Analog_Inputs();
                                            Clear_Digital_Inputs();
                                            Clear_Universal_Inputs();

                                            console.log("updateTabValues: " + tabName);

                                            /* Analog input table */
                                            for (i = 0; i < REG_AI_CFG_CONNECTION_COUNT; i++) {
                                                // console.log(REG_AI_CFG_CONNECTION_COUNT + " " + (REG_AI_CFG_CONNECTION_NTC + i) + " " + responseJson[REG_AI_CFG_CONNECTION_NTC + i]);
                                                sensorType = responseJson[String(REG_AI_CFG_CONNECTION_NTC + i)];
                                                if (sensorType == 0) {
                                                    sensorValue = 0;
                                                } else {
                                                    sensorValue =
                                                        responseJson[String(Analog_type_to_Value_reg[sensorType])];
                                                    sensorValue =
                                                        (sensorValue > 32767 ? sensorValue - 65536 : sensorValue) / 10;
                                                }
                                                sensorCorrection = responseJson[String(REG_AI_CFG_CORRECTION_NTC + i)];
                                                sensorCorrection =
                                                    (sensorCorrection > 32767
                                                        ? sensorCorrection - 65536
                                                        : sensorCorrection) / 10;

                                                const input_args = {
                                                    Type: {
                                                        ID: REG_AI_CFG_CONNECTION_NTC + i,
                                                        Value: sensorType,
                                                    },
                                                    Value: {
                                                        ID: Analog_type_to_Value_reg[sensorType],
                                                        Value: sensorValue,
                                                    },
                                                    Correction: {
                                                        ID: REG_AI_CFG_CONNECTION_NTC + i + 20,
                                                        Value: sensorCorrection,
                                                    },
                                                    LabelStr: Analog_input_name[REG_AI_CFG_CONNECTION_NTC + i],
                                                    TypeStr: InputATypeStr[sensorType],
                                                    DivId: "a_in_" + (i + 1),
                                                };

                                                //   console.log(
                                                //     "AIN INPUT ARGS:\r\n" + JSON.stringify(input_args, null, 2)
                                                //   );
                                                Append_Analog_Input_obj(input_args);
                                            }

                                            /* Digital input table */
                                            for (i = 0; i < REG_DI_CONNECTION_COUNT; i++) {
                                                // console.log(REG_DI_CONNECTION_COUNT + " " + (REG_DI_CONNECTION + i) + " " + responseJson[REG_DI_CONNECTION + i]);
                                                sensorType = responseJson[String(REG_DI_CONNECTION + i)];
                                                var dinPolarity = responseJson[String(REG_DI_CFG_POLARITY + i)];
                                                sensorValue = responseJson[String(REG_INPUT_DIGITAL_DI + i)];
                                                // invert sensor value if polarity value is 1 (normally closed)
                                                sensorValue = dinPolarity == 1 ? ~sensorValue & 1 : sensorValue;

                                                const input_args = {
                                                    Type: { ID: REG_DI_CONNECTION + i, Value: sensorType }, // Type.ID corresponds to "Digital Input 1" or "Digital Input 2" whereas Type.Value determines input type such as "Crowded"
                                                    Value: {
                                                        ID: REG_DI_CONNECTION + i + 630,
                                                        Value: Digital_value[sensorValue],
                                                    }, // Value.ID corresponds to state of D1 register. For D1 is always 12030 and D2 is 12031
                                                    CF: {
                                                        ID: REG_DI_CONNECTION + i + 20,
                                                        Value: Contact_function_e[dinPolarity],
                                                    }, // CF.ID is always Type.ID + 20
                                                    LabelStr: Digital_input_name[REG_DI_CONNECTION + i], // convert Type.ID to string. For example: 11400 = "Digital Input 1"
                                                    TypeStr: UDI_Type[sensorType], // Convert Type.Value to string. For example 5 = "Crowded"
                                                    DivId: "d_in_" + (i + 1), // Div that is being is when the IO is expanded
                                                };

                                                //   console.log(
                                                //     "DIN INPUT ARGS:\r\n" + JSON.stringify(input_args, null, 2)
                                                //   );
                                                Append_Digital_Input_obj(input_args);
                                            }

                                            // FANS
                                            for (i = 0; i < REG_COUNT_2; i++) {
                                                sensorValue = responseJson[String(REG_SENSOR_RPM + i)];
                                                let input_args = {
                                                    Value: { ID: REG_SENSOR_RPM, Value: sensorValue },
                                                    LabelStr: Digital_feedback_label[REG_SENSOR_RPM + i],
                                                };

                                                //   console.log(
                                                //     "DIN INPUT ARGS:\r\n" + JSON.stringify(input_args, null, 2)
                                                //   );
                                                Append_Digital_Input_obj(input_args);
                                            }

                                            /* Universal input table */
                                            // UAI/UDI
                                            for (i = 0; i < REG_UI_CFG_TYPE_COUNT; i++) {
                                                // console.log(REG_SENSOR_CO2S_COUNT + " " + (REG_SENSOR_CO2S_VAL + i) + " " + responseJson[REG_SENSOR_CO2S_VAL + i]);
                                                let modeType = responseJson[String(REG_UI_CFG_TYPE + i)];
                                                let typeReg = convert_Mode_to_Type_ID(REG_UI_CFG_TYPE + i, modeType);
                                                let optionTypeReg = convert_Mode_to_Option_ID(
                                                    REG_UI_CFG_TYPE + i,
                                                    modeType
                                                );
                                                let typeValue = 0;
                                                let typeValName = 0;
                                                let optionTypeValue = 0;
                                                sensorValue = 0;
                                                let valueUnits = "";

                                                if (modeType != 0) {
                                                    typeValue = responseJson[String(typeReg)];
                                                    let sensorValReg = convert_Mode_to_Value_ID(
                                                        REG_UI_CFG_TYPE + i,
                                                        typeValue,
                                                        modeType
                                                    );
                                                    if (modeType == 1) {
                                                        const typeUnits = {
                                                            0: "",
                                                            1: "%",
                                                            2: "ppm",
                                                            3: "V",
                                                            4: "V",
                                                            5: "V",
                                                        };
                                                        typeValName = UAI_Type[typeValue];
                                                        if (typeValue > 0 && typeValue < 3) {
                                                            optionTypeValue = responseJson[String(optionTypeReg)];
                                                        }
                                                        optionTypeValue =
                                                            optionTypeValue > 32767
                                                                ? optionTypeValue - 65536
                                                                : optionTypeValue;
                                                        sensorValue = responseJson[String(sensorValReg)];
                                                        // can CO2 ppm value be negative?
                                                        sensorValue = sensorValue > 32767 ? 0 : sensorValue;
                                                        console.log("sensorValue = ", sensorValue);
                                                        valueUnits = typeUnits[typeValue];
                                                        if (typeValue >= 3) {
                                                            sensorValue = sensorValue / 10;
                                                        }
                                                    } else if (modeType == 2) {
                                                        typeValName = UDI_Type[typeValue];
                                                        let dinPolarity = responseJson[String(optionTypeReg)];
                                                        optionTypeValue = Contact_function_e[dinPolarity];
                                                        sensorValue = responseJson[String(sensorValReg)];
                                                        // invert sensor value if polarity value is 1 (normally closed)
                                                        sensorValue = dinPolarity == 1 ? ~sensorValue & 1 : sensorValue;
                                                        sensorValue = Digital_value[sensorValue];
                                                    }

                                                    const input_args = {
                                                        Mode: {
                                                            ID: REG_UI_CFG_TYPE + i,
                                                            Value: UniversalModeStr[modeType],
                                                        }, //determine if we are dealing with digital or analog input
                                                        Type: {
                                                            ID: typeReg,
                                                            Value: typeValName,
                                                        },
                                                        Option: { ID: optionTypeReg, Value: optionTypeValue },
                                                        Value: {
                                                            ID: sensorValReg,
                                                            Value: sensorValue,
                                                        },
                                                        LabelStr: "Universal Input " + (i + 1),
                                                        DivId: "u_in_" + (i + 1), // Div that is being is when the IO is expanded
                                                        Units: valueUnits,
                                                    };

                                                    Append_Universal_Input_obj(input_args);
                                                } else {
                                                    const input_args = {
                                                        Mode: {
                                                            ID: REG_UI_CFG_TYPE + i,
                                                            Value: UniversalModeStr[modeType],
                                                        }, //determine if we are dealing with digital or analog input
                                                        LabelStr: "Universal Input " + (i + 1),
                                                        DivId: "u_in_" + (i + 1), // Div that is being is when the IO is expanded
                                                    };

                                                    Append_Universal_Input_obj(input_args);
                                                }
                                            }

                                            // EAT
                                            sensorCorrection = responseJson[String(REG_PDM_CORRECTION_T)];
                                            sensorCorrection =
                                                (sensorCorrection > 32767
                                                    ? sensorCorrection - 65536
                                                    : sensorCorrection) / 10;
                                            let input_uni_EAT = {
                                                EAT_Conf: {
                                                    ID: 11501,
                                                    Value: UI_Status[responseJson[String(11501)]],
                                                },
                                                EAT_Value: {
                                                    ID: REG_SENSOR_PDM_EAT_VALUE,
                                                    Value: responseJson[String(REG_SENSOR_PDM_EAT_VALUE)] / 10,
                                                },
                                                EAT_Correction: {
                                                    ID: REG_PDM_CORRECTION_T,
                                                    Value: sensorCorrection,
                                                },
                                                LabelStr: "Inbuilt EAT sensor",
                                                DivId: "u_in_EAT", // Div that is being is when the IO is expanded
                                                Units: "&deg;C",
                                            };
                                            Append_Universal_Input_obj(input_uni_EAT);

                                            // RH
                                            sensorCorrection = responseJson[String(REG_PDM_CORRECTION_RH)];
                                            sensorCorrection =
                                                sensorCorrection > 32767 ? sensorCorrection - 65536 : sensorCorrection;
                                            let input_uni_RH = {
                                                EAT_Conf: {
                                                    ID: 11500,
                                                    Value: UI_Status[responseJson["11500"]],
                                                },
                                                EAT_Value: {
                                                    ID: REG_SENSOR_RHS_PDM,
                                                    Value: responseJson[String(REG_SENSOR_RHS_PDM)],
                                                },
                                                EAT_Correction: {
                                                    ID: REG_PDM_CORRECTION_RH,
                                                    Value: sensorCorrection,
                                                },
                                                LabelStr: "Inbuilt RH sensor",
                                                DivId: "u_in_RH", // Div that is being is when the IO is expanded
                                                Units: "%",
                                            };
                                            Append_Universal_Input_obj(input_uni_RH);

                                            // PC1/PC2
                                            let safCorrection = responseJson["23038"];
                                            safCorrection =
                                                safCorrection > 32767 ? safCorrection - 65536 : safCorrection;

                                            let eafCorrection = responseJson["23039"];
                                            eafCorrection =
                                                eafCorrection > 32767 ? eafCorrection - 65536 : eafCorrection;

                                            let safvalue = responseJson["23000"];
                                            safvalue = safvalue > 32767 ? safvalue - 65536 : safvalue;

                                            let eafvalue = responseJson["23001"];
                                            eafvalue = eafvalue > 32767 ? eafvalue - 65536 : eafvalue;

                                            let input_uni_PC1 = {
                                                Type: {
                                                    ID: 23035,
                                                    Value: Pressure_card_type[responseJson["23035"]],
                                                },
                                                SAF: {
                                                    Correction: { ID: 23038, Value: safCorrection },
                                                    Value: { ID: 23000, Value: safvalue },
                                                },
                                                EAF: {
                                                    Correction: { ID: 23039, Value: eafCorrection },
                                                    Value: { ID: 23001, Value: eafvalue },
                                                },
                                                LabelStr: "Pressure card 1",
                                                Units: "Pa",
                                            };
                                            Append_Universal_Input_obj(input_uni_PC1);

                                            safCorrection = responseJson["23138"];
                                            safCorrection =
                                                safCorrection > 32767 ? safCorrection - 65536 : safCorrection;

                                            eafCorrection = responseJson["23139"];
                                            eafCorrection =
                                                eafCorrection > 32767 ? eafCorrection - 65536 : eafCorrection;

                                            safvalue = responseJson["23100"];
                                            safvalue = safvalue > 32767 ? safvalue - 65536 : safvalue;

                                            eafvalue = responseJson["23101"];
                                            eafvalue = eafvalue > 32767 ? eafvalue - 65536 : eafvalue;

                                            let input_uni_PC2 = {
                                                Type: {
                                                    ID: 23135,
                                                    Value: Pressure_card_type[responseJson["23135"]],
                                                },
                                                SAF: {
                                                    Correction: { ID: 23138, Value: safCorrection },
                                                    Value: { ID: 23100, Value: safvalue },
                                                },
                                                EAF: {
                                                    Correction: { ID: 23139, Value: eafCorrection },
                                                    Value: { ID: 23101, Value: eafvalue },
                                                },
                                                LabelStr: "Pressure card 2",
                                                Units: "Pa",
                                            };
                                            Append_Universal_Input_obj(input_uni_PC2);
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Output":
                                        {
                                            // Clear all outputs 1st
                                            Clear_Analog_Output();
                                            Clear_Digital_Output();

                                            console.log("updateTabValues: " + tabName);
                                            let valueType = 0;
                                            let sensorValueReg = 0;

                                            /* AOUT */
                                            for (i = 0; i < REG_COUNT_5; i++) {
                                                let sensorTypeReg = REG_AO_CFG_CONNECTION + i;
                                                sensorType = responseJson[String(sensorTypeReg)];
                                                valueType = responseJson[String(sensorTypeReg + 500)];
                                                sensorValueReg =
                                                    valueType == 0 ? sensorTypeReg + 310 : sensorTypeReg + 700;
                                                const input_args = {
                                                    Type: {
                                                        ID: sensorTypeReg,
                                                        Value: OutputATypeStr[sensorType],
                                                    },
                                                    Type_Value: {
                                                        ID: sensorTypeReg + 500,
                                                        Value: OutputTypeOfValue[valueType],
                                                    },
                                                    Value: {
                                                        ID: sensorValueReg,
                                                        Value: responseJson[String(sensorValueReg)] / 10,
                                                    },
                                                    LabelStr: "Analogue Output " + (i + 1),
                                                    DivId: "a_out_" + (i + 1), // Div that is being is when the IO is expanded
                                                    Units: "V",
                                                };

                                                //   console.log(
                                                //     "AOUT ARGS:\r\n" + JSON.stringify(input_args, null, 2)
                                                //   );
                                                Append_Analog_Output_obj(input_args);
                                            }

                                            sensorType = responseJson["13200"];
                                            valueType = responseJson["13509"];
                                            sensorValueReg = valueType == 0 ? 2148 : 13709;
                                            const triac_args = {
                                                Type: { ID: 13200, Value: TriacOutputType[sensorType] },
                                                Type_Value: {
                                                    ID: 13509,
                                                    Value: OutputTypeOfValue[valueType],
                                                },
                                                Value: {
                                                    ID: sensorValueReg,
                                                    Value: responseJson[String(sensorValueReg)],
                                                },
                                                LabelStr: "Triac Output",
                                                DivId: "a_out_triac", // Div that is being is when the IO is expanded
                                                Units: "%",
                                            };

                                            // console.log(
                                            //   "TRIAC ARGS:\r\n" + JSON.stringify(triac_args, null, 2)
                                            // );
                                            Append_Analog_Output_obj(triac_args);

                                            for (i = 0; i < REG_COUNT_2; i++) {
                                                valueType = responseJson[String(13600 + i)];
                                                sensorValueReg = valueType == 0 ? 14000 + i : 13800 + i;
                                                const outputNameStr = {
                                                    0: "SAF",
                                                    1: "EAF",
                                                };
                                                const input_args = {
                                                    Type_Value: {
                                                        ID: 13600 + i,
                                                        Value: OutputTypeOfValue[valueType],
                                                    },
                                                    Value: {
                                                        ID: sensorValueReg,
                                                        Value: responseJson[String(sensorValueReg)],
                                                    },
                                                    LabelStr: outputNameStr[i] + " Output", // convert Type.ID to string. For example: 11400 = "Digital Input 1"
                                                    DivId: outputNameStr[i] + "_out", // Div that is being is when the IO is expanded
                                                    Units: "%",
                                                };

                                                //   console.log(
                                                //     outputNameStr[i] +
                                                //       " ARGS:\r\n" +
                                                //       JSON.stringify(input_args, null, 2)
                                                //   );
                                                Append_Analog_Output_obj(input_args);
                                            }

                                            /* DOUT */
                                            for (i = 0; i < REG_COUNT_4; i++) {
                                                let sensorTypeReg = REG_DO_CFG_CONNECTION + i;
                                                sensorType = responseJson[String(sensorTypeReg)];
                                                valueType = responseJson[String(sensorTypeReg + 405)];
                                                sensorValueReg =
                                                    valueType == 0 ? sensorTypeReg + 200 : sensorTypeReg + 605;
                                                sensorValue = responseJson[String(sensorValueReg)];
                                                const input_args = {
                                                    Type: {
                                                        ID: sensorTypeReg,
                                                        Value: OutputDTypeStr[sensorType],
                                                    },
                                                    Type_Value: {
                                                        ID: sensorTypeReg + 405,
                                                        Value: OutputTypeOfValue[valueType],
                                                    },
                                                    Value: {
                                                        ID: sensorValueReg,
                                                        Value: Digital_value[sensorValue],
                                                    },
                                                    LabelStr: "Digital Output " + (i + 1),
                                                    DivId: "d_out_" + (i + 1), // Div that is being is when the IO is expanded
                                                    Units: "",
                                                };

                                                //   console.log(
                                                //     "DOUT ARGS:\r\n" + JSON.stringify(input_args, null, 2)
                                                //   );
                                                Append_Digital_Output_obj(input_args);
                                            }
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "Airflow Levels Settings":
                                        {
                                            // UPDATE LOW/HIGH LIMITS
                                            let saf_low_limit = 100;
                                            let saf_high_limit = 1000;
                                            let eaf_low_limit = 100;
                                            let eaf_high_limit = 1000;

                                            // check selected airflow type and calculate low/high limits
                                            let airFlowType = document.getElementById("1273").value;
                                            if (airFlowType != 0 && airFlowType != 1) {
                                                if (airFlowType == 2) {
                                                    saf_low_limit = responseJson["12700"];
                                                    saf_high_limit = responseJson["12701"];
                                                    eaf_low_limit = responseJson["12800"];
                                                    eaf_high_limit = responseJson["12801"];
                                                } else if (airFlowType == 3) {
                                                    //12706 and 12806 are negative

                                                    if (responseJson["23035"] == 0 && responseJson["23135"] == 0) {
                                                        saf_low_limit = Math.round(
                                                            responseJson["14400"] * Math.pow(responseJson["12700"], 0.5)
                                                        );
                                                        saf_high_limit = Math.round(
                                                            responseJson["14400"] *
                                                                Math.pow(
                                                                    responseJson["12701"] - responseJson["12700"],
                                                                    0.5
                                                                )
                                                        );
                                                        eaf_low_limit = Math.round(
                                                            responseJson["14401"] * Math.pow(responseJson["12800"], 0.5)
                                                        );
                                                        eaf_high_limit = Math.round(
                                                            responseJson["14401"] *
                                                                Math.pow(
                                                                    responseJson["12801"] - responseJson["12800"],
                                                                    0.5
                                                                )
                                                        );
                                                    } else {
                                                        console.log("responseJson[12706] = ", responseJson["12706"]);
                                                        console.log("responseJson[12806] = ", responseJson["12806"]);

                                                        let signed_12706 = responseJson[12706];
                                                        signed_12706 =
                                                            signed_12706 > 32767 ? signed_12706 - 65536 : signed_12706;

                                                        let signed_12705 = responseJson[12705];
                                                        signed_12705 =
                                                            signed_12705 > 32767 ? signed_12705 - 65536 : signed_12705;

                                                        let signed_12805 = responseJson[12805];
                                                        signed_12805 =
                                                            signed_12805 > 32767 ? signed_12805 - 65536 : signed_12805;

                                                        let signed_12806 = responseJson[12806];
                                                        signed_12806 =
                                                            signed_12806 > 32767 ? signed_12806 - 65536 : signed_12806;

                                                        console.log("signed_12706 = ", signed_12706);
                                                        console.log("signed_12705 = ", signed_12705);
                                                        console.log("signed_12805 = ", signed_12805);
                                                        console.log("signed_12806 = ", signed_12806);

                                                        console.log("responseJson[9001] =", responseJson["9001"]);

                                                        let saf_k_factor =
                                                            (signed_12705 / 100) * Math.pow(500, signed_12706 / 1000);
                                                        console.log("saf_k_factor test = ", saf_k_factor);
                                                        let eaf_k_factor =
                                                            (signed_12805 / 100) * Math.pow(500, signed_12806 / 1000);
                                                        console.log("eaf_k_factor test = ", eaf_k_factor);
                                                        saf_low_limit = 0;
                                                        eaf_low_limit = 0;
                                                        if (responseJson["9001"] == 0) {
                                                            saf_high_limit = Math.floor(
                                                                (saf_k_factor * Math.pow(500, 0.5)) / 3.6
                                                            );
                                                            eaf_high_limit = Math.floor(
                                                                (eaf_k_factor * Math.pow(500, 0.5)) / 3.6
                                                            );
                                                        } else if (responseJson["9001"] == 1) {
                                                            saf_high_limit = Math.floor(
                                                                saf_k_factor * Math.pow(500, 0.5)
                                                            );
                                                            eaf_high_limit = Math.floor(
                                                                eaf_k_factor * Math.pow(500, 0.5)
                                                            );
                                                        } else {
                                                            saf_high_limit = Math.floor(
                                                                (saf_k_factor * Math.pow(500, 0.5)) / 0.5886
                                                            );
                                                            eaf_high_limit = Math.floor(
                                                                (eaf_k_factor * Math.pow(500, 0.5)) / 0.5886
                                                            );
                                                        }
                                                    }
                                                }

                                                document.getElementById(
                                                    "safRangeCaption"
                                                ).innerHTML = `${saf_low_limit} - ${saf_high_limit}`;
                                                document.getElementById(
                                                    "eafRangeCaption"
                                                ).innerHTML = `${eaf_low_limit} - ${eaf_high_limit}`;

                                                console.log(
                                                    "saf_low_limit = " +
                                                        saf_low_limit +
                                                        " saf_high_limit = " +
                                                        saf_high_limit +
                                                        " eaf_low_limit = " +
                                                        eaf_low_limit +
                                                        " eaf_high_limit = " +
                                                        eaf_high_limit
                                                );
                                            }

                                            for (let key in responseJson) {
                                                if (Number(key) >= 1400 && Number(key) <= 1439) {
                                                    let element = document.getElementById(key);
                                                    if (element != null) {
                                                        element.value = responseJson[key];
                                                        if (airFlowType != 0 && airFlowType != 1) {
                                                            if (Number(key) % 2 == 0) {
                                                                element.min = saf_low_limit;
                                                                element.max = saf_high_limit;
                                                            } else {
                                                                element.min = eaf_low_limit;
                                                                element.max = eaf_high_limit;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                    case "FWs update":
                                        {
                                            /* FWs update FWs list */
                                            constructFWUpdateList(responseJson);
                                        }
                                        break;
                                    case "Unit Backups":
                                        {
                                            console.log("responseJson = ", responseJson);
                                            var is_config_valid_value =
                                                responseJson[String(REG_USER_SAFE_CONFIG_VALID)];
                                            console.log("is_config_valid_value = ", is_config_valid_value);
                                            if (is_config_valid_value == 0) {
                                                hide_div("activate_configuration");
                                            } else if (is_config_valid_value == 1) {
                                                unhide_div("activate_configuration");
                                            }
                                            var button = document.getElementById("unit_backups_btn");
                                            button.setAttribute("hidden", "hidden");
                                        }
                                        break;
                                    case "Software Update":
                                        {
                                            console.log("Handle software update json =" + responseJson);
                                            constructFWList(responseJson);
                                        }
                                        break;
                                    case "Control regulation":
                                        {
                                            var heat_exchanger_type = responseJson[2132];
                                            if (heat_exchanger_type == "0") {
                                                unhide_div("Moisture_transfer_placeholder");
                                            } else {
                                                hide_div("Moisture_transfer_placeholder");
                                            }
                                        }
                                        break;
                                    // ----------------------------------------------------------------------------------------------------------------------
                                }
                            } else {
                                // Add check if response is not JSON format
                                alert("Error: " + this.responseText);
                                console.log("NOT AN OBJECT");
                            }
                        }
                    }
                };
                xhttp.overrideMimeType("application/json");
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            /******************
             * Tab cfg setter *
             ******************/

            function configureParamValues(tabName, extraID, ID_to_discard) {
                console.log("configureParamValues");
                console.log("tabName = ", tabName);
                console.log("extraID = ", extraID);
                console.log("ID_to_discard = ", ID_to_discard);

                //check all all inputs inside the div, hidden inputs should not be detected

                //var ID_to_discard_decoded = JSON.parse(decodeURIComponent(ID_to_discard));
                //console.log("ID_to_discard = ",ID_to_discard_decoded);

                let tab = document.getElementById(tabName);
                let divs_to_hide = checkDivElementsVisibility(tab);
                //console.log("divs to hide = ", divs_to_hide);

                let inputs = tab.querySelectorAll("input, select");
                let requestStr = "mwrite?";
                let strForm = {};

                if (
                    tabName == "Network settings" ||
                    tabName == "wifi_config_result" ||
                    tabName == "wifi_mode_div" ||
                    tabName == "wifi_hotspot_config_result" ||
                    tabName == "cloud_domain_config"
                ) {
                    requestStr = "cfgset?";
                }
                for (const element of inputs) {
                    let id = element.id;
                    // skip id3 (Authentication mode) for Network settings tab as we keep it only for representation and not configuration
                    if (id != "3") {
                        let val = element.value;
                        console.log(element.type);
                        if (element.type == "checkbox" && element.hasAttribute("id") == false) {
                            // skip checkbox if it has no id
                        } else {
                            if (
                                element.type == "number" ||
                                element.type == "select-one" ||
                                element.type == "checkbox"
                            ) {
                                if (id != 10) {
                                    // *10 registers add to array below
                                    const multiplyRegVal = [
                                        2000, 2503, 2400, 2402, 2403, 2419, 2420, 2421, 2422, 2112, 2450, 2315, 2040,
                                        2053, 2021, 2020, 2010, 2200, 2314, 1150, 13700, 13701, 13702, 13703, 13704,
                                        11020, 11021, 11022, 11023, 11024, 11025, 11026, 11503, 13030, 13031, 1253,
                                        1255, 1256, 1257, 4102, 4103, 4104,
                                    ];
                                    // make integer from string
                                    val = +val;
                                    for (const element of multiplyRegVal) {
                                        if (element == id) {
                                            // if registers 11220-11225, we also ned to check type. If type is C02, need to do *10, otherwise 1:1
                                            val *= 10;
                                            console.log(id + ": value * 10 = " + val);
                                            break;
                                        }
                                    }
                                }
                            }
                            if (
                                id != 4105 &&
                                id != 4106 &&
                                id != 4107 &&
                                id != 4108 &&
                                id != 8003 &&
                                id != 6000 &&
                                id != 6001 &&
                                id != 6002 &&
                                id != 6003 &&
                                id != 6004
                            ) {
                                strForm[id] = val;
                            } else {
                                strForm[id] = Number(val);
                            }
                            // add exception for start and end time to ensure they are not sent in string format
                        }

                        if (tabName == "Date and Time") {
                            if (id == 6003) {
                                if (document.getElementById("6007").checked == true) {
                                    console.log("24 hour format is checked ");
                                } else {
                                    console.log("24 hour format is not checked");
                                    if (document.getElementById("ampm").value == 1) {
                                        console.log("PM selected");
                                        if (strForm[id] == 12) {
                                            // do nothing
                                        } else {
                                            strForm[id] = val + 12;
                                        }
                                    } else {
                                        console.log("AM selected");
                                        strForm[id] = val;
                                        if (strForm[id] == 12) {
                                            strForm[id] = val - 12;
                                        } else {
                                            strForm[id] = val;
                                        }
                                    }
                                }
                            }
                        }

                        if (tabName == "Free Cooling") {
                            if (id == 4105) {
                                if (document.getElementById("6007").checked == true) {
                                    console.log("24 hour format is checked ");
                                } else {
                                    console.log("24 hour format is not checked");
                                    if (document.getElementById("ampm_freecooling_start").value == 1) {
                                        console.log("PM selected freecooling start");
                                        if (strForm[id] == 12) {
                                            // do nothing
                                        } else {
                                            strForm[id] = val + 12;
                                        }
                                    } else {
                                        console.log("AM selected freecooling start");
                                        strForm[id] = val;
                                        if (strForm[id] == 12) {
                                            strForm[id] = val - 12;
                                        } else {
                                            strForm[id] = val;
                                        }
                                    }
                                }
                            }
                        }

                        if (tabName == "Free Cooling") {
                            if (id == 4107) {
                                if (document.getElementById("6007").checked == true) {
                                    console.log("24 hour format is checked ");
                                } else {
                                    console.log("24 hour format is not checked");
                                    if (document.getElementById("ampm_freecooling_end").value == 1) {
                                        console.log("PM selected freecooling end");
                                        if (strForm[id] == 12) {
                                            // do nothing
                                        } else {
                                            strForm[id] = val + 12;
                                        }
                                    } else {
                                        console.log("AM selected freecooling end");
                                        strForm[id] = val;
                                        if (strForm[id] == 12) {
                                            strForm[id] = val - 12;
                                        } else {
                                            strForm[id] = val;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (divs_to_hide.length > 0) {
                    for (const element of divs_to_hide) {
                        //console.log("removing div = " + element);
                        delete strForm[element];
                    }
                }

                if (extraID != null) {
                    console.log("appending extraID = ", extraID);
                    let tab_extra_value;
                    tab_extra_value = document.getElementById(extraID).value;
                    if (tab_extra_value == null) {
                        console.log("value is undefined");
                        tab_extra_value = document.getElementById(extraID).innerHTML;
                        console.log("inner html = ", tab_extra_value);
                    }
                    console.log("extra id value = ", tab_extra_value);
                    strForm[extraID] = parseInt(tab_extra_value);
                }

                if (ID_to_discard != null) {
                    if (Array.isArray(ID_to_discard)) {
                        console.log("object");
                        for (const element of ID_to_discard) {
                            delete strForm[element.id];
                        }
                    } else {
                        console.log("not object");
                        delete strForm[ID_to_discard];
                    }
                }

                if (
                    tabName == "wifi_config_result" ||
                    tabName == "wifi_hotspot_config_result" ||
                    tabName == "cloud_domain_config"
                ) {
                    strForm = encodeURIComponent(JSON.stringify(strForm));
                } else {
                    strForm = JSON.stringify(strForm);
                }

                console.log(strForm);
                requestStr += strForm;
                console.log(requestStr);
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);
                        // Handle response pop-up window ACK/NACK
                        if (this.responseText === "OK") {
                            if (tabName != "backdrop") {
                                alert("Parameters written successfully");
                            }
                            if (tabName == "Filter" || tabName == "Home" || tabName == "Modify_IO") {
                                setTimeout(updateTabValues(tabName), 2000);
                            }
                        } else if (this.responseText === "ERROR") {
                            alert("Undefined error");
                        } else if (this.responseText === "WRITE TMO") {
                            alert("Write timeout");
                        } else if (this.responseText === "RESPONSE TMO") {
                            alert("Response timeout");
                        }
                    }
                };
                xhttp.overrideMimeType("application/json");
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            /*************
             * FW update *
             *************/
            //selecting all required elements
            const dropArea = document.querySelector(".drag-area"),
                dragText = dropArea.querySelector("span"),
                input = dropArea.querySelector("input"),
                progressArea = document.querySelector(".progress-area"),
                uploadedArea = document.querySelector(".uploaded-area"),
                fwListArea = document.querySelector(".contained-area");
            var file; //this is a global variable and we'll use it inside multiple functions

            // Drag and Drop area click
            dropArea.onclick = () => {
                input.click();
            };

            input.addEventListener("change", function () {
                //getting user select file and [0] this means if user select multiple files then we'll select only the first one
                file = this.files[0];
                dropArea.classList.add("active");
                dragText.textContent = file.name;
            });

            //If user Drag File Over DropArea
            dropArea.addEventListener("dragover", (event) => {
                event.preventDefault(); //preventing from default behaviour
                dropArea.classList.add("active");
                dragText.textContent = "Release to Upload File";
            });

            //If user leave dragged File from DropArea
            dropArea.addEventListener("dragleave", () => {
                dropArea.classList.remove("active");
                dragText.textContent = "Drag & Drop to Upload File";
            });

            //If user drop File on DropArea
            dropArea.addEventListener("drop", (event) => {
                event.preventDefault(); //preventing from default behaviour
                //getting user select file and [0] this means if user select multiple files then we'll select only the first one
                file = event.dataTransfer.files[0];
                dragText.textContent = file.name;
            });

            // file upload function
            function uploadFile() {
                if (file === undefined) {
                    alert("Select a firmware file to proceed");
                    return;
                }
                let fileName = file.name;
                let fileExt = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length) || undefined;
                switch (fileExt) {
                    case "bin":
                        break;
                    case "txt":
                        break;
                    default:
                        alert(
                            "Wrong file type selected or has no file extention [" +
                                fileExt +
                                "]. Supported file extentions: .bin, .txt"
                        );
                        return;
                }

                const MAX_FILE_SIZE = 4096 * 1024; // 4096 KB -> 4 MB
                let ready = false;

                if (file.length == 0) {
                    alert("File path on server is not set!");
                } else if (fileName.indexOf(" ") >= 0) {
                    alert("File name cannot have spaces!");
                } else if (fileName[fileName.length - 1] == "/") {
                    alert("File name not specified after path!");
                } else if (file.size > MAX_FILE_SIZE) {
                    alert("File is too large! File size limit: " + MAX_FILE_SIZE / 1024 + " KB");
                } else {
                    let uploadPath = "/upload/" + fileName;
                    let xhttp = new XMLHttpRequest();
                    xhttp.open("POST", uploadPath, true);
                    xhttp.upload.addEventListener("progress", ({ loaded, total }) => {
                        var fileLoaded = Math.floor((loaded / total) * 100);
                        var fileTotal = Math.floor(total / 1000);
                        var fileSize =
                            fileTotal < 1024 ? fileTotal + " KB" : (loaded / (1024 * 1024)).toFixed(2) + " MB";
                        var progressHTML = `<li class="row">
                                                                       <div class="content">
                                                                           <div class="details">
                                                                               <span class="name">${fileName} • Uploading</span>
                                                                               <span class="percent">${fileLoaded}%</span>
                                                                           </div>
                                                                           <div class="progress-bar">
                                                                               <div class="progress" style="width: ${fileLoaded}%"></div>
                                                                           </div>
                                                                       </div>
                                                                   </li>`;
                        // uploadedArea.innerHTML = ""; //uncomment this line if you don't want to show upload history
                        uploadedArea.classList.add("onprogress");
                        progressArea.innerHTML = progressHTML;
                        if (loaded == total) {
                            ready = true;
                            /* progressArea.innerHTML = ""; */
                            var uploadedHTML = `<li class="row">
                                                                           <div class="content upload">
                                                                               <div class="details">
                                                                                   <span class="name">${fileName} • Uploaded</span>
                                                                                   <span class="size">${fileSize}</span>
                                                                               </div>
                                                                           </div>
                                                                       </li>`;
                            uploadedArea.classList.remove("onprogress");
                            uploadedArea.innerHTML = uploadedHTML; //uncomment this line if you want to show upload history
                            // uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML); //uncomment this line if you don't want to show upload history
                        }
                    });
                    xhttp.onreadystatechange = function () {
                        if (xhttp.readyState == 4) {
                            if (xhttp.status == 200) {
                                console.log(xhttp.responseText);
                                console.log(xhttp);
                                if (!ready) {
                                    document.open();
                                    document.write(xhttp.responseText);
                                    document.close();
                                } else {
                                    console.log(xhttp.responseText);
                                    if (this.responseText === "EMPTY") {
                                        alert("FS empty");
                                    } else if (this.responseText === "Restarting...") {
                                        alert(this.responseText);
                                    } else {
                                        const list = JSON.parse(this.responseText);
                                        constructFWUpdateList(list);
                                    }
                                }
                            } else if (xhttp.status == 0) {
                                alert("Server closed the connection abruptly!");
                                location.reload();
                            } else {
                                alert(xhttp.status + " Error!\n" + xhttp.responseText);
                                location.reload();
                            }
                        }
                    };
                    xhttp.send(file);
                }
            }

            //todo determine if we can perform update or there is no option to do update (new firmware not present)

            function constructFWList(fwList) {
                //console.log("fwList = ", fwList);

                console.log("MB_flash versions:");
                for (const key in fwList.MB_flash) {
                    if (fwList.MB_flash.hasOwnProperty(key)) {
                        console.log(`${key}: ${fwList.MB_flash[key]}`);
                    }
                }

                // Print the versions of HMIs
                console.log("\nHMI versions:");
                fwList.HMIs.forEach((hmi) => {
                    for (const key in hmi) {
                        if (key.startsWith("HMI_") || key === "MB_file ver") {
                            console.log(`${key}: ${hmi[key]}`);
                        }
                    }
                });

                // Print the versions of IAM_flash
                console.log("\nIAM_flash versions:");
                for (const key in fwList.IAM_flash) {
                    if (fwList.IAM_flash.hasOwnProperty(key)) {
                        console.log(`${key}: ${fwList.IAM_flash[key]}`);
                    }
                }
                //MB VERSIONS
                let MB_Flash_mb_file_ver = fwList.MB_flash["MB_file ver"];
                let MB_Flash_hmi_file_ver = fwList.MB_flash["HMI_file ver"];
                let MB_Flash_res_file_ver = fwList.MB_flash["HMI_resources_file ver"];
                console.log("MB_Flash_mb_file_ver = ", MB_Flash_mb_file_ver);
                console.log("MB_Flash_hmi_file_ver = ", MB_Flash_hmi_file_ver);
                console.log("MB_Flash_res_file_ver = ", MB_Flash_res_file_ver);

                //IAM VERSIONS
                let IAM_Flash_mb_file_ver = fwList.IAM_flash["MB_file ver"];
                let IAM_Flash_hmi_file_ver = fwList.IAM_flash["HMI_file ver"];
                let IAM_Flash_res_file_ver = fwList.IAM_flash["HMI_resources_file ver"];
                console.log("IAM_Flash_mb_file_ver = ", IAM_Flash_mb_file_ver);
                console.log("IAM_Flash_hmi_file_ver = ", IAM_Flash_hmi_file_ver);
                console.log("IAM_Flash_res_file_ver = ", IAM_Flash_res_file_ver);

                //HMI VERSIONS
                let HMI_Flash_mb_file_ver = fwList.HMIs.map((hmi) => hmi["MB_file ver"]);
                let HMI_Flash_hmi_file_ver = fwList.HMIs.map((hmi) => hmi["HMI_file ver"]);
                let HMI_Flash_res_file_ver = fwList.HMIs.map((hmi) => hmi["HMI_resources_file ver"]);
                console.log("HMI_Flash_mb_file_ver = ", HMI_Flash_mb_file_ver);
                console.log("HMI_Flash_hmi_file_ver = ", HMI_Flash_hmi_file_ver);
                console.log("HMI_Flash_res_file_ver = ", HMI_Flash_res_file_ver);

                let fwListTbl = `<table class="software-update-table">
                                                           <th></th>
                                                           <th>MB</th>
                                                           <th>HMI</th>
                                                           <th>RES</th>
                                                           `;
                fwList["HMIs"].forEach((element) => {
                    fwListTbl += `<tr>
                                                           <td>HMI${element["number"]}</td>
                                                           <td class="item-bold">${element["MB_file ver"]}</td>
                                                           <td class="item-bold">${element["HMI_file ver"]}</td>
                                                           <td class="item-bold">${element["HMI_resources_file ver"]}</td>
                                                       </tr>`;
                });

                fwListTbl += `<tr>
                                                       <td>MB</td>
                                                       <td class="item-bold">${fwList["MB_flash"]["MB_file ver"]}</td>
                                                       <td class="item-bold">${fwList["MB_flash"]["HMI_file ver"]}</td>
                                                       <td class="item-bold">${fwList["MB_flash"]["HMI_resources_file ver"]}</td>
                                                   </tr>`;

                fwListTbl += `<tr>
                                                       <td>IAM</td>
                                                       <td class="item-bold">${fwList["IAM_flash"]["MB_file ver"]}</td>
                                                       <td class="item-bold">${fwList["IAM_flash"]["HMI_file ver"]}</td>
                                                       <td class="item-bold">${fwList["IAM_flash"]["HMI_resources_file ver"]}</td>
                                                   </tr>`;

                fwListTbl += `</table>`;

                fwListTbl += `


                <div id = "start_update_placeholder" style="max-width: 400px">
                    <button
                        class="unit-version-button"
                        id = "20015"
                        onclick="start_update()"
                    >
                        Start Update
                    </button>
                </div>

                            <div class="backdrop" id="popup_update"></div>`;

                document.getElementById("fwList").innerHTML = fwListTbl;

                let update_status = fwList["Start_update"];
                console.log("update_status = ", update_status);
                if (update_status == "true") {
                    console.log("update status true");
                    unhide_div("start_update_placeholder");
                } else {
                    console.log("update status false");
                    hide_div("start_update_placeholder");
                }
            }

            function constructFWUpdateList(fwList) {
                let fwListAreaHTML = "";
                for (let i in fwList) {
                    fwListAreaHTML += `<li class="row">
                                                        <span class="name">${fwList[i]}</span>
                                                        <button class="action" onclick="openTab(event, 'Software Update'); document.getElementById('fwList').innerHTML = 'Scanning...'">Update</button>
                                                    </li>`;
                }
                fwListArea.innerHTML = fwListAreaHTML;
            }

            var timeInterval, tmoCnt;

            function initiateFWUpdate(fwString) {
                var targetList = ["IAM", "Mainboard", "HMI"];
                var result, targetString;
                for (let i in targetList) {
                    result = fwString.indexOf(targetList[i]);
                    if (result != -1) {
                        targetString = targetList[i];
                        break;
                    }
                }
                if (result == -1) {
                    alert("Smth went wrong");
                    return;
                }
                var postString = "/update/" + fwString;
                console.log(postString);
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);
                        if (this.responseText == "MB disconnected" || this.responseText == "Update scheduled") {
                            // var mb_stat = document.getElementById("idMbStat");
                            // mb_stat.innerHTML =
                            //   'Disconnected <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
                            // mb_stat.className = "red";
                            alert(this.responseText);
                            return;
                        }
                        // restrict interactions with page
                        document.getElementById("overlay").style.visibility = "visible";
                        [].map.call(document.getElementsByClassName("main"), function (elem) {
                            elem.addEventListener(
                                "keydown",
                                function (e) {
                                    if (e.keyCode != 9) {
                                        // allow tab key to escape out
                                        e.returnValue = false;
                                        return false;
                                    }
                                },
                                true
                            );
                        });
                        console.log("INPUT: " + targetString);
                        if (targetString == "IAM") {
                            tmoCnt = 15;
                            updateCountdown();
                            timeInterval = setInterval(updateCountdown, 1000);
                        } else {
                            tmoCnt = 0;
                            // run update status check
                            timeInterval = setInterval(updateStatus, 1000);
                        }
                    } else {
                        console.log("STATUS: " + this.status);
                    }
                };
                xhttp.open("POST", postString, true);
                xhttp.send();
            }

            var days, hours, mins, secs;

            function updateCountdown() {
                console.log(tmoCnt);
                console.log(document.getElementById("modal"));
                mins = Math.floor(tmoCnt / 60);
                secs = Math.floor(tmoCnt % 60);
                document.getElementById("modal").innerText = ("0" + mins).slice(-2) + ":" + ("0" + secs).slice(-2);
                tmoCnt--;
                if (tmoCnt < 0) {
                    clearInterval(timeInterval);
                    location.reload(true);
                }
            }

            function updateStatus() {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);
                        if (this.responseText == "IDLE") {
                            clearInterval(timeInterval);
                            location.reload(true);
                        } else if (this.responseText == "IN PROGRESS") {
                            mins = Math.floor(tmoCnt / 60);
                            secs = Math.floor(tmoCnt % 60);
                            document.getElementById("modal").innerText =
                                ("0" + mins).slice(-2) + ":" + ("0" + secs).slice(-2);
                            tmoCnt++;
                        }
                    }
                };
                xhttp.open("GET", "/upd_status", true);
                xhttp.send();
            }

            function updateRemainingTime() {
                days = Math.floor(remaining_time / 60 / 60 / 24);
                hours = Math.floor((remaining_time / 60 / 60) % 24);
                mins = Math.floor((remaining_time / 60) % 60);
                secs = Math.floor(remaining_time % 60);

                if (days >= 1) {
                    document.getElementById("1110").innerText =
                        days +
                        "d " +
                        ("0" + hours).slice(-2) +
                        ":" +
                        ("0" + mins).slice(-2) +
                        ":" +
                        ("0" + secs).slice(-2);
                } else {
                    document.getElementById("1110").innerText =
                        ("0" + hours).slice(-2) + ":" + ("0" + mins).slice(-2) + ":" + ("0" + secs).slice(-2);
                }
                remaining_time--;
                if (remaining_time < 0) {
                    clearRemainingTime();
                }
            }

            function clearRemainingTime() {
                clearInterval(remaining_time_interval);
                remaining_time_interval = undefined;
                document.getElementById("1110").innerText = "";
            }

            function scanWiFi_new(btnSpinner) {
                console.log("scan wifi new ");
                var getString = "/scan";
                console.log(getString);
                btnSpinner.classList.toggle("button--loading");
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            console.log(this.responseText);
                            if (this.responseText === "ERR") {
                                alert("Failed to scan wifi");
                                return;
                            }

                            var innerHTML = ``;
                            const responseJson = JSON.parse(this.responseText);
                            if (typeof responseJson === "object") {
                                var ssidList = responseJson["10"];
                                ssidList.forEach((element) => {
                                    if (cfgStaSSID != "" && element == cfgStaSSID) {
                                        console.log(cfgStaSSID + " | " + element);
                                        innerHTML += `<div style="padding-bottom: 5px">
                                                                    <input type="checkbox" class="checkbox-round-unit-backups" value="${element}" name="wifi" onclick="onlyOne(this)" checked/>
                                                                    <label>${element}</label>
                                                                  </div>
                                                                `;
                                    } else {
                                        innerHTML += `<div style="padding-bottom: 5px">
                                                                    <input type="checkbox" class="checkbox-round-unit-backups" value="${element}" name="wifi" onclick="onlyOne(this)"/>
                                                                    <label>${element}</label>
                                                                  </div>
                                                                `;
                                    }
                                });
                            }
                            document.getElementById("scanned_ssids").innerHTML = innerHTML;
                        } else {
                            console.log("STATUS: " + this.status + "| STATE: " + this.readyState);
                        }
                        btnSpinner.classList.toggle("button--loading");
                    } else {
                        console.log("STATUS: " + this.status + "| STATE: " + this.readyState);
                    }
                };
                xhttp.open("GET", getString, true);
                xhttp.send();
            }

            // lukas test
            function user_mode_popup_construct(sel) {
                console.log(sel);
                if (parseInt(sel.value) >= 3 && parseInt(sel.value) <= 7) {
                    console.log("CHECK PASS");
                    const mode_map = {
                        Holiday: {
                            ID: 1100,
                            units: "d",
                            limits: { min: "1", max: "365", def: "1" },
                            step: 1,
                        },
                        Away: {
                            ID: 1101,
                            units: "h",
                            limits: { min: "1", max: "72", def: "1" },
                            step: 1,
                        },
                        Fireplace: {
                            ID: 1102,
                            units: "min",
                            limits: { min: "1", max: "60", def: "1" },
                            step: 1,
                        },
                        Refresh: {
                            ID: 1103,
                            units: "min",
                            limits: { min: "1", max: "240", def: "1" },
                            step: 1,
                        },
                        Crowded: {
                            ID: 1104,
                            units: "h",
                            limits: { min: "1", max: "8", def: "1" },
                            step: 1,
                        },
                    };
                    var user_mode_popup = document.getElementById("backdrop");
                    var mode_name = sel.options[sel.selectedIndex].text;
                    user_mode_popup.style.display = "flex";
                    user_mode_popup.innerHTML = `
                                   <div class="popdiv">
                                   <table class="popup-table">
                                       <tr>
                                       <th colspan="3" class="popup-header">${mode_name}</th>
                                       </tr>
                                       <tr>
                                       <td class="popup-input-text">Activate for</td>
                                       <td class="popup-input-number">
                                           <button
                                           style="border:none; background: none; color: #004985"
                                           onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                           >
                                           <svg
                                               xmlns="http://www.w3.org/2000/svg"
                                               width="24"
                                               height="24"
                                               viewBox="0 0 24 24"
                                               fill="none"
                                               stroke="currentColor"
                                               stroke-width="2"
                                               stroke-linecap="round"
                                               stroke-linejoin="round"
                                               class="feather feather-chevron-up"
                                           >
                                               <polyline points="18 15 12 9 6 15"></polyline>
                                           </svg>
                                           </button>
                                           <br />
                                           <input
                                               id="${mode_map[mode_name].ID}"
                                               type="number"
                                               style="
                                                   border: none;
                                                   color: #037bc7 !important;
                                                   text-align: center;
                                                   padding-left:0px !important;
                                                   text-decoration: underline;
                                                   max-width: 40px;
                                                   color: #004985;
                                               "
                                               min="${mode_map[mode_name].limits.min}"
                                               max="${mode_map[mode_name].limits.max}"
                                               step="${mode_map[mode_name].step}"
                                               value="${mode_map[mode_name].limits.def}"
                                               onblur="imposeMinMax(this)"
                                           />
                                           <span class="popup">
                                               <h class="popup-input-text">${mode_map[mode_name].units}</h>
                                               <span class="popuptext"></span>
                                           </span>
                                           <br />

                                                       <button
                                                       style="border: none; background: none; color: #004985"
                                                       onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                       >
                                                       <svg
                                                           xmlns="http://www.w3.org/2000/svg"
                                                           width="24"
                                                           height="24"
                                                           viewBox="0 0 24 24"
                                                           fill="none"
                                                           stroke="currentColor"
                                                           stroke-width="2"
                                                           stroke-linecap="round"
                                                           stroke-linejoin="round"
                                                           class="feather feather-chevron-down"
                                                       >
                                                           <polyline points="6 9 12 15 18 9"></polyline>
                                                       </svg>
                                                       </button>
                                                   </td>
                                                   </tr>

                                                   <tr>
                                                   <td>
                                                       <button
                                                       class="popup-button-cancel"
                                                       onclick="user_mode_popup_cancel('backdrop')"
                                                       >
                                                       Cancel
                                                       </button>
                                                   </td>
                                                   <td>
                                                       <button
                                                       class="popup-button-ok"
                                                       onclick="user_mode_popup_configure('backdrop')"
                                                       >
                                                       OK
                                                       </button>
                                                   </td>
                                                   </tr>
                                               </table>
                                               </div>
                                           `;
                    updateTabValues("backdrop");
                }
            }

            function reveal_hidden_menu_user_modes(sel, user_mode) {
                console.log("mode = ", user_mode);

                if (user_mode == "away") {
                    console.log("away mode selected");
                    document.getElementById("backdrop_name_away").textContent = "Away";
                    document.getElementById("backdrop_away_mode").style.display = "flex";
                    document.getElementById("fake_away").value = sel.value;
                }

                if (user_mode == "crowded") {
                    console.log("crowded mode selected");
                    document.getElementById("backdrop_name_crowded").textContent = "Crowded";
                    document.getElementById("backdrop_crowded_mode").style.display = "flex";
                    document.getElementById("fake_crowded").value = sel.value;
                }

                if (user_mode == "fireplace") {
                    console.log("fireplace mode selected");
                    document.getElementById("backdrop_name_fireplace").textContent = "Fireplace";
                    document.getElementById("backdrop_fireplace_mode").style.display = "flex";
                    document.getElementById("fake_fireplace").value = sel.value;
                }

                if (user_mode == "holiday") {
                    console.log("holiday mode selected");
                    document.getElementById("backdrop_name_holiday").textContent = "Holiday";
                    document.getElementById("backdrop_holiday_mode").style.display = "flex";
                    document.getElementById("fake_holiday").value = sel.value;
                }

                if (user_mode == "refresh") {
                    console.log("refresh mode selected");
                    document.getElementById("backdrop_name_refresh").textContent = "Refresh";
                    document.getElementById("backdrop_refresh_mode").style.display = "flex";
                    document.getElementById("fake_refresh").value = sel.value;
                }

                if (user_mode == "dig_in1") {
                    console.log("dig_in1 mode selected");
                    document.getElementById("backdrop_name_dig_in1").textContent = "Config. digital input 1";
                    document.getElementById("backdrop_dig_in1_mode").style.display = "flex";
                    document.getElementById("fake_din1").value = sel.value;
                }

                if (user_mode == "dig_in2") {
                    console.log("dig_in2 mode selected");
                    document.getElementById("backdrop_name_dig_in2").textContent = "Config. digital input 2";
                    document.getElementById("backdrop_dig_in2_mode").style.display = "flex";
                    document.getElementById("fake_din2").value = sel.value;
                }

                if (user_mode == "dig_in3") {
                    console.log("dig_in3 mode selected");
                    document.getElementById("backdrop_name_dig_in3").textContent = "Config digital input 3";
                    document.getElementById("backdrop_dig_in3_mode").style.display = "flex";
                    document.getElementById("fake_din3").value = sel.value;
                }
            }

            /**
             *
             * This function is called when hidden menu ok is clicked
             */
            //  backdrop_user_mode
            // backdrop
            function hidden_menu_ok(select) {
                var away_mode = select.localeCompare("backdrop_away_mode");
                var crowded = select.localeCompare("backdrop_crowded_mode");
                var fireplace_mode = select.localeCompare("backdrop_fireplace_mode");
                var holiday_mode = select.localeCompare("backdrop_holiday_mode");
                var refresh_mode = select.localeCompare("backdrop_refresh_mode");

                var dig_in1_mode = select.localeCompare("backdrop_dig_in1_mode");
                var dig_in2_mode = select.localeCompare("backdrop_dig_in2_mode");
                var dig_in3_mode = select.localeCompare("backdrop_dig_in3_mode");
                var home = select.localeCompare("backdrop");

                //var select = document.getElementById("1161");
                //var mode_selected = select.options[select.selectedIndex].text;
                //var id = select.options[select.selectedIndex].id;

                if (away_mode == 0) {
                    console.log("hide away menu");
                    var away_element = document.getElementById("1181");
                    var away_element_value = away_element.value;
                    console.log("away_element = ", away_element);
                    console.log("away_element_value = ", away_element_value);
                    document.getElementById("backdrop_away_mode").style.display = "none";
                    document.getElementById("away_placeholder").value = away_element_value;
                }
                if (crowded == 0) {
                    var crowded_element = document.getElementById("1184");
                    var crowded_element_value = crowded_element.value;
                    console.log("crowded_element = ", crowded_element);
                    console.log("crowded_element_value = ", crowded_element_value);
                    console.log("hide crowded menu");
                    document.getElementById("backdrop_crowded_mode").style.display = "none";
                    document.getElementById("crowded_placeholder").value = crowded_element_value;
                }
                if (fireplace_mode == 0) {
                    var fireplace_element = document.getElementById("1182");
                    var fireplace_element_value = fireplace_element.value;
                    console.log("fireplace_element = ", fireplace_element);
                    console.log("fireplace_element_value = ", fireplace_element_value);
                    console.log("hide fireplace menu");
                    document.getElementById("backdrop_fireplace_mode").style.display = "none";
                    document.getElementById("fireplace_placeholder").value = fireplace_element_value;
                }
                if (holiday_mode == 0) {
                    var holiday_element = document.getElementById("1180");
                    var holiday_element_value = holiday_element.value;
                    console.log("holiday_element = ", holiday_element);
                    console.log("holiday_element_value = ", holiday_element_value);
                    console.log("hide holiday menu");
                    document.getElementById("backdrop_holiday_mode").style.display = "none";
                    document.getElementById("holiday_placeholder").value = holiday_element_value;
                }
                if (refresh_mode == 0) {
                    var refresh_element = document.getElementById("1183");
                    var refresh_element_value = refresh_element.value;
                    console.log("refresh_element = ", refresh_element);
                    console.log("refresh_element_value = ", refresh_element_value);
                    console.log("hide refresh menu");
                    document.getElementById("backdrop_refresh_mode").style.display = "none";
                    document.getElementById("refresh_placeholder").value = refresh_element_value;
                }
                if (dig_in1_mode == 0) {
                    var dig_in1_element = document.getElementById("1187");
                    var dig_in1_element_value = dig_in1_element.value;
                    console.log("dig_in1_element = ", dig_in1_element);
                    console.log("dig_in1_element_value = ", dig_in1_element_value);
                    console.log("hide dig_in1 menu");
                    document.getElementById("backdrop_dig_in1_mode").style.display = "none";
                    document.getElementById("dig_in1_placeholder").value = dig_in1_element_value;
                }
                if (dig_in2_mode == 0) {
                    var dig_in2_element = document.getElementById("1188");
                    var dig_in2_element_value = dig_in2_element.value;
                    console.log("dig_in2_element = ", dig_in2_element);
                    console.log("dig_in2_element_value = ", dig_in2_element_value);
                    console.log("hide dig_in2 menu");
                    document.getElementById("backdrop_dig_in2_mode").style.display = "none";
                    document.getElementById("dig_in2_placeholder").value = dig_in2_element_value;
                }
                if (dig_in3_mode == 0) {
                    var dig_in3_element = document.getElementById("1189");
                    var dig_in3_element_value = dig_in2_element.value;
                    console.log("dig_in3_element = ", dig_in3_element);
                    console.log("dig_in3_element_value = ", dig_in3_element_value);
                    console.log("hide dig_in3 menu");
                    document.getElementById("backdrop_dig_in3_mode").style.display = "none";
                    document.getElementById("dig_in3_placeholder").value = dig_in3_element_value;
                }

                if (home == 0) {
                    document.getElementById("backdrop").style.display = "none";
                    const strForm = {};
                    var requestStr = "mwrite?";
                    strForm[id] = document.getElementById("1110").value;
                    requestStr += JSON.stringify(strForm);
                    console.log(requestStr);
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            if (this.responseText == "MB DISCONNECTED") {
                                // var mb_stat = document.getElementById("idMbStat");
                                // mb_stat.innerHTML = 'Disconnected <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';
                                // mb_stat.className = "red";
                                alert(this.responseText);
                            } else {
                                // valInput.value = this.responseText;
                                console.log(this.responseText);
                            }
                        }
                    };
                    xhttp.open("GET", requestStr, true);
                    xhttp.send();
                }
            }

            function hidden_menu_ok_value_override(select) {
                switch (select) {
                    case "backdrop_away_mode":
                        {
                            document.getElementById("1181").value = document.getElementById("fake_away").value;
                        }
                        break;
                    case "backdrop_crowded_mode":
                        {
                            document.getElementById("1184").value = document.getElementById("fake_crowded").value;
                        }
                        break;
                    case "backdrop_fireplace_mode":
                        {
                            document.getElementById("1182").value = document.getElementById("fake_fireplace").value;
                        }
                        break;
                    case "backdrop_holiday_mode":
                        {
                            document.getElementById("1180").value = document.getElementById("fake_holiday").value;
                        }
                        break;
                    case "backdrop_refresh_mode":
                        {
                            document.getElementById("1183").value = document.getElementById("fake_refresh").value;
                        }
                        break;
                    case "backdrop_dig_in1_mode":
                        {
                            document.getElementById("1187").value = document.getElementById("fake_din1").value;
                        }
                        break;
                    case "backdrop_dig_in2_mode":
                        {
                            document.getElementById("1188").value = document.getElementById("fake_din2").value;
                        }
                        break;
                    case "backdrop_dig_in3_mode":
                        {
                            document.getElementById("1189").value = document.getElementById("fake_din3").value;
                        }
                        break;
                    default:
                        {
                            console.log("SHOULDN'T GET HERE!!!");
                        }
                        break;
                }
                document.getElementById(select).style.display = "none";
            }

            function user_mode_popup_configure(sel) {
                configureParamValues(sel);
                let user_mode_popup = document.getElementById(sel);
                user_mode_popup.innerHTML = ``;
                user_mode_popup.style.display = "none";
            }

            /**
             * This function is called when hidden menu cancel is clicked
             */
            function hidden_menu_cancel() {
                // if cancel clicked, return to previous mode
                console.log("cancel hidden menu");

                document.getElementById("backdrop_away_mode").style.display = "none";
                document.getElementById("backdrop_crowded_mode").style.display = "none";
                document.getElementById("backdrop_fireplace_mode").style.display = "none";
                document.getElementById("backdrop_holiday_mode").style.display = "none";
                document.getElementById("backdrop_refresh_mode").style.display = "none";
                document.getElementById("backdrop_dig_in1_mode").style.display = "none";
                document.getElementById("backdrop_dig_in2_mode").style.display = "none";
                document.getElementById("backdrop_dig_in3_mode").style.display = "none";

                document.getElementById("backdrop").style.display = "none";
            }

            function hidden_menu_cancel_simple(sel) {
                document.getElementById(sel).style.display = "none";
            }

            function user_mode_popup_cancel(sel) {
                let user_mode_popup = document.getElementById(sel);
                user_mode_popup.innerHTML = ``;
                user_mode_popup.style.display = "none";
            }

            //WEEK SCHEDULE FUNCTIONS:

            /**
             * This function handles unscheduled period airflow level
             * @param {*} sel - select html element
             */
            function handle_unscheduled_period_airflow_level(sel) {
                console.log("handle_unscheduled_period_airflow_level");
                var mode_selected = sel.options[sel.selectedIndex].value;
                var id = sel.id;
                console.log("Option selected =", mode_selected);
                console.log("Option ID = ", id);
            }

            /**
             * This function handles unscheduled period temperature offset
             * @param {*} sel - input type element
             */
            function handle_unscheduled_period_temperature_offset(sel) {
                console.log("handle_unscheduled_period_airflow_level");
                var value = sel.value;
                var id = sel.id;
                console.log("Value selected =", value);
                console.log("ID = ", id);
            }

            /**
             * This function handles scheduled period airflow level
             * @param {*} sel - select html element
             */
            function handle_scheduled_period_airflow_level(sel) {
                console.log("handle_scheduled_period_airflow_level");
                var mode_selected = sel.options[sel.selectedIndex].value;
                var id = sel.id;
                console.log("Option selected =", mode_selected);
                console.log("Option ID = ", id);
            }

            /**
             * This function handles scheduled period temperature offset
             * @param {*} sel - input type element
             */
            function handle_scheduled_period_temperature_offset(sel) {
                console.log("handle_scheduled_period_airflow_level");
                var value = sel.value;
                var id = sel.id;
                console.log("Value selected =", value);
                console.log("ID = ", id);
            }

            /**
             * Detect_inputs() function checks which io selector within input status button has been pressed. Once the button is pressed:
             * 1. Active button style is applied to the pressed button and cleared on ohter buttons
             * 2. hide other divs except for the active one
             * @param {*} param button information
             */

            function Detect_inputs(param) {
                console.log("Detecting inputs");

                var class_button_pressed = param.className;
                var text = param.textContent;
                var id = param.id;

                console.log("class button pressed = ", class_button_pressed);
                console.log("text = ", text);
                console.log("id = ", id);

                let digital_div_config = document.getElementById("idDINStatus-config");
                let analog_div_config = document.getElementById("idAINStatus-config");
                let universal_div_config = document.getElementById("idUINStatus-config");

                if (id == "analog_in_config") {
                    console.log("hiding digital and universal divs CONFIG");
                    analog_div_config.removeAttribute("hidden");
                    digital_div_config.setAttribute("hidden", "hidden");
                    universal_div_config.setAttribute("hidden", "hidden");
                } else if (id == "digital_in_config") {
                    console.log("hiding analog and universal divs CONFIG");
                    digital_div_config.removeAttribute("hidden");
                    analog_div_config.setAttribute("hidden", "hidden");
                    universal_div_config.setAttribute("hidden", "hidden");
                } else if (id == "universal_in_config") {
                    console.log("hiding digital and analog divs CONFIG");
                    universal_div_config.removeAttribute("hidden");
                    digital_div_config.setAttribute("hidden", "hidden");
                    analog_div_config.setAttribute("hidden", "hidden");
                }

                var io_selector = document.getElementsByClassName(param.className);
                //console.log("io selected = ", io_selector);
                for (i = 0; i < io_selector.length; i++) {
                    io_selector[i].className = io_selector[i].className.replace(" active-button", "");
                }
                document.getElementById(id).className += " active-button";
            }

            /**
             * Detect_outputs() function checks which io selector within output status button has been pressed. Once the button is pressed:
             * 1. Active button style is applied to the pressed button and cleared on ohter buttons
             * 2. hide other divs except for the active one
             * @param {*} param button information
             */
            function Detect_outputs(param) {
                console.log("Detecting outputs");
                var class_button_pressed = param.className;
                var text = param.textContent;
                var id = param.id;
                //console.log("class button pressed = ", class_button_pressed);
                console.log("text = ", text);
                console.log("id = ", id);

                let digital_div_config = document.getElementById("idDOUTStatus-config");
                let analog_div_config = document.getElementById("idAOUTStatus-config");

                if (id == "analog_out_config") {
                    console.log("hiding digital div CONFIG");
                    analog_div_config.removeAttribute("hidden");
                    digital_div_config.setAttribute("hidden", "hidden");
                } else if (id == "digital_out_config") {
                    console.log("hiding analog div CONFIG");
                    digital_div_config.removeAttribute("hidden");
                    analog_div_config.setAttribute("hidden", "hidden");
                    //Clear_Digital_Output();

                    var type_out_d1 = 13100;
                    var mode_out_d1 = 5;
                    var out_d1 = {
                        Type: { ID: type_out_d1, Value: OutputDTypeStr[mode_out_d1] },
                        Type_Value: { ID: type_out_d1 + 405, Value: OutputTypeOfValue[1] },
                        Value: { ID: type_out_d1 + 605, Value: Digital_value[1] }, // +605 if OutputTypeOfValue is manual
                        LabelStr: "Digital Output 1",
                        DivId: "d_out_1", // Div that is being is when the IO is expanded
                        Units: "",
                    };
                    //Append_Digital_Output_obj(out_d1);

                    var type_out_d3 = 13102;
                    var mode_out_d3 = 7;
                    var out_d3 = {
                        Type: { ID: type_out_d3, Value: OutputDTypeStr[mode_out_d3] },
                        Type_Value: { ID: type_out_d3 + 405, Value: OutputTypeOfValue[0] },
                        Value: { ID: type_out_d3 + 200, Value: Digital_value[0] }, // +200 if OutputTypeOfValue is auto
                        LabelStr: "Digital Output 3",
                        DivId: "d_out_3", // Div that is being is when the IO is expanded
                        Units: "",
                    };
                    //Append_Digital_Output_obj(out_d3);
                }

                var io_selector = document.getElementsByClassName(class_button_pressed);
                for (i = 0; i < io_selector.length; i++) {
                    io_selector[i].className = io_selector[i].className.replace(" active-button", "");
                }

                document.getElementById(id).className += " active-button";
            }

            /**
             * Detect_alarms() function checks which io selector within Alarms  has been pressed. Once the button is pressed:
             * 1. Active button style is applied to the pressed button and cleared on ohter buttons
             * 2. hide other divs except for the active one
             * @param {*} param button information
             */

            function Detect_alarms(param) {
                var class_button_pressed = param.className;
                var text = param.textContent;
                var id = param.id;

                //console.log("class button pressed = ", class_button_pressed);
                console.log("text = ", text);
                console.log("id = ", id);

                if (id == "active_alarms") {
                    console.log("hiding alarms log div");
                    var active_alarms_div = document.getElementById("idAlarmActive");
                    var id_alarm_log = document.getElementById("idAlarmLog");
                    active_alarms_div.removeAttribute("hidden");
                    id_alarm_log.setAttribute("hidden", "hidden");
                } else if (id == "alarms_log") {
                    console.log("hiding active alarms div");
                    let id_alarm_log = document.getElementById("idAlarmLog");
                    let id_alarm_Active = document.getElementById("idAlarmActive");

                    id_alarm_log.removeAttribute("hidden");
                    id_alarm_Active.setAttribute("hidden", "hidden");
                }

                var io_selector = document.getElementsByClassName("selector-alarms");
                for (i = 0; i < io_selector.length; i++) {
                    io_selector[i].className = io_selector[i].className.replace(" active-button", "");
                }

                document.getElementById(id).className += " active-button";
            }

            /**
             * This function is called when Alarm acknowledge button is clicked
             */
            function alarm_acknowledge() {
                console.log("alarm acknowledged");
                document.getElementById("alarm_result_ack").textContent = "CLICKED";
                // set timer
                setInterval(displayHello, 1000);
            }

            function displayHello() {
                console.log("test");
            }

            /**
             * This function is called when Check for updates button is clicked within unit information -> unit version
             */
            function Check_for_updates() {
                console.log("Checking for updates");
            }

            /**
             * This function is called when Start update button is clicked within unit information -> unit version -> check for updates
             */
            var upd_interval;
            function start_update() {
                console.log("starting update");
                var requestStr = "start_upd";
                console.log(requestStr);
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);
                        if (this.responseText == "OK") {
                            console.log("OK response received, start update periodic requests.");
                            if (!upd_interval) {
                                upd_interval = setInterval(periodic_upd_status_request, 1000);
                                showPopup_start_update("popup_update", "Update in progress...");
                            } else {
                                console.log("interval already started");
                            }
                        }
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            /**
             * change_period_AM_PM function is used to change the time from AM -> PM and vice versa. It is very important to note
             * that everytime the time has been changed, schedule validity must be performed.
             * @param {
             * } option
             */
            function change_period_AM_PM(button_id) {
                console.log("button id = ", button_id);

                var button_pressed = document.getElementById(button_id).value;
                console.log("button value = ", button_pressed);
                if (button_pressed == "AM") {
                    console.log("changing value to PM");
                    document.getElementById(button_id).value = "PM";
                } else {
                    console.log("changing value to AM");
                    //button_pressed = "AM";
                    document.getElementById(button_id).value = "AM";
                }
            }

            /**
             *
             * @param {*} action - input type value ID to be modified
             * @param {*} direction - 1 - go up, 0 - go down
             * @param {*} max_value - maximum allowed input type value
             * @param {*} min_value  - minimum allowed input type value
             */
            function schedule_time(action, direction, max_value, min_value) {
                var button_pressed = document.getElementById(action);
                var current_time_value = button_pressed.value;
                var new_time_value = current_time_value;
                if (direction == 1) {
                    if (new_time_value < max_value) {
                        new_time_value++;
                        if (new_time_value < 10) {
                            var new_time_value = "0" + new_time_value;
                            document.getElementById(action).value = new_time_value;
                        } else {
                            document.getElementById(action).value = new_time_value;
                        }
                    }
                } else if (direction == 0) {
                    if (new_time_value > min_value) {
                        new_time_value--;
                        if (new_time_value < 10) {
                            var new_time_value = "0" + new_time_value;
                            document.getElementById(action).value = new_time_value;
                        } else {
                            document.getElementById(action).value = new_time_value;
                        }
                    }
                }
            }

            //unselect all other countries except the one that is clicked.
            function unit_backups_selector(param) {
                id = param.id;
                // go through all checkbox and see if the one that is currently active is clicked to disable
                console.log("id = ", id);

                var button = document.getElementById("unit_backups_btn");

                var option1 = document.getElementById("unit_backups_option1");
                var option2 = document.getElementById("unit_backups_option2");
                var option3 = document.getElementById("unit_backups_option3");
                var option4 = document.getElementById("unit_backups_option4");
                var option5 = document.getElementById("unit_backups_option5");
                var option6 = document.getElementById("unit_backups_option6");

                if (id == "unit_backups_option1") {
                    console.log("selected unit_backups_option1");
                    if (option1.checked) {
                        console.log("not checked yet");
                    } else {
                        console.log("element already checked ");
                        option1.checked = false;
                        button.setAttribute("hidden", "hidden");
                        return;
                    }
                    button.removeAttribute("hidden");
                    document.getElementById("unit_backups_text").textContent = "RESTORE";
                }

                if (id == "unit_backups_option2") {
                    console.log("selected unit_backups_option2");
                    if (option2.checked) {
                        console.log("not checked yet");
                    } else {
                        console.log("element already checked ");
                        option2.checked = false;
                        button.setAttribute("hidden", "hidden");
                        return;
                    }

                    button.removeAttribute("hidden");
                    document.getElementById("unit_backups_text").textContent = "CLEAR";
                }

                if (id == "unit_backups_option3") {
                    console.log("selected unit_backups_option3");
                    if (option3.checked) {
                        console.log("not checked yet");
                    } else {
                        console.log("element already checked ");
                        option3.checked = false;
                        button.setAttribute("hidden", "hidden");
                        return;
                    }

                    button.removeAttribute("hidden");
                    document.getElementById("unit_backups_text").textContent = "ACTIVATE";
                }

                if (id == "unit_backups_option4") {
                    console.log("selected unit_backups_option4");
                    if (option4.checked) {
                        console.log("not checked yet");
                    } else {
                        console.log("element already checked ");
                        option4.checked = false;
                        button.setAttribute("hidden", "hidden");
                        return;
                    }

                    button.removeAttribute("hidden");
                    document.getElementById("unit_backups_text").textContent = "STORE";
                }

                if (id == "unit_backups_option5") {
                    console.log("selected unit_backups_option5");
                    if (option5.checked) {
                        console.log("not checked yet");
                    } else {
                        console.log("element already checked ");
                        option5.checked = false;
                        button.setAttribute("hidden", "hidden");
                        return;
                    }
                    button.removeAttribute("hidden");
                    document.getElementById("unit_backups_text").textContent = "SAVE";
                }

                if (id == "unit_backups_option6") {
                    console.log("selected unit_backups_option6");
                    if (option6.checked) {
                        console.log("not checked yet");
                    } else {
                        console.log("element already checked ");
                        option6.checked = false;
                        button.setAttribute("hidden", "hidden");
                        return;
                    }
                    button.removeAttribute("hidden");
                    document.getElementById("unit_backups_text").textContent = "DOWNLOAD";
                }

                var io_selector = document.getElementsByClassName("checkbox-round-unit-backups");
                for (i = 0; i < io_selector.length; i++) {
                    //console.log(io_selector[i]);
                    io_selector[i].checked = false;
                }
                document.getElementById(id).checked = true;
            }

            var download_conf_interval;
            var save_conf_interval;
            function perform_unit_backup_action() {
                console.log("unit backup action ");
                var modbus_register;
                var modbus_value;
                var io_selector = document.getElementsByClassName("checkbox-round-unit-backups");
                for (i = 0; i < io_selector.length; i++) {
                    if (io_selector[i].checked == true) {
                        //factory settings
                        if (io_selector[i].id == "unit_backups_option1") {
                            console.log("Factory settings selected");
                            modbus_register = 30100;
                            modbus_value = 3228;
                            Mb_write(modbus_register, modbus_value);
                        }

                        //clear unit model type
                        if (io_selector[i].id == "unit_backups_option2") {
                            console.log("Clear unit model type selected");
                            modbus_register = [30100, 8950];
                            modbus_value = [3228, 0];
                            Mb_write(modbus_register, modbus_value);
                        }

                        // activate user save confiuration
                        if (io_selector[i].id == "unit_backups_option3") {
                            console.log("Activate user safe configuration");
                            modbus_register = 30103;
                            modbus_value = 1;
                            Mb_write(modbus_register, modbus_value);
                        }

                        // set user safe configuration
                        if (io_selector[i].id == "unit_backups_option4") {
                            console.log("Set user safe configuration");
                            modbus_register = 30102;
                            modbus_value = 1;
                            Mb_write(modbus_register, modbus_value);
                            unhide_div("activate_configuration");
                        }

                        //save current configuration to IAM
                        if (io_selector[i].id == "unit_backups_option5") {
                            console.log("Save current configuration to IAM");
                            modbus_register = 1038;
                            modbus_value = 1;
                            let requestStr = "save_conf";
                            console.log(requestStr);
                            var xhttp = new XMLHttpRequest();
                            xhttp.onreadystatechange = function () {
                                if (this.readyState == 4 && this.status == 200) {
                                    console.log(this.responseText);
                                    if (!save_conf_interval) {
                                        save_conf_interval = setInterval(periodic_conf_save_status_request, 2000); // periodic inteval to request state
                                        showPopup(
                                            "popup_configuration",
                                            "Saving current configuration, please wait..."
                                        );
                                    } else {
                                        console.log("interval already started");
                                    }
                                }
                            };
                            xhttp.open("GET", requestStr, true);
                            xhttp.send();
                        }

                        // download configuration from IAM
                        if (io_selector[i].id == "unit_backups_option6") {
                            console.log("Download configuration from IAM");
                            let requestStr = "download_conf";
                            console.log(requestStr);
                            var xhttp = new XMLHttpRequest();
                            xhttp.onreadystatechange = function () {
                                if (this.readyState == 4 && this.status == 200) {
                                    console.log(this.responseText);
                                    if (this.responseText == "OK") {
                                        console.log("OK response received");
                                        if (!download_conf_interval) {
                                            download_conf_interval = setInterval(
                                                periodic_conf_download_status_request,
                                                2000
                                            ); // periodic inteval to request state
                                            showPopup(
                                                "popup_configuration",
                                                "Configuration is downloading, please wait..."
                                            );
                                        } else {
                                            console.log("interval already started");
                                        }
                                    }
                                }
                            };
                            xhttp.open("GET", requestStr, true);
                            xhttp.send();
                        }
                    }
                }
                //decide what to do based on currently selected option
            }

            //saving configuration periodic request
            function periodic_conf_save_status_request() {
                console.log("Get configuration save status");
                let requestStr = "conf_status";
                console.log(requestStr);
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("CONF STATUS RESPOSNE TEXT = ", this.responseText);
                        const responseJson = JSON.parse(this.responseText);
                        if (typeof responseJson === "object") {
                            var json_value = responseJson["conf"];
                            var progress = responseJson["progress"];

                            if (json_value == 1) {
                                console.log("Configuration save in progress ");
                                console.log("Progress = ", progress);
                                document.getElementById("update_progress").innerHTML = progress + "%";
                            } else if (json_value == 2 || 0) {
                                console.log("Configuration save complete ");
                                clearInterval(save_conf_interval);
                                unhide_div("download_configuration");
                                save_conf_interval = null;
                                const popup = document.getElementById("popup_configuration");
                                popup.style.display = "none";
                            }
                        } else {
                            console.log("unknown commands");
                        }
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            //downloading configuration periodic request
            function periodic_conf_download_status_request() {
                console.log("Get configuration download status");
                let requestStr = "conf_status";
                console.log(requestStr);
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("CONF STATUS RESPOSNE TEXT = ", this.responseText);
                        const responseJson = JSON.parse(this.responseText);
                        if (typeof responseJson === "object") {
                            var json_value = responseJson["conf"];
                            var progress = responseJson["progress"];

                            if (json_value == 1) {
                                console.log("Configuration download in progress ");
                                console.log("Progress = ", progress);
                                document.getElementById("update_progress").innerHTML = progress + "%";
                            } else if (json_value == 2 || 0) {
                                console.log("Configuration download complete ");
                                clearInterval(download_conf_interval);
                                download_conf_interval = null;
                                const popup = document.getElementById("popup_configuration");
                                popup.style.display = "none";
                            }
                        } else {
                            console.log("unknown commands");
                        }
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            function periodic_upd_status_request() {
                console.log("Get update status");
                var requestStr = "status_upd";
                console.log(requestStr);
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("UPDATE STATUS RESPOSNE TEXT = ", this.responseText);
                        const responseJson = JSON.parse(this.responseText);
                        if (typeof responseJson === "object") {
                            var status = responseJson["status"];
                            var file_type = responseJson["file"];
                            var percentage = responseJson["percentage"];
                            var percentage_cheat = parseInt(percentage) + 1;
                            if (percentage_cheat >= 100) {
                                percentage_cheat = 100;
                            }
                            if (file_type == "30301") {
                                console.log("ft_progMainboard download in progress = ", percentage_cheat);
                                document.getElementById("update_progress_MB").innerHTML =
                                    percentage_cheat.toString() + "%";
                            } else if (file_type == "30310") {
                                console.log("ft_progHMI download in progress =", percentage_cheat);
                                document.getElementById("update_progress_HMI").innerHTML =
                                    percentage_cheat.toString() + "%";
                                document.getElementById("update_progress_MB").innerHTML = "100%";
                            } else if (file_type == "30311") {
                                console.log("ft_resourcesHMI download in progress =", percentage_cheat);
                                document.getElementById("update_progress_RES").innerHTML =
                                    percentage_cheat.toString() + "%";
                                document.getElementById("update_progress_HMI").innerHTML = "100%";
                            }
                            if (status == 1) {
                                console.log("Update incomplete");
                            } else if (status == 0) {
                                console.log("Update complete");
                                clearInterval(upd_interval);
                                upd_interval = null;
                                const popup = document.getElementById("popup_update");
                                popup.style.display = "none";
                            }
                        } else {
                            console.log("unknown commands");
                        }
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            function showPopup(div, text) {
                // if (typeof devices_to_update === "object") {
                //     for (let i = 0; i < devices_to_update.length; i++) {
                //         console.log("devices to update = ", devices_to_update[i]);
                //     }
                // }
                var user_mode_popup = document.getElementById(div);
                user_mode_popup.style.display = "flex";
                user_mode_popup.innerHTML = `
                                       <div class="popdiv">
                                         <table class="popup-table">
                                           <tr>
                                               <td colspan="2">${text}</td>
                                           </tr>
                                           <tr>
                                               <td>Progress:</td>
                                               <td id ="update_progress"></td>
                                           </tr>
                                         </table>
                                       </div>
                                   `;
            }

            function showPopup_start_update(div, text) {
                if (typeof list_of_devices === "object") {
                } else {
                }
                var user_mode_popup = document.getElementById(div);
                user_mode_popup.style.display = "flex";
                user_mode_popup.innerHTML = `
                                       <div class="popdiv">
                                         <table class="popup-table">
                                           <tr>
                                               <td colspan="2">${text}</td>
                                           </tr>

                                            <tr>
                                                <td>MB:</td>
                                                <td id ="update_progress_MB"></td>
                                            </tr>

                                            <tr>
                                                <td>HMI:</td>
                                                <td id ="update_progress_HMI"></td>
                                            </tr>

                                            <tr>
                                                <td>RES:</td>
                                                <td id ="update_progress_RES"></td>
                                            </tr>
                                         </table>
                                       </div>
                                   `;
            }

            //TODO: When the same checkbox is clicked twice, do we need to disable it?
            //unselect all other countries except the one that is clicked.
            // HOLDING REGISTER = 8003
            // VALUE RANGE = 0-23

            function unit_country_selector(checkbox) {
                var checkboxes = document.getElementsByName("unit-country");

                checkboxes.forEach(function (item) {
                    if (item !== checkbox) {
                        item.checked = false;
                    }
                });
                console.log("value to number = ", Number(checkbox.value));

                document.getElementById("8003").value = Number(checkbox.value);
            }

            function enable_checkbox_by_value(value) {
                var checkboxes = document.getElementsByName("unit-country");
                checkboxes.forEach(function (checkbox) {
                    if (checkbox.value === value && !checkbox.checked) {
                        checkbox.disabled = false;
                        checkbox.click(); // Simulate a click to enable the checkbox
                    }
                });
            }

            function change_heat_exchanger_type(type) {
                if (type == 0) {
                    console.log("rotating mode selected");
                    hide_div("plate_heat_exchanger");
                    unhide_div("Moisture_transfer_placeholder");
                } else if (type == 1) {
                    console.log("plate mode selected");
                    unhide_div("plate_heat_exchanger");
                    hide_div("Moisture_transfer_placeholder");
                }
                if (passive_house_support == 1) {
                    if (type == 0) {
                        unhide_div("rotating_heat_exchanger");
                    } else {
                        hide_div("rotating_heat_exchanger");
                    }
                }
            }

            function change_heater_type(type) {
                console.log("heater_type = ", type);
                if (type == 3) {
                    unhide_div("heater_changeover_placeholder");
                    hide_div("heater_basic_placeholder");
                    hide_div("heater_water_placeholder");
                } else if (type == 2) {
                    hide_div("heater_changeover_placeholder");
                    unhide_div("heater_basic_placeholder");
                    unhide_div("heater_water_placeholder");
                } else {
                    unhide_div("heater_basic_placeholder");
                    hide_div("heater_changeover_placeholder");
                    hide_div("heater_water_placeholder");
                }
            }

            function change_cooler_type(type) {
                if (type == 2) {
                    unhide_div("cooler_changeover_placeholder");
                    hide_div("cooler_water_placeholder");
                    hide_div("cooler_basic_placeholder");
                } else if (type == 1) {
                    unhide_div("cooler_water_placeholder");
                    unhide_div("cooler_basic_placeholder");
                    hide_div("cooler_changeover_placeholder");
                } else if (type == 0) {
                    unhide_div("cooler_basic_placeholder");
                    hide_div("cooler_changeover_placeholder");
                    hide_div("cooler_water_placeholder");
                }
            }

            function change_extra_controller_type(type) {
                let pi_setpoint = document.getElementById("extra_ctrl_pi_setpoint");
                let pump_start = document.getElementById("extra_ctrl_pump_start");
                let pump_stop = document.getElementById("extra_ctrl_pump_stop");
                let preheat_setting = document.getElementById("extra_ctrl_preheat_setting");
                let geo_exchanger = document.getElementById("geo_exchanger_extra_controller");

                pi_setpoint.removeAttribute("hidden");
                pump_start.setAttribute("hidden", "hidden");
                pump_stop.removeAttribute("hidden");
                preheat_setting.setAttribute("hidden", "hidden");
                geo_exchanger.setAttribute("hidden", "hidden");

                switch (type) {
                    case "0":
                        {
                            pump_stop.setAttribute("hidden", "hidden");
                        }
                        break;
                    case "1":
                        {
                            pump_start.removeAttribute("hidden");
                            preheat_setting.removeAttribute("hidden");
                        }
                        break;
                    case "2":
                        {
                            pump_start.removeAttribute("hidden");
                        }
                        break;
                    case "3":
                        {
                            // nothing to do here. all options covered before switch
                        }
                        break;
                    case "4":
                        {
                            pi_setpoint.setAttribute("hidden", "hidden");
                            geo_exchanger.removeAttribute("hidden");
                        }
                        break;
                    default:
                        {
                            // do nothing here
                            console.log("I'M HERE???");
                        }
                        break;
                }
            }

            function change_fan_airflow_type(sel) {
                console.log("change fan airflow type sel = ", sel);
                let fakeUnitField = document.getElementById("fake_unit");
                let fanUnitField = document.getElementById("fan_unit");
                let pbandItimeFields = document.getElementById("pband_itime_inputs");
                let kFactorFields = document.getElementById("k_factor_inputs");
                let pressureSensors = document.getElementById("pressure_sensors");
                let airflowLvlSettings = document.getElementById("airflow_lvl_settings");

                const unitTxtStr = {
                    0: "%",
                    1: "rpm",
                    2: "Pa",
                    3: "",
                    4: "%",
                };

                fanUnitField.setAttribute("hidden", "hidden");
                kFactorFields.setAttribute("hidden", "hidden");
                pressureSensors.setAttribute("hidden", "hidden");
                fakeUnitField.removeAttribute("hidden");
                pbandItimeFields.removeAttribute("hidden");
                airflowLvlSettings.removeAttribute("hidden");

                fakeUnitField.querySelector("textarea").innerText = unitTxtStr[sel.value];

                switch (sel.value) {
                    case "0":
                        {
                            console.log("case 0");
                            pbandItimeFields.setAttribute("hidden", "hidden");
                            document.getElementById("actual_compensation_placeholder").innerHTML =
                                "Actual compensation (%)";
                        }
                        break;
                    case "1":
                        {
                            console.log("case 1");
                            pbandItimeFields.querySelector(`[id="1270"]`).placeholder = "2500 rpm";
                            document.getElementById("fan_c_pband_placeholder").innerHTML = "P-Band (rpm)";
                            document.getElementById("actual_compensation_placeholder").innerHTML =
                                "Actual compensation (rpm)";

                            document.getElementById("1270").min = 1;
                            document.getElementById("1270").max = 3000;
                        }
                        break;
                    case "2":
                        {
                            console.log("case 2");
                            pressureSensors.removeAttribute("hidden");
                            pbandItimeFields.querySelector(`[id="1270"]`).placeholder = "250 Pa";
                            document.getElementById("fan_c_pband_placeholder").innerHTML = "P-Band (Pa)";
                            unhide_div("pressure_selection_saf");
                            unhide_div("pressure_selection_eaf");
                            hide_div("flow_selection_saf");
                            hide_div("flow_selection_eaf");
                            document.getElementById("1270").min = 1;
                            document.getElementById("1270").max = 500;
                            document.getElementById("12601").max = 50;
                            document.getElementById("12601").min = 0;
                            document.getElementById("12603").max = 50;
                            document.getElementById("12603").min = 0;
                        }
                        break;
                    case "3":
                        {
                            console.log("case 3");
                            fakeUnitField.setAttribute("hidden", "hidden");
                            fanUnitField.removeAttribute("hidden");
                            kFactorFields.removeAttribute("hidden");
                            pressureSensors.removeAttribute("hidden");
                            let unitElem = fanUnitField.querySelector(`[id="9000"]`);
                            let unitTxt = unitElem.options[unitElem.selectedIndex].text;
                            document.getElementById("fan_c_pband_placeholder").innerHTML = "P-Band (" + unitTxt + ")";
                            pbandItimeFields.querySelector(`[id="1270"]`).placeholder = "250 " + unitTxt;
                            document.getElementById("flow_saf_alarm_label").innerHTML = "Alarm (" + unitTxt + ")";
                            document.getElementById("flow_eaf_alarm_label").innerHTML = "Alarm (" + unitTxt + ")";
                            document.getElementById("12601").placeholder = "0 " + unitTxt;
                            document.getElementById("12603").placeholder = "0 " + unitTxt;
                            hide_div("pressure_selection_saf");
                            hide_div("pressure_selection_eaf");
                            unhide_div("flow_selection_saf");
                            unhide_div("flow_selection_eaf");
                            document.getElementById("1270").min = 1;
                            document.getElementById("1270").max = 500;
                            document.getElementById("12601").max = 30;
                            document.getElementById("12601").min = 0;
                            document.getElementById("12603").max = 30;
                            document.getElementById("12603").min = 0;
                        }
                        break;
                    case "4":
                        {
                            console.log("case 4");
                            pbandItimeFields.setAttribute("hidden", "hidden");
                            airflowLvlSettings.setAttribute("hidden", "hidden");
                        }
                        break;
                    default:
                        {
                            // do nothing here
                            console.log("I'M HERE???");
                        }
                        break;
                }
            }

            function update_pband_placeholder(sel) {
                console.log(sel);
                let unitTxt = sel.options[sel.selectedIndex].text;
                document.getElementById("fan_c_pband_placeholder").innerHTML = "P-Band" + " (" + unitTxt + ")";
                document.getElementById("1270").placeholder = "250 " + unitTxt;
                document.getElementById("flow_saf_alarm_label").innerHTML = "Alarm (" + unitTxt + ")";
                document.getElementById("flow_eaf_alarm_label").innerHTML = "Alarm (" + unitTxt + ")";
                document.getElementById("12601").placeholder = "0 " + unitTxt;
                document.getElementById("12603").placeholder = "0 " + unitTxt;
            }

            function change_temperature_control_mode(sel) {
                let extraParams = document.getElementById("temp_ctrl_extension");
                console.log(sel);

                if (sel.value > 0) {
                    extraParams.removeAttribute("hidden");
                } else {
                    extraParams.setAttribute("hidden", "hidden");
                }
            }

            function is_free_cooling_time_valid() {
                var hours_start = Number(document.getElementById("4105").value);
                var minutes_start = Number(document.getElementById("4106").value);
                var hours_end = Number(document.getElementById("4107").value);
                var minutes_end = Number(document.getElementById("4108").value);

                var hours_start_unchanged = Number(document.getElementById("4105").value);
                var minutes_start_unchanged = Number(document.getElementById("4106").value);
                var hours_end_unchanged = Number(document.getElementById("4107").value);
                var minutes_end_unchanged = Number(document.getElementById("4108").value);

                if (document.getElementById("6007").checked) {
                    console.log("24 hour time is selected");
                    if (hours_end > 0 && hours_end <= 8 && hours_start > 12) {
                        console.log("hours end rollover occured");
                        hours_end = hours_end + 24; // add 24 to ensure that end time is always greater than start time
                    }
                } else {
                    console.log("12 hour time is selected");
                    if (document.getElementById("ampm_freecooling_start").value == 1) {
                        console.log("PM start time selected");
                        if (hours_start == 12) {
                            //do nothing
                        } else {
                            hours_start = hours_start + 12;
                        }

                        if (
                            hours_end > 0 &&
                            hours_end < 8 &&
                            document.getElementById("ampm_freecooling_end").value == 0
                        ) {
                            console.log("hours end rollover occured");
                            hours_end = hours_end + 24; // add 24 to ensure that end time is always greater than start time
                        } else if (hours_end == 12 && document.getElementById("ampm_freecooling_end").value == 1) {
                            console.log("hours end rollover occured");
                            hours_end = hours_end + 24;
                        }
                    } else {
                        console.log("AM start time selected");
                        if (hours_start == 12) {
                            hours_start = hours_start - 12;
                        } else {
                            //do nothing
                        }
                    }

                    if (document.getElementById("ampm_freecooling_end").value == 1) {
                        console.log("PM end time selected");
                        if (hours_end == 12) {
                            //do nothing
                        } else {
                            hours_end = hours_end + 12;
                        }
                    } else {
                        console.log("AM end time selected");
                        if (hours_end == 12) {
                            hours_end = hours_end - 12;
                        } else {
                            //do nothing
                        }
                    }
                }

                console.log("hours_start = ", hours_start);
                console.log("minutes_start = ", minutes_start);
                console.log("hours_end = ", hours_end);
                console.log("minutes_end = ", minutes_end);

                var freecooling_start = Number(hours_start) + Number(minutes_start) / 60;
                var freecooling_end = Number(hours_end) + Number(minutes_end) / 60;
                console.log("freecooling_start = ", freecooling_start);
                console.log("freecooling_end = ", freecooling_end);

                if (freecooling_start >= freecooling_end) {
                    console.log("Freecooling end should be higher than freecooling start");
                    document.getElementById("freecooling_button_set").disabled = true;
                } else if (freecooling_start < 21 && freecooling_start > 8) {
                    console.log("Freecooling start time is invalid (start time must be between 21:00 and 8:00)");
                    document.getElementById("freecooling_button_set").disabled = true;
                } else if (freecooling_end < 21 && freecooling_end > 8) {
                    console.log("Freecooling end time must be within 21:00 and 8:00");
                    document.getElementById("freecooling_button_set").disabled = true;
                } else {
                    console.log("Freecooling time is valid");
                    document.getElementById("freecooling_button_set").disabled = false;
                }

                if (document.getElementById("6007").checked) {
                    console.log("6007 is checked ");
                } else {
                    console.log("6007 is unchecked, checking if am/pm is set");
                    if (document.getElementById("ampm_freecooling_start").value == 1 && hours_start_unchanged != 12) {
                        console.log("ampm_freecooling_start is 1 ");
                        hours_start_unchanged = hours_start_unchanged + 12;
                    } else {
                        console.log("ampm_freecooling_start is 0");
                        if (
                            hours_start_unchanged == 12 &&
                            document.getElementById("ampm_freecooling_start").value == 0
                        ) {
                            hours_start_unchanged = hours_start_unchanged - 12;
                        }
                    }

                    if (document.getElementById("ampm_freecooling_end").value == 1 && hours_end_unchanged != 12) {
                        console.log("ampm_freecooling_end is 1 ");
                        hours_end_unchanged = hours_end_unchanged + 12;
                    } else {
                        console.log("ampm_freecooling_end is 0");
                        if (hours_end_unchanged == 12 && document.getElementById("ampm_freecooling_end").value == 0) {
                            hours_end_unchanged = hours_end_unchanged - 12;
                        }
                    }
                }

                var hours_start_padded = padWithZero(hours_start_unchanged);
                var minutes_start_padded = padWithZero(minutes_start_unchanged);
                var hours_end_padded = padWithZero(hours_end_unchanged);
                var minutes_end_padded = padWithZero(minutes_end_unchanged);
                document.getElementById("freecooling_time_placeholder").innerText =
                    "Freecooling time: " +
                    hours_start_padded +
                    ":" +
                    minutes_start_padded +
                    " - " +
                    hours_end_padded +
                    ":" +
                    minutes_end_padded;
            }

            // Function to check if an element is visible or hidden
            function isElementVisible(element) {
                // Use getComputedStyle to get the element's computed styles
                const styles = window.getComputedStyle(element);

                // Check if the element is hidden
                return styles.display !== "none" && styles.visibility !== "hidden";
            }

            // Function to check the visibility of input and select elements within a given div (including nested divs)
            function checkDivElementsVisibility(divElement, hidden_divs = new Set()) {
                // Check if the div is hidden
                const isDivElementVisible = isElementVisible(divElement);

                // If the div is hidden, consider all input and select elements hidden as well
                if (!isDivElementVisible) {
                    const inputAndSelectElements = divElement.querySelectorAll("input, select");
                    for (let i = 0; i < inputAndSelectElements.length; i++) {
                        const element = inputAndSelectElements[i];
                        //console.log(`Element with ID "${element.id}" is visible: false`);
                        hidden_divs.add(element.id);
                    }
                } else {
                    // If the div is visible, proceed to check the visibility of input and select elements
                    const inputAndSelectElements = divElement.querySelectorAll("input, select");
                    for (let i = 0; i < inputAndSelectElements.length; i++) {
                        const element = inputAndSelectElements[i];
                        const isElementVisible_test = isElementVisible(element);
                        // console.log(
                        //   `Element with ID "${element.id}" is visible: ${isElementVisible_test}`
                        // );
                    }
                }

                // Check nested divs and their child elements
                const nestedDivs = divElement.querySelectorAll("div");
                for (let i = 0; i < nestedDivs.length; i++) {
                    checkDivElementsVisibility(nestedDivs[i], hidden_divs);
                }

                // Return the array of hidden elements (this will be accumulated with results from nested divs)
                return Array.from(hidden_divs);
            }

            // this is used for modbus read and modbus write in modbus registers tab
            function Mb_write(mb_reg, mb_value) {
                var requestStr = "mwrite?";
                const strForm = {};
                if (typeof mb_reg === "object" && typeof mb_value === "object") {
                    if (mb_reg.length != mb_value.length) {
                        console.log("Array lengths are different");
                        return;
                    } else {
                        for (let i = 0; i < mb_reg.length; i++) {
                            strForm[mb_reg[i]] = parseInt(mb_value[i]);
                        }
                    }
                } else {
                    strForm[mb_reg] = parseInt(mb_value);
                }

                requestStr += JSON.stringify(strForm);
                console.log(requestStr);

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log(this.responseText);
                        // Handle response pop-up window ACK/NACK
                        if (this.responseText === "OK") {
                            alert("Parameters written successfully");
                        } else if (this.responseText === "ERROR") {
                            alert("Undefined error");
                        } else if (this.responseText === "WRITE TMO") {
                            alert("Write timeout");
                        } else if (this.responseText === "RESPONSE TMO") {
                            alert("Response timeout");
                        }
                    }
                };
                xhttp.overrideMimeType("application/json");
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            function Mb_read(mb_reg) {
                console.log("mb_reg = ", mb_reg);
                var requestStr = "mread?";
                const strForm = {};
                strForm[mb_reg] = 1;
                requestStr += JSON.stringify(strForm);
                console.log(requestStr);

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("ACK TEXT: " + this.responseText);

                        const responseJson = JSON.parse(this.responseText);
                        if (typeof responseJson === "object") {
                            document.getElementById("modbus_reg").innerHTML =
                                responseJson[String("modbus_reg")] == "0" ? "RETURNED" : "ACKNOWLEDGED";
                            document.getElementById("modbus_value").value = responseJson[mb_reg];
                        } else {
                            console.log("ACK ERROR: " + this.responseText);
                        }
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            function Mb_read_and_update(mb_reg, div_to_update, units) {
                console.log("mb_reg = ", mb_reg);
                var requestStr = "mread?";
                const strForm = {};
                strForm[mb_reg] = 1;
                requestStr += JSON.stringify(strForm);
                console.log(requestStr);

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        console.log("ACK TEXT: " + this.responseText);
                        const responseJson = JSON.parse(this.responseText);
                        if (typeof responseJson === "object") {
                            document.getElementById("modbus_reg").innerHTML =
                                responseJson[String("modbus_reg")] == "0" ? "RETURNED" : "ACKNOWLEDGED";

                            const Analog_in_regs = [
                                12100, 12101, 12102, 12103, 12104, 12105, 12106, 12107, 2100, 12404, 2101,
                            ];
                            const Digital_state_regs = [12020, 12021, 12022, 12023, 12024, 12025];

                            for (const element of Analog_in_regs) {
                                if (element == mb_reg) {
                                    var final_value =
                                        (responseJson[mb_reg] > 32767
                                            ? responseJson[mb_reg] - 65536
                                            : responseJson[mb_reg]) / 10;
                                    console.log(mb_reg + ": final_value  = " + final_value);
                                    document.getElementById(div_to_update).innerHTML = final_value;
                                    break;
                                } else {
                                    document.getElementById(div_to_update).innerHTML =
                                        responseJson[mb_reg] + " " + units;
                                }
                            }

                            for (const element2 of Digital_state_regs) {
                                if (element2 == mb_reg) {
                                    if (responseJson[mb_reg] == 1) {
                                        document.getElementById(div_to_update).innerHTML = "ON";
                                    } else if (responseJson[mb_reg] == 0) {
                                        document.getElementById(div_to_update).innerHTML = "OFF";
                                    }
                                    break;
                                }
                            }
                        } else {
                            console.log("ACK ERROR: " + this.responseText);
                        }
                    }
                };
                xhttp.open("GET", requestStr, true);
                xhttp.send();
            }

            function hide_div(div) {
                var document_div = document.getElementById(div);
                document_div.setAttribute("hidden", "hidden");
            }

            function unhide_div(div) {
                var document_div = document.getElementById(div);
                document_div.removeAttribute("hidden");
            }

            function construct_airflow_lvl_settings_tab(evt, airflowType) {
                // start with last reg -> easier to match order of max to min levels
                const argsTbl = {
                    0: {
                        safLastReg: 1408,
                        eafLastReg: 1409,
                        min: 16,
                        max: 100,
                    },
                    1: {
                        safLastReg: 1418,
                        eafLastReg: 1419,
                        min: 500,
                        max: 5000,
                    },
                    2: {
                        safLastReg: 1428,
                        eafLastReg: 1429,
                        min: 100,
                        max: 1000,
                    },
                    3: {
                        safLastReg: 1438,
                        eafLastReg: 1439,
                        min: 100,
                        max: 1000,
                    },
                };

                const lvlNames = {
                    0: "Max.",
                    1: "High",
                    2: "Normal",
                    3: "Low",
                    4: "Min.",
                };

                const unitTxtStr = {
                    0: "%",
                    1: "rpm",
                    2: "Pa",
                    3: "",
                    4: "%",
                };

                const elemArgs = argsTbl[airflowType];
                let units;

                if (airflowType == 3) {
                    let unitElem = document.getElementById("9000");
                    units = unitElem.options[unitElem.selectedIndex].text;
                } else {
                    units = unitTxtStr[airflowType];
                }

                // construct supply airflow levels
                let airflowLvlSettings = `
                               <div class="container-rows">
                                   <div class="columns_2">
                                       <span class="centralized">Supply (<span id="safRangeCaption">${elemArgs.min}-${elemArgs.max}</span> ${units})</span>
                           `;

                let elemReg = argsTbl[airflowType].safLastReg;
                for (let i = 0; i < 5; i++) {
                    airflowLvlSettings += `
                                   <label for="${elemReg}">${lvlNames[i]} level</label>
                                   <span class="popup">
                                       <input
                                           type="number"
                                           placeholder="Enter value..."
                                           id="${elemReg}"
                                           min="${elemArgs.min}"
                                           max="${elemArgs.max}"
                                           onblur="imposeMinMax(this)"
                                       />
                                       <span class="popuptext"></span>
                                   </span>
                               `;
                    // descending order
                    elemReg -= 2;
                }

                // close supply airflow levels div and construct extract airflow levels
                airflowLvlSettings += `
                               </div>

                               <div class="columns_2">
                                   <span class="centralized">Extract (<span id="eafRangeCaption">${elemArgs.min}-${elemArgs.max}</span> ${units})</span>
                           `;

                elemReg = argsTbl[airflowType].eafLastReg;
                for (let i = 0; i < 5; i++) {
                    airflowLvlSettings += `
                                   <label for="${elemReg}">${lvlNames[i]} level</label>
                                   <span class="popup">
                                       <input
                                           type="number"
                                           placeholder="Enter value..."
                                           id="${elemReg}"
                                           min="${elemArgs.min}"
                                           max="${elemArgs.max}"
                                           onblur="imposeMinMax(this)"
                                       />
                                       <span class="popuptext"></span>
                                   </span>
                               `;
                    // descending order
                    elemReg -= 2;
                }

                // close extract airflow levels div and add set btn
                airflowLvlSettings += `
                                   </div>
                               </div>


                               <div style="max-width: 400px">
                                <button class="action_set" onclick="configureParamValues('Airflow Levels Settings')">Set</button>
                                </div>
                           `;

                document.getElementById("airflow_params_by_type").innerHTML = airflowLvlSettings;
                openTab(evt, "Airflow Levels Settings");
            }

            function wifi_setting(param) {
                console.log("wifi setting");

                var class_button_pressed = param.className;
                var text = param.textContent;
                var id = param.id;

                console.log("class button pressed = ", class_button_pressed);
                console.log("text = ", text);
                console.log("id = ", id);

                let wifi_div = document.getElementById("wifi_config_result");
                let wifi_hotspot_div = document.getElementById("wifi_hotspot_config_result");
                let cloud_domain_div = document.getElementById("cloud_domain_config");

                if (id == "wifi1") {
                    console.log("hiding hotspot and cloud domain divs CONFIG");
                    wifi_div.removeAttribute("hidden");
                    wifi_hotspot_div.setAttribute("hidden", "hidden");
                    cloud_domain_div.setAttribute("hidden", "hidden");
                } else if (id == "wifi2") {
                    console.log("hiding wifi and cloud domain divs CONFIG");
                    wifi_hotspot_div.removeAttribute("hidden");
                    wifi_div.setAttribute("hidden", "hidden");
                    cloud_domain_div.setAttribute("hidden", "hidden");
                    //change_wifi_mode(document.getElementById(100).value);
                } else if (id == "wifi3") {
                    console.log("hiding wifi and analog hotspot CONFIG");
                    cloud_domain_div.removeAttribute("hidden");
                    wifi_div.setAttribute("hidden", "hidden");
                    wifi_hotspot_div.setAttribute("hidden", "hidden");
                }

                var io_selector = document.getElementsByClassName(param.className);
                //console.log("io selected = ", io_selector);
                for (i = 0; i < io_selector.length; i++) {
                    io_selector[i].className = io_selector[i].className.replace(" active-button", "");
                }
                document.getElementById(id).className += " active-button";
            }

            function change_wifi_mode(value) {
                console.log("value = ", value);
                if (value == 1) {
                    hide_div("AP_CONFIG");
                    unhide_div("STA_CONFIG");
                } else if (value == 3) {
                    unhide_div("AP_CONFIG");
                    hide_div("STA_CONFIG");
                }
            }

            function onlyOne(checkbox) {
                var checkboxes = document.getElementsByName("wifi");
                checkboxes.forEach((item) => {
                    if (item !== checkbox) item.checked = false;
                });

                var passwordInput = document.getElementById("11");
                var checkboxLabel = checkbox.nextElementSibling; // Get the label

                if (checkbox.checked) {
                    console.log("checkboxLabel = ", checkboxLabel.innerHTML);
                    document.getElementById("10").value = checkboxLabel.innerText;
                    //document.getElementById("10").value = "password_test";
                    unhide_div("hidden_connect_button");
                    // Checkbox is checked
                    if (!passwordInput) {
                        // Create password input if not exists
                        passwordInput = document.createElement("input");
                        passwordInput.type = "password";
                        passwordInput.id = "11";
                        passwordInput.name = "11";
                        passwordInput.placeholder = "Password";
                        passwordInput.minlength = "8";
                        passwordInput.maxlength = "64";
                    }
                    passwordInput.value = "";
                    // Insert password input after label and then insert line break
                    checkboxLabel.insertAdjacentElement("afterend", passwordInput);

                    // Create and insert line break after the label and before the password input
                    var lineBreak = document.createElement("br");
                    checkboxLabel.insertAdjacentElement("afterend", lineBreak);
                } else {
                    hide_div("hidden_connect_button");
                    // Checkbox is unchecked
                    if (passwordInput) {
                        // Remove password input if exists
                        passwordInput.parentNode.removeChild(passwordInput);
                        // Remove line break if exists
                        var lineBreak = checkboxLabel.nextElementSibling;
                        if (lineBreak && lineBreak.tagName === "BR") {
                            lineBreak.parentNode.removeChild(lineBreak);
                        }
                    }
                }
            }

            function updateHiddenInputs() {
                const datetimeInput = document.getElementById("date-input");
                const yearInput = document.getElementById("6000");
                const monthInput = document.getElementById("6001");
                const dayInput = document.getElementById("6002");

                const selectedDatetime = new Date(datetimeInput.value);
                console.log("selectedDatetime = ", selectedDatetime);

                yearInput.value = selectedDatetime.getFullYear();
                monthInput.value = selectedDatetime.getMonth() + 1;
                dayInput.value = selectedDatetime.getDate();

                console.log("yearInput = ", yearInput.value);
                console.log("monthInput = ", monthInput.value);
                console.log("dayInput = ", dayInput.value);
            }

            function add_time_options(id) {
                //options should only be added if size of select list is < 24

                var select = document.getElementById(id);
                if (select.length < 23) {
                    // Loop to add options back from 13 to 23
                    for (var i = 13; i <= 23; i++) {
                        var option = document.createElement("option");
                        option.text = i < 10 ? "0" + i : i.toString();
                        option.value = i;
                        option.style.textAlign = "center";
                        select.appendChild(option);
                    }
                    var option = document.createElement("option");
                    option.text = "00";
                    option.value = 0;
                    option.style.textAlign = "center";
                    select.insertBefore(option, select.firstChild);
                } else {
                    console.log("dont need to add time options");
                }
            }

            function remove_time_options(id) {
                var selectOption = document.getElementById(id);
                if (selectOption.length > 23) {
                    for (var i = 23; i > 12; i--) {
                        var item = selectOption[i];
                        item.remove();
                    }
                    var item_0 = selectOption[0];
                    item_0.remove();
                }
            }
            function padWithZero(number) {
                console.log("padwith zero number = ", number);

                // Convert the number to a string
                var str = number.toString();

                // Pad with a leading zero if the string length is 1
                if (str.length === 1) {
                    return "0" + str;
                }

                // If the string length is already 2 or more, return it as is
                return str;
            }

            document.getElementById("loadOverlay").style.display = "none";

            <!-- END OF SCRIPTS.JS-->
        
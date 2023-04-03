const int Led_A_Pin = 5;
const int Led_B_Pin = 6;


int LedASate = LOW;


int LedBSate = LOW;




void setup() {
  pinMode(Led_A_Pin, OUTPUT);
  pinMode(Led_B_Pin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
 
 if (Serial.available() > 0) { // Si hay datos disponibles en la comunicación serial
    char data = Serial.read();
    if (data == '1') { 
      LedASate = HIGH; // Encender el LED
    } else if (data == '0') { 
      LedASate = LOW; // Apagar el LED
    } else if (data == '2'){
      LedBSate = HIGH; // Encerder el LED 2
    } else if (data == '3'){
      LedBSate = LOW; // Encerder el LED 2
    }
    digitalWrite(Led_A_Pin, LedASate); // Actualizar el estado del LED
    digitalWrite(Led_B_Pin, LedBSate); // Actualizar el estado del LED
  }

// Serial.print("Hola");
// Serial.println();
// delay(1500);

}


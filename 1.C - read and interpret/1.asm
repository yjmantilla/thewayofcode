;https://schweigi.github.io/assembler-simulator/
	JMP start
opa: DB 5d
opb: DB 3d
opc: DB 0

start:
	MOV A, [opa]
	MOV D, [opb]
	DEC D
.loop:  
	ADD A,[opa]
	DEC D  
	JZ END
	JMP .loop

END:	
	MOV [opc],A
	HLT